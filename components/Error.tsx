import React from "react";

const Error: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <div className="prose">
      <h1 className="">{errorMsg}</h1>
    </div>
  );
};

export default Error;
