import React from "react";
import "../globals.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default AuthLayout;
