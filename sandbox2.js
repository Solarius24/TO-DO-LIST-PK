const list = document.getElementById('myList')
function js_func() {
    const value = document.getElementById('to-do').value;
    const li = document.createElement('LI')
    const textNode = document.createTextNode(value);
    li.appendChild(textNode);
    list.appendChild(li);
}
list.addEventListener('click', (ev) => {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
}, false)