import React from "react";

function Card({header,paragraph,iconUrl}) {
  return (
    <div className="col-12 col-md-6 mb-4 flex-column">
      <img src={iconUrl} alt="icon" className="img-icon img-fluid"/>
      <h2 className="text-left mb-2">{header}</h2>
      <p>
        {paragraph}
      </p>
    </div>
  );
}

export default Card;
