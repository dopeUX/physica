import React from "react";
import "./DateCard.css";

interface DateCardProps {
  day: string | number;
  month: string;
  weekDay: string;
  isSelected: boolean;
  click: Function;
}

const DateCard: React.FC<DateCardProps> = ({
  day,
  month,
  weekDay,
  isSelected,
  click,
}) => {
  return (
    <div className="date-card">
      <div className="card">
        <p>{weekDay}</p>

        <div
          className={`date-sel ${isSelected && "selected-date"}`}
          onClick={() => {
            click();
          }}
        >
          <p>
            {day} {month.substring(0, 3)}
          </p>
          <p className="avail">Available</p>
        </div>
      </div>
    </div>
  );
};

export default DateCard;
