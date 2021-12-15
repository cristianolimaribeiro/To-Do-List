const input = document.getElementById('input') 
const buttonAddTask = document.querySelector('.add')
const buttonRemoveTask = document.querySelector('.remove')
const tasks_list = document.getElementById('tasks')

const tasks = JSON.parse(localStorage.getItem('list_tasks')) || []

function showTasks(){

    tasks_list.innerHTML=''

    for(item of tasks){
                
        const taskElements = document.createElement('div')
        taskElements.setAttribute('class', 'task-item')
        
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')

        const itemList = document.createElement('p')
        const itemText = document.createTextNode(item)

        const btn = document.createElement('button')
        btn.setAttribute('class','btn-remove')
        const btnText = document.createTextNode('X')
        btn.appendChild(btnText)

        const pos = tasks.indexOf(item)
        btn.setAttribute('onclick', `removeTask(${pos})`)

        itemList.appendChild(itemText)
        taskElements.appendChild(checkbox)
        taskElements.appendChild(itemList)
        taskElements.appendChild(btn)

        tasks_list.appendChild(taskElements)

    }
}
showTasks()

function addTasks(){
    const task = input.value
    if(task === ''){
        alert('Insira uma Tarefa')
    }else {
        tasks.push(task)
    }
    

    input.value = ''
    showTasks()
    saveInLocalStorage()
}

buttonAddTask.setAttribute('onclick','addTasks()')

function removeTask(pos){
    tasks.splice(pos,1)
    showTasks()
    saveInLocalStorage()
}

function saveInLocalStorage(){
    localStorage.setItem('list_tasks', JSON.stringify(tasks))
}

