let form = document.querySelector('form');
const input = document.querySelector('#foodName');
const list = document.querySelector('.list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value);
    const li = document.createElement('li');
    li.innerHTML = input.value;
    list.appendChild(li);
    input.value = "";
})