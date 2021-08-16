import React from "react";
import "./SearchPanel.css"

export default class SearchPanel extends React.Component<{}> {


	state = {
		term: ''
	}

	onSearch = (e) => {
		const term = e.target.value
		this.setState({term})
		this.props.onSearch(term)
	}


	render() {
		return (
			<input className={"form-control search-input"}
			       type="text"
			       placeholder="search"
			       onChange={this.onSearch}
			       value={this.state.term}
			/>

		)
	}
}

