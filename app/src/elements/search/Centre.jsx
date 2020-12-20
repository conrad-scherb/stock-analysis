import React from "react";

export const Centre = ({ children }) => {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col">{children}</div>
    </div>
  );
};
