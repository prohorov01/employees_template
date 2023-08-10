import { useState } from "react";
import "./search-panel.css";

const SearchPanel = () => {
  const [value, setValue] = useState();
  const onChange = (value) => {
    setValue(value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchPanel;
