import {PureComponent} from "react";
import "./search-panel.css";

export class SearchPanel extends PureComponent {
    onChange = (e) => {
        this.props.onChange(e.target.value);
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.props.value}
                onChange={this.onChange}
            />
        );
    }
}
