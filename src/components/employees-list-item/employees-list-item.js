import "./employees-list-item.css";
import {memo, useCallback} from "react";
import {clsx} from "clsx";

const EmployeesListItemComponent = props => {
    const {id, name, salary, increase, rise, onToggleProperties, onDelete} = props;

    const handleRise = useCallback(() => {
        onToggleProperties(id, 'rise');
    }, [onToggleProperties, id]);

    const handleIncrease = useCallback(() => {
        onToggleProperties(id, 'increase');
    }, [onToggleProperties, id]);

    const handleDelete = useCallback(() => {
        onDelete(id);
    }, [onDelete, id]);

    return (
        <li className={clsx('employees-list-item', 'list-group-item', 'd-flex', 'justify-content-between', {
            'employees-list-item--increase': increase,
            'employees-list-item--rise': rise,
        })}>
            <div
                className="employees-list-item__lable list-group-item-label"
                onClick={handleRise}
            >
                {name}
            </div>
            <input
                type="text"
                className="employees-list-item__input list-group-item-input"
                defaultValue={salary + "$"}
            />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={handleIncrease}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={handleDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export const EmployeesListItem = memo(EmployeesListItemComponent);
