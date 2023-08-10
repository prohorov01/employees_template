import { PureComponent } from "react";
import { AppInfo } from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import { AppFilter } from "../app-filter/app-filter";
import { EmployeesList } from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";
import { getEmployeesByTerm } from "../../helpers/getEmployeesByTerm";
import { getEmployeesByFilter } from "../../helpers/getEmployeesByFilter";

import "./app.css";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };

    this.maxId = 4;
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  onToggleProperty = (id, key) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [key]: !item[key] };
        }
        return item;
      }),
    }));
  };

  getVisibleEmployee = () => {
    const { data, term, filter } = this.state;
    return getEmployeesByFilter(getEmployeesByTerm(data, term), filter);
  };

  onChangeTerm = (term) => {
    this.setState({ term });
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;

    const employeeCount = data.length;
    const increasedCount = data.filter((item) => item.increase).length;

    return (
      <div className="app">
        <AppInfo
          employeeCount={employeeCount}
          increasedCount={increasedCount}
        />

        <div className="search-panel">
          <SearchPanel value={term} onChange={this.onChangeTerm} />
          <AppFilter value={filter} onChange={this.onChangeFilter} />
        </div>

        <EmployeesList
          list={this.getVisibleEmployee()}
          onDelete={this.onDelete}
          onToggleProperty={this.onToggleProperty}
        />

        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
