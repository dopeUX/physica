import React from "react";
import "./TherapistCard.css";

interface TherapistCardProps {
  children?: React.ReactNode;
  name: string;
  availability: boolean;
  image: string;
  click: Function;
  isSelected: boolean;
}

const TherapistCard: React.FC<TherapistCardProps> = ({
  name,
  availability,
  image,
  click,
  isSelected,
}) => {
  return (
    <div
      className={`therapist-card ${isSelected && "selected"}`}
      onClick={() => {
        click();
      }}
    >
      <div className="image-wrapper">
        <img src={image} alt="" />
      </div>

      <div className="details">
        <p className="name">{name}</p>
        <p className="avail">{availability ? "available" : "not available"}</p>
      </div>
    </div>
  );
};

export default TherapistCard;
