import React from "react";

const links = [
  {
    text: `© ${new Date().getFullYear()} hollywoodhandshakes.com`,
    route: "/"
  },
  {
    text: "About",
    route: "/about"
  }
];

export const Footer = () => (
  <div className="footer">
    {links.map((x) => <a href={x.route} className="footer__link">{x.text}</a>)}
  </div>
);

