import { useState } from "react";
import "./employees-add-form.css";

const EmployeesAddForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const onValueChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "salary") {
      setSalary(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name && salary) {
      onAdd(name, parseInt(salary));
      setName("");
      setSalary("");
    }
  };

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          name="name"
          value={name}
          onChange={onValueChange}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name="salary"
          value={salary}
          onChange={onValueChange}
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
