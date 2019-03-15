import React from "react";

import { Link } from "react-router-dom";

import india_logo from "../../Resources/logo/india.png";

export const IndiaLogo = props => {
  const template = 
  <div className="img_cover"
    style={{
      width:props.width,
      height:props.height,
      background:`url(${india_logo}) no-repeat`
    }}
  >
  
  </div>;

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
