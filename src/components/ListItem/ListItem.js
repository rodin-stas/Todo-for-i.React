import React, {Component} from "react";
import "./ListItem.css"

export default class ListItem extends Component {

	render() {
		const {label, onDeleted, onToggleDone, onToggleImportant, done, important} = this.props; // Деструктурезация props const ListItem = (props) => {

		let classNames = 'todo-list-item'

		if (done) {
			classNames += ' done'
		}
		if (important) {
			classNames += ' important'
		}

		return (
			<span className={classNames}>
                <span
	                className="todo-list-item-label"
	                onClick={onToggleDone}>
                {label}
                </span>
            <div>
	            <button type="button"
	                    className="btn btn-outline-success btn-sm float-right"
	                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"/>
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                    <i className="fa fa-trash-o"/>
                </button>
            </div>

            </span>
		);
	}
}

