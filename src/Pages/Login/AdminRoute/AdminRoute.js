import React from "react";
import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { Container } from "react-bootstrap";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  if (!admin) {
    return (
      <Container className="text-center pt-5">
        <CircularProgress />
      </Container>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
