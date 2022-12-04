import React from "react";
import { Navigate } from "react-router-dom";
function index() {
  return <Navigate to="/app" replace />;
}

export default index;
