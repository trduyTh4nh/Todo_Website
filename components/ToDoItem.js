import html from "../core.js";
import { connect } from "../store.js";

function ToDoItem({todo, index, editIndex}) {
	var check = todo.completed == true ? 'checked' : ""

    return html`
<li 
class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
	<div class="view">
		<input class="toggle" type="checkbox" ${ check }
		onchange="dispatch('tonggle', ${index})"
		>
		<label ondblclick="dispatch('startEdit', ${index})" >${todo.title}</label>
		<button class="destroy" onclick="dispatch('destroy', ${index})"></button>
	</div>
	<input class="edit" value="${todo.title}"
		onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit') "
		onblur="dispatch('endEdit', this.value.trim())"	
	>
</li>
`
}

export default connect()(ToDoItem)