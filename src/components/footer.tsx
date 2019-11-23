import React from "react";

interface Props {
  links: {
    text: string;
    route: string;
  }[]
}

export const Footer = (props: Props) => (
  <div className="footer">
    {props.links.map((x) => <a href={x.route} className="footer__link">{x.text}</a>)}
  </div>
);

