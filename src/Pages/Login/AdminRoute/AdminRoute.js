import React from "react";
import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { Container } from "react-bootstrap";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Container className="text-center">
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
