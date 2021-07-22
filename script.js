
/*add and delete todo list*/
let currentInput = ''

//input task
const input = document.querySelector('input')
input.addEventListener( 'input', ev => {
	currentInput = ev.target.value
})

//list (ul, li)
const mainDiv = document.createElement('div')

//add task button
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    if(currentInput !== ''){
	const spanTask = document.createElement('span')
	const span = document.createElement('span')
	span.innerHTML = currentInput
    spanTask.style.fontFamily = "Lobster, cursive"
	spanTask.append(span)

	const delBtn = document.createElement('button')
	delBtn.innerHTML = 'delete'
	delBtn.addEventListener('click', () => {
		mainDiv.removeChild(spanTask)
	})

	spanTask.append(delBtn)
	spanTask.append(document.createElement('br'))
	mainDiv.append(spanTask)
    }
    else{
        window.alert("Task cannot be empty")
    }
})
//show everything
document.body.append(input)
document.body.append(btn)
document.body.append(mainDiv)

