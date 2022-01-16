import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";

import useAuth from "../../../Context/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if(isLoading){
      return <Spinner animation="grow" />
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
                pathname: "/admin-box",
                state: { from: location },
              }}
            />
          )
        }
      ></Route>
   
  );
};

export default PrivateRoute;
