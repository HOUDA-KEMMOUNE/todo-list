//DOM
const inputEnterEl = document.querySelector('.js-todo-input');
const inputDateEl = document.querySelector('.js-date');
const submitEl = document.querySelector('.js-todo-btn');
const inPageEl = document.querySelector('.js-todos');


//The array for the todo list
const todoList = [{
    name: 'Wake up at 5 AM',
    date: '05-10-24'
},
{
    name: 'Pray Salat El Fajr',
    date: '05-10-24'
},{
    name: 'Eat breakfast',
    date: '05-10-24'
}]
console.log(todoList);

//func add to do
const addTodo = () => {
    const userEnter = inputEnterEl.value;
    if (userEnter !== '') {
        // console.log(...todoList, inputEnterEl.value);
        todoList.push(userEnter)
    }
    console.log(todoList, "todoList")
}

submitEl.addEventListener('click', addTodo);

console.log('ssh test');
console.log('ssh test 2');