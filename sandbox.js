
const clock = document.querySelector('.czas');
const liveClock = () => {
    const now = new Date();
    const html = 
    `<h1> ${now} </h1>`
    clock.innerHTML = html;
};
setInterval(liveClock, 1000);

const addForm = document.querySelector('.form__input');
const myList = document.getElementById('myList');


//dodawanie nowego zadania//

addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todo = addForm.add.value.trim();
    if(todo.length){
        const html = `<li class="radio" ><input type="radio" class="radio_check" name="but">${todo} </li>`                
        myList.innerHTML += html;
        addForm.reset();
    }

});

//usuwanie zadania z listy//
myList.addEventListener('change', (e) => {
    e.preventDefault()
        const delTask = document.querySelector('.button__remove')
            delTask.addEventListener('click', () => {
                e.target.parentElement.remove()
            })
    
})

//skreslania zadania z listy//

myList.addEventListener('change', (e) => {
    e.preventDefault()
    const crossTask = document.querySelector('.button__cross')
        crossTask.addEventListener('click', () => {
             e.target.parentElement.style.textDecoration = 'line-through';
        })
})







