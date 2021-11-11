import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    fetch("https://frozen-refuge-23457.herokuapp.com/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          reset();
        }
      });
  };
  return (
    <div>
      <h1>Admin</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
        <h6 className="display-6 mb-3">Enter Admin Email</h6>
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          className="form-control mb-3"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Button className="customBtn" type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin Successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
