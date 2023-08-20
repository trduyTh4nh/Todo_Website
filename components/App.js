import html from "../core.js";
import { connect } from "../store.js";
import Header from "../components/Header.js";
import ToDoList from "../components/ToDoList.js";
import Footer from "../components/Footer.js"


function App({todos}){
    return html`
        <section class="todoapp">
         ${Header()}
         ${todos.length > 0 && ToDoList()}
         ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connect()(App)