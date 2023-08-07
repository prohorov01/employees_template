import {EmployeesListItem} from "../employees-list-item/employees-list-item";

import "./employees-list.css";
import {memo} from "react";

const EmployeesListComponent = props => {
    const {
        list = [],
        onDelete,
        onToggleProperty,
    } = props;

    return (
        <ul className="employees-list app-list list-group">
            {list.map((item) => {
                return (
                    <EmployeesListItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        increase={item.increase}
                        salary={item.salary}
                        rise={item.rise}
                        onDelete={onDelete}
                        onToggleProperties={onToggleProperty}
                    />
                );
            })}
        </ul>
    );
};

export const EmployeesList = memo(EmployeesListComponent);
