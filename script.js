document.querySelector('form').addEventListener('submit', handleSubmitForm)
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck)
document.getElementById('clearAll').addEventListener('click', handleclearAll)

function handleSubmitForm(e) {
  e.preventDefault()
  let input = document.querySelector('input')
  if (input.value.length == 0) alert('Please Enter a Task')
  if (input.value != '') addTodo(input.value)
  input.value = ''
}

function handleClickDeleteOrCheck(e) {
  if (e.target.name == 'checkButton') checkTodo(e)

  if (e.target.name == 'deleteButton') deleteTodo(e)
}

function handleclearAll(e) {
 alert("Do you want to clear all the items");

 document.querySelector('ul').innerHTML = ''

}

function addTodo(todo) {
  let ul = document.querySelector('ul')
  let li = document.createElement('li')

  li.innerHTML = `
  <span class="todo-Item">${todo}</span>
  <button name="checkButton">
        <i class="fas fa-check-square"></i>
  </button>
  <button name="deleteButton">
        <i class="fas fa-trash"></i>
  </button>
  `

  li.classList.add('todo-list-item')
  ul.appendChild(li)
}
function checkTodo(e) {
  let item = e.target.parentNode
  if (item.classList.contains('todo-list-check-item'))
    item.classList.remove('todo-list-check-item')
  else item.classList.add('todo-list-check-item')
}

function deleteTodo(e) {
  let item = e.target.parentNode

  item.classList.add('todo-list-item-fall')
  item.remove()
}
