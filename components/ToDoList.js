import html from "../core.js";
import ToDoItem from "../components/ToDoItem.js"
import { connect } from "../store.js";


function ToDoList({ todos, filter ,filters }) {
	console.log(filters)
	return html`
    <section class="main">
				<input 
					id="toggle-all" 
					class="toggle-all" 
					type="checkbox"
					onchange="dispatch('tonggleAll', this.checked)"
					${todos.every(filters.completed) && 'checked'}
				>

				<label for="toggle-all">Mark all as complete</label>
				
				<ul class="todo-list">

                    ${todos.filter(filters[filter]).map((todo, index) => ToDoItem({ todo, index }))}
    
				</ul>
			</section>
    
    `
}

export default connect()(ToDoList)


//${todos.filter(filters[filter]).map((todo, index) => ToDoItem({ todo, index }))}