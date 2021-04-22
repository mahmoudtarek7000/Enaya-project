import React from "react";
const Gallery = ({gallery}) => {
  return (
    <div className="section-cont">
      <div className="container">
        <h2 className="text-center mb-5">Gallery</h2>

        <div className="row">
          <div className="col-12 col-md-4 p-3">
            <img src={gallery[0]} alt="image1" className="w-100" />
          </div>
          <div className="col-12 col-md-4 p-3">
            <img src={gallery[1]} alt="image1" className="w-100" />
          </div>
          <div className="col-12 col-md-4 p-3">
            <img src={gallery[2]} alt="image1" className="w-100" />
          </div>
          <div className="col-12 col-md-4 p-3">
            <img src={gallery[3]} alt="image1" className="w-100" />
          </div>
          <div className="col-12 col-md-4 p-3">
            <img src={gallery[4]} alt="image1" className="w-100" />
          </div>
          <div className="col-12 col-md-4 p-3">
            <img src={gallery[5]} alt="image1" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
