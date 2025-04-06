import React from "react";
import ReactDOM from "react-dom";

interface ToasterProps {
  message: string | null;
}

const Toaster: React.FC<ToasterProps> = ({ message }) => {
  if (!message) return null;

  return ReactDOM.createPortal(
    <div className="fixed z-50 flex items-center justify-center inset-x-0 top-5 w-fit bg-zinc-700 text-white px-6 py-3 rounded-lg shadow-md text-center motion-preset-bounce m-auto h-12">
      {message}
    </div>,
    document.body
  );
};

export default Toaster;
