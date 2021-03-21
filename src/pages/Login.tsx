import React from "react";
import { Link } from "react-router-dom";
import LoginLayout from "../components/LoginLayout";

const leftContent = (
  <React.Fragment>
    <div className="text-3xl font-bold">Hello, Friend!</div>
    <div className="mt-4">
      Please sign in to start your journey. If you don't have an account yet,
      please{" "}
      <Link to="/register" className="font-bold text-blue-50">
        sign up
      </Link>
      .
    </div>
  </React.Fragment>
);

const Login: React.FC = () => {
  return (
    <LoginLayout leftContent={leftContent}>
      <input
        type="text"
        placeholder="Email"
        className="w-full px-4 py-2 border-2 border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border-2 border-gray-300 mt-2 rounded"
      />

      <div className="mt-2 ml-2 text-left text-sm">
        <a href="https://google.com" className="text-blue-500">
          Forgot password?
        </a>
      </div>
    </LoginLayout>
  );
};

export default Login;
