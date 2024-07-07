// Card.js
import React from "react";

const Card = ({ title, description, imageSrc, applied, handleApplyClick }) => {
  return (
    <div className={`card ${applied ? "applied" : ""}`}>
      <img src={imageSrc} alt="Card Image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="btn-apply" onClick={handleApplyClick}>
          {applied ? "✔" : "Apply"}
        </button>
      </div>
    </div>
  );
};

export default Card;
