
const newTask = document.querySelector('.form2');
const list = document.querySelector('.todos');
const search = document.querySelector('.input1');

const generateTemplate = todo => {
    
    const HTML =       
    `<li class ="list">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += HTML;  
};  

newTask.addEventListener('submit' ,e => {
    e.preventDefault();

    const todo = newTask.name2.value.trim();
    
    if(todo.length){

    generateTemplate(todo);
    newTask.reset();
    }
});

list.addEventListener('click', e => {
        if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        }

});

// SEARCH FOR A TASK WHICH IS ON THE LIST

const filterTodos = term => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
        
};

search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});
