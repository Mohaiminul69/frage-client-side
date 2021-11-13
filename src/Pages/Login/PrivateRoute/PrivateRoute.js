import React from "react";
import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { Container } from "react-bootstrap";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
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
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
