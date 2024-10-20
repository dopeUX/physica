import React from "react";
import "./FormInput.css";

interface FormInputProps {
  label: string;
  field: string;
  placeholder?: string;
  type: string;
  list?: Array<any>;
  value: string | number;
  onValueChange: Function;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  field,
  placeholder,
  type,
  list,
  value,
  onValueChange,
}) => {
  return (
    <div className="form-input">
      <p>{label}</p>
      {type === "text" && (
        <input
          type="text"
          title={label}
          value={value}
          placeholder={`Enter your ${placeholder || label}`}
          onChange={(e) => {
            onValueChange(field, e.currentTarget.value);
          }}
        />
      )}
      {type === "number" && (
        <input
          type="number"
          title={label}
          value={value}
          placeholder={`Enter your ${placeholder || label}`}
          onChange={(e) => {
            onValueChange(field, e.currentTarget.value);
          }}
        />
      )}{" "}
      {type === "dropdown" && (
        <select
          className="custom-select"
          title={label}
          value={value}
          onChange={(e) => {
            onValueChange(field, e.currentTarget.value);
          }}
        >
          {list &&
            list.map((x, i) => {
              return (
                <option value={x.id} key={i}>
                  {x.city}
                </option>
              );
            })}
        </select>
      )}
    </div>
  );
};

export default FormInput;
