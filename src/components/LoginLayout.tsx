import React from "react";
import loginImg from "../assets/login.svg";

type Props = {
  leftContent: React.ReactNode;
  submitLabel?: string;
  onSubmit?: () => void;
};

const LoginLayout: React.FC<Props> = ({
  leftContent,
  submitLabel = "Sign in",
  onSubmit,
  children
}) => {
  return (
    <div className="flex items-center w-full h-full bg-green-50 relative bg-img">
      <div className="mx-auto flex rounded shadow-lg relative">
        <div className="w-96 h-120 bg-green-400 rounded-l">
          <div className="w-64 h-64 mx-auto mt-8">
            <img src={loginImg} />
          </div>
          <div className="text-center mt-4 text-white px-4">{leftContent}</div>
        </div>
        <div className="w-80 h-120 bg-white rounded-r flex items-center">
          <div className="w-full h-full px-8 text-center text-gray-600 flex flex-col">
            <div className="flex-none mt-8">
              <div className="text-5xl tracking-widest text-gray-500">
                Tasket
              </div>

              <div className="text-sm mt-4 font-bold text-gray-400">
                Easy and simple task management
              </div>
            </div>

            <div className="flex-auto flex items-center">
              <div>{children}</div>
            </div>

            <div className="flex-none mb-8">
              <button
                type="button"
                className="w-full py-2 border bg-green-400 text-white font-bold"
                onClick={onSubmit}
              >
                {submitLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
