import * as React from "react";

export const Accordion: React.FunctionComponent = ({ children }) => {
  return (
    <div className="accordion">
      {children}
    </div>
  );
};
