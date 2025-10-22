import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/auth" replace />;
  } 
    return children;

};

export default Private;
