import React from "react";
import { Handshakes } from "../containers/Handshakes";
import { About } from "../containers/About";

export const DisplaySection: React.FunctionComponent = () => {
  const renderOutput = (component: React.ReactNode) => (
    <div className="page__content">
      {component}
    </div>
  );

  console.log("pathname", window.location.pathname)
  switch(window.location.pathname) {
    case "/":
      return renderOutput(<Handshakes />);
    case "/about":
      return renderOutput(<About />);
    default:
      return renderOutput(<Handshakes />);
  }
};

