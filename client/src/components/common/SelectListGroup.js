import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const SelectListGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  options
}) => {
  const selectOptions = options.map(option => (
    <option value={option.value}>{option.label}</option>
  ));
  return (
    <div className="form-group">
      <select
        key={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  error: propTypes.string,
  info: propTypes.string,
  onChange: propTypes.func.isRequired,
  options: propTypes.array.isRequired
};

export default SelectListGroup;
