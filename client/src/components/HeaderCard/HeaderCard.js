import React from "react";
import "./HeaderCard.css";
import AirportShuttle from "@mui/icons-material/AirportShuttle";

function HeaderCard({title,data,icon}) {
  return (
    <div className="headerCard">
      <div className="headerCard__icon">
        {icon}
      </div>
      <div className="headerCard__content">
        <p>{title}</p>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default HeaderCard;
