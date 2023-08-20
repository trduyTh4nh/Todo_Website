const Todo_StorageKEY = 'TODOS'

export default{
    get(){
        return JSON.parse(localStorage.getItem(Todo_StorageKEY)) || []
    },
    set(todos){
        localStorage.setItem(Todo_StorageKEY, JSON.stringify(todos))
    }
}