import React from "react"
import ListItem from "../ListItem/ListItem"
import "./TodoList.css"

const TodoList = ({todos, onDeleted,onToggleDone, onToggleImportant}) => { //реструктуризация props

	const elems = todos.map((item) => {
		const {id, ...itemProps} = item; // деструктурируем, чтоб в itemProps не было id
		return (
			<li key={id} className={"list-group-item"}>
				<ListItem
					{...itemProps}
					onDeleted={() => onDeleted(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleDone={() => onToggleDone(id)}
				/>
			</li> // ... -это спрет оператор. Заменяет abel={item.label} important={item.important}
		)
	})
	return (
		<ul className={"list-group todo-list"}>
			{elems}
		</ul>
	)
}

export default TodoList