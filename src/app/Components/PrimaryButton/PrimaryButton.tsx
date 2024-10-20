import React from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
  title: string;
  onsubmit: Function;
  classN?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onsubmit,
  classN,
}) => {
  return (
    <button
      title={title}
      className={`primary-button ${classN}`}
      onClick={() => {
        onsubmit();
      }}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
