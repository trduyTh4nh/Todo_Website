import storage from "./util/storage.js";

const init = {
    todos: storage.get() || [],
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null
};

// const actions = {
//     add(state, title) {
//         if (title) {
//             console.log("check " + state)
//         }
//     }
// };


const actions = {

    tonggleAll({ todos }, completed) {
        todos.forEach(todo => {
            todo.completed = completed
        });

        const todo = todos[completed]
        console.log(todo)
        // todo.completed = completed
        storage.set(todos)
    },

    destroy({ todos }, index) {
        // console.log(todos)
        // state.todos.splice(args[0], 1)

        //  todos.splice(, 1)
        // storage.set(todos)

    },
    switchFilter(state, filter) {
        state.filter = filter
    },
    clearAll(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.editIndex = index
    },
    endEdit(state, title) {
        if (state.editIndex !== null) {
            if (title) {
                state.todos[state.editIndex].title = title
                storage.set(state.todos)
            }
            else {
                this.destroy(state, state.editIndex)
            }
            state.editIndex = null
        }
    },
    cancelEdit(state) {
        state.editIndex = null
    }



}
export default function reducer(state = init, action, ...args) {


    // return state
    switch (action) {
        case 'ADD': {
            const [title] = args

            var newWork = {
                ...state,
                todos: [...state.todos, {
                    title,
                    completed: false
                }]

            }
            var checksource = newWork.todos[newWork.todos.length - 1].title;
            if (checksource) {
                storage.set(newWork.todos)
                return {
                    ...state,
                    todos: [...state.todos, {
                        title,
                        completed: false
                    }]
                }
            }

        }
        case 'tonggle':
            {
                console.log(state.todos)
                var checksource = state.todos[args[0]]
                checksource.completed = !checksource.completed
                storage.set(state.todos)

            }
        case 'tonggleAll': {

            // var checksource = state.todos

            // checksource.forEach(todo => {
            //     //todo.completed =                 
            // });
            // // storage.set(state.todos)

            actions[action] && actions[action](state, ...args)
        }
        case 'destroy': {
            if (action == 'destroy') {
                actions[action] && actions[action](state, ...args)
                state.todos.splice(args[0], 1)
                storage.set(state.todos)
            }
        }
        case 'switchFilter': {
            actions[action] && actions[action](state, ...args)
        }
        case 'clearAll': {
            actions[action] && actions[action](state, ...args)
        }
        case 'startEdit': {
            actions[action] && actions[action](state, ...args)
        }
        case 'endEdit': {
            actions[action] && actions[action](state, ...args)
        }
        default: return state
    }



}

