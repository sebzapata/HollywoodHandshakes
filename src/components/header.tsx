import React from "react";

export const Header: React.FunctionComponent = () => (
  <div className="header">
    <h1 className="header__title">
      <a href="/">Hollywood Handshakes</a>
    </h1>
    <h2 className="header__subtitle">
      <span className="header__subtitle__span">The definitive collection <br className="header__subtitle__break" />of Paul Hollywood's infamous handshakes</span>
    </h2>
  </div>
);
