import React, {Component} from "react";
import "./AddForm.css"

export default class AddForm extends Component {

	state = {
		label: ''
	}

	onLabelChange = (e) => {
		this.setState({label: e.target.value})
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.AddItem(this.state.label)
		this.setState({   // очищаем инпу
			label:''
		})
	}

	render() {
		return (

			<form className={"add-form"}
			      onSubmit={this.onSubmit}>
				<input className={"form-control add-input"}
				       type="text"
				       placeholder={"What needs to be done?"}
				       onChange={this.onLabelChange}
				       value={this.state.label}  //делаем контролируемый элемент. Для очистки инпута
				/>
				<button

					className={"btn btn-outline-secondary"}
				>Add
				</button>
			</form>

		)
	}
}

