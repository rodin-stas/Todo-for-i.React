import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemFilter from "../StautusFilter/StatusFilter";
import TodoList from "../TodoList/TodoList";
import AddForm from "../AddForm/AddForm"
import React, {Component} from "react";

export default class App extends Component {

	maxID = 100

	state = {
		items: [
			this.createNewItem("First"),
			this.createNewItem("Two"),
			this.createNewItem("Free"),
			this.createNewItem("Four")
		],
		term:'',
		filter:'all' // active, done, all
	}

	createNewItem(label) {
		return (
			{
				label: label,
				important: false,
				done: false,
				id: this.maxID++
			}
		)
	}

	deleteItem = (id) => {
		this.setState(({items}) => {
			const indexDel = items.findIndex((el) => el.id === id)
			const newArr = [...items.slice(0, indexDel), ...items.slice(indexDel + 1)]
			return {
				items: newArr
			}
		})

	}
	AddItem = (text) => {
		const newItem = this.createNewItem(text)
		this.setState(({items}) => {
			const newArr = [...items, newItem]
			return {
				items: newArr
			}

		})
	}

	onToggleImportant = (id) => {
		this.setState(({items}) => {
			// const indexUpdate = items.findIndex((el) => el.id === id)
			// const oldItem = items[indexUpdate]
			// const newItem = {...oldItem, important: !oldItem.important}
			// const newArr = [...items.slice(0, indexUpdate), newItem, ...items.slice(indexUpdate + 1)]
			// return {
			// 	items: newArr
			// }
			return {
				items: this.toggleProperty(items,id,'important')
			}

		})
	}

	onToggleDone = (id) => {
		this.setState(({items}) => {
			// const indexUpdate = items.findIndex((el) => el.id === id)
			// const oldItem = items[indexUpdate]
			// const newItem = {...oldItem, done: !oldItem.done}
			// const newArr = [...items.slice(0, indexUpdate), newItem, ...items.slice(indexUpdate + 1)]
			// return {
			// 	items: newArr
			// }
			return {
				items: this.toggleProperty(items,id,'done'),
			}

		})
	}

	toggleProperty(arr,id,propName){

		const indexUpdate = arr.findIndex((el) => el.id === id)
		const oldItem = arr[indexUpdate]
		const newItem = {...oldItem, [propName]: !oldItem[propName]}
		return [...arr.slice(0, indexUpdate), newItem, ...arr.slice(indexUpdate + 1)]


	}
	onSearch=(term)=>{
		this.setState({term})

	}

	searsh(items,term){
		if(term===''){
			return items
		}
		return items.filter((el)=>el.label.toLowerCase().includes(term))
	}
	onFilterChange=(filter)=>{
		this.setState({filter})
	}

	filter(items,filter){
	switch (filter){
		case 'all':
			return items
		case 'active':
			return items.filter((item)=>!item.done)
		case 'done':
			return items.filter((item)=>item.done)
		default:
			return items
	}
	}
	render() {
		const{items,term,filter} =this.state

		// const impCount= this.state.items.filter((el)=>el.important).length
		const doneCount =items.filter((el)=>el.done).length
		const count = items.length - doneCount

		const visibleItems = this.filter(this.searsh(items,term),filter)
		return (
			<div className={"todo-app"}>
				<AppHeader
					toDo={count}
					done={doneCount}/>
				<div className="top-panel d-flex">
					<SearchPanel
						onSearch={this.onSearch}
					/>
					<ItemFilter
					filter={filter}
					onFilterChange={this.onFilterChange}
					/>
				</div>
				<TodoList
					todos={visibleItems}
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}

				/>
				<AddForm
					AddItem={this.AddItem}
				/>
			</div>
		)

	}
}
