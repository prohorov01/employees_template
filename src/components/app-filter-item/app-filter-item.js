import {memo, useCallback} from "react";
import {clsx} from "clsx";
import "./app-filter-item.css";

const AppFilterItemComponent = (props) => {
    const {isActive, label, name, onChange} = props;

    const handleClick = useCallback(() => {
        onChange?.(name);
    }, [onChange, name]);

    return (
        <button
            type="button"
            className={clsx('app-filter-item', {'app-filter-item_active': isActive})}
            onClick={handleClick}
        >
            {label}
        </button>
    )
};

export const AppFilterItem = memo(AppFilterItemComponent);
