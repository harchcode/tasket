import React from "react";
import { Link } from "react-router-dom";
import LoginLayout from "../components/LoginLayout";

const leftContent = (
  <React.Fragment>
    <div className="text-3xl font-bold">Hello, Friend!</div>
    <div className="mt-4">
      Please fill in the needed information to sign up and begin your journey.
      If you already have an account, please{" "}
      <Link to="/login" className="font-bold text-blue-50">
        sign in
      </Link>
      .
    </div>
  </React.Fragment>
);

const Register: React.FC = () => {
  return (
    <LoginLayout leftContent={leftContent} submitLabel="Sign up">
      <input
        type="text"
        placeholder="Email"
        className="w-full px-4 py-2 border-2 border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-4 py-2 border-2 border-gray-300 mt-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border-2 border-gray-300 mt-2 rounded"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full px-4 py-2 border-2 border-gray-300 mt-2 rounded"
      />{" "}
    </LoginLayout>
  );
};

export default Register;
