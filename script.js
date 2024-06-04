const todoList = [];
document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
    addToList();
})
function addToList() {
    const inputElement = document.querySelector('.to-do-input');
    const dateInputElement = document.querySelector('.js-due-date-input');

    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    todoList.push({
        //name= name,
        //dueDate = dueDate
        name,
        dueDate
    });
    inputElement.value = '';
    renderList();
}

function renderList() {
    let todoHTML = '';
    todoList.forEach((todoObject, index)=>{
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
                <div> ${name} </div> 
                <div> ${dueDate}</div>
                <button 
                    class="delete-button js-delete-todo-button"
                >
                        Delete
                </button>
                    `;
        todoHTML += html;
    });

    document.querySelector('.js-displayList').innerHTML = todoHTML;
    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index)=>{
        deleteButton.addEventListener('click',()=>{
            todoList.splice(index,1); 
                    renderList()
        })
    })
}
