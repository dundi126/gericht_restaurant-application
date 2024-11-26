import React from "react";

import images from "../../constants/images";

const SubHeading = (prop) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{prop.title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
