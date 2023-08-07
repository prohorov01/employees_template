import "./app-filter.css";
import {memo, useCallback, useMemo} from "react";
import {AppFilterItem} from "../app-filter-item/app-filter-item";

const AppFilterComponent = (props) => {
    const {value, onChange} = props;

    const dictionary = useMemo(() => {
        return [
            {name: "all", label: "Все сотрудники"},
            {name: "rise", label: "На повышение"},
            {name: "moreThen1000", label: "З/П больше 1000$"},
        ];
    }, []);

    const handleChange = useCallback((value) => {
        onChange(value);
    }, [onChange]);

    return (
        <div className="btn-group">
            {dictionary.map(item => {
                return (
                    <AppFilterItem
                        key={item.name}
                        name={item.name}
                        label={item.label}
                        isActive={item.name === value}
                        onChange={handleChange}
                    />
                )
            })}
        </div>
    );
};

export const AppFilter = memo(AppFilterComponent);
