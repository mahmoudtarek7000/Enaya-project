import React from "react";

function Card({header,paragraph,iconUrl}) {
  return (
    <div className="col-lg-3 flex-column">
      <img src={iconUrl} alt="icon" className="img-icon img-fluid"/>
      <h2>{header}</h2>
      <p>
        {paragraph}
      </p>
    </div>
  );
}

export default Card;
