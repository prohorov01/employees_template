import { useState } from "react";
import { AppInfo } from "../app-info/app-info";
import { SearchPanel } from "../search-panel/search-panel";
import { AppFilter } from "../app-filter/app-filter";
import { EmployeesList } from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";
import { getEmployeesByTerm } from "../../helpers/getEmployeesByTerm";
import { getEmployeesByFilter } from "../../helpers/getEmployeesByFilter";

import "./app.css";

const App = () => {
  const [data, setData] = useState([
    { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
    { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
    { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
  ]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const onDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: data.length + 1,
    };

    setData([...data, newItem]);
  };

  const onToggleProperty = (id, key) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, [key]: !item[key] };
        }
        return item;
      })
    );
  };

  const getVisibleEmployee = () => {
    return getEmployeesByFilter(getEmployeesByTerm(data, term), filter);
  };

  const onChangeTerm = (term) => {
    setTerm(term);
  };

  const onChangeFilter = (filter) => {
    setFilter(filter);
  };

  const employeeCount = data.length;
  const increasedCount = data.filter((item) => item.increase).length;

  return (
    <div className="app">
      <AppInfo employeeCount={employeeCount} increasedCount={increasedCount} />

      <div className="search-panel">
        <SearchPanel value={term} onChange={onChangeTerm} />
        <AppFilter value={filter} onChange={onChangeFilter} />
      </div>

      <EmployeesList
        list={getVisibleEmployee()}
        onDelete={onDelete}
        onToggleProperty={onToggleProperty}
      />

      <EmployeesAddForm onAdd={addItem} />
    </div>
  );
};

export default App;
