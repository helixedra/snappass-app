import React from "react";
import ReactDOM from "react-dom";

interface ToasterProps {
  message: string | null;
}

const Toaster: React.FC<ToasterProps> = ({ message }) => {
  if (!message) return null;

  return ReactDOM.createPortal(
    <div className="fixed z-50 flex items-center justify-center top-5 left-1/2 transform -translate-x-1/2 max-w-sm bg-zinc-700 text-white px-6 py-3 rounded-lg shadow-md">
      {message}
    </div>,
    document.body
  );
};

export default Toaster;
