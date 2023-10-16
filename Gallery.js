import React from "react";
import "../src/Gallery.css";
const Gallery = ({ data }) => {
  return (
    <div className="gallery">
      {data.map((image) => (
        <div key={image.id}>
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            width="200"
            height="200"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
