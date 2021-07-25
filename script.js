
//input task
const input = document.querySelector('input')
input.placeholder = "Enter list here"


//list
const undoneDiv = document.querySelector('#undonediv')
const doneDiv = document.querySelector('#donediv')

//local
let undonelist = []
let donelist = []
undonelist = JSON.parse(localStorage.getItem('undonelist'));
donelist = JSON.parse(localStorage.getItem('donelist'));
if(undonelist === null) undonelist = []
if(donelist === null) donelist = []

const Getlist = (list,value) => {
    if(list == ''){
        window.alert("Task cannot be empty na i sus")
    }
    else {
        const divTask = document.createElement('div')
        divTask.setAttribute("class","flex justify-between text-xl border-b-2")
        const div = document.createElement('div')
        div.innerHTML = list
        div.style.fontFamily = "Lobster, cursive"
        divTask.append(div)

        //button flex
        const Btndiv = document.createElement('div')
        Btndiv.setAttribute("class","flex justify-between space-x-5")
        Btndiv.style.fontFamily = "Lobster, cursive"
        Btndiv.style.visibility = "hidden"
        divTask.addEventListener("mouseenter", ()=>{
            Btndiv.style.visibility = "visible"
        })
        divTask.addEventListener("mouseleave", ()=>{
            Btndiv.style.visibility = "hidden"
        })

        
        //deleteButton
        const delBtn = document.createElement('button')
        delBtn.innerHTML = 'delete'
        delBtn.setAttribute("class","bg-red-500 px-1 rounded-xl")
        delBtn.addEventListener('click', () => {
            undoneDiv.removeChild(divTask)
            undonelist.splice(undonelist.findIndex(x => (x === div.innerHTML)),1)
            localStorage.setItem('undone',JSON.stringify(undonelist))
        })

        //doneButton
        const doneBtn = document.createElement('button')
        doneBtn.innerHTML = 'done'
        doneBtn.setAttribute("class","bg-yellow-500 px-1 rounded-xl")
        doneBtn.addEventListener('click', () => {
        doneDiv.insertBefore(divTask,doneDiv.firstChild)
        if(value === 1) div.style.textDecoration = 'line-through'
        doneDiv.insertBefore(divTask,doneDiv.firstChild)
        divTask.removeChild(Btndiv)
        ///////////////////////
        donelist.push(div.innerHTML)
        undonelist.splice(undonelist.findIndex(x => (x === div.innerHTML)),1)
        localStorage.setItem('undone',JSON.stringify(undonelist))
        localStorage.setItem('done',JSON.stringify(donelist))
        ///////////////////////
        })

        Btndiv.append(doneBtn)
        Btndiv.append(delBtn)
        divTask.append(Btndiv)
        if(value === 0)undoneDiv.insertBefore(divTask,undoneDiv.firstChild)
        else if(value === 1)doneDiv.insertBefore(divTask,doneDiv.firstChild)
    }
}
for (let i = 0; i < undonelist.length; i++) {
    Getlist(undonelist[i], 0)
}
for (let j = 0; j < donelist.length; j++) {
    Getlist(donelist[j], 1)
}



//add task button
const Addbtn = document.querySelector('#Add')
Addbtn.addEventListener('click', () => {
    INPUT()
})

//Reset Button
const Resetbtn = document.querySelector('#Reset')
Resetbtn.addEventListener('click', () => {
    Reset()
})

//input with Enter
input.addEventListener("keypress",(ev)=>{
    if(ev.key == "Enter"){
        if(input.value != "reset")INPUT()
        else{Reset()}
    }
})

//Input
function INPUT() {
    if(input.value == ''){
        window.alert("Task cannot be empty na i sus")
    }
    else{
        const divTask = document.createElement('div')
        divTask.setAttribute("class","flex justify-between text-xl border-b-2")
        const div = document.createElement('div')
        div.innerHTML = input.value
        div.style.fontFamily = "Lobster, cursive"
        /////////////////////////////
        undonelist.push(div.innerHTML)
        localStorage.setItem('undone', JSON.stringify(undonelist))
        /////////////////////////////
        divTask.append(div)

        //button flex
        const Btndiv = document.createElement('div')
        Btndiv.setAttribute("class","flex justify-between space-x-5")
        Btndiv.style.fontFamily = "Lobster, cursive"
        Btndiv.style.visibility = "hidden"
        divTask.addEventListener("mouseenter", ()=>{
            Btndiv.style.visibility = "visible"
        })
        divTask.addEventListener("mouseleave", ()=>{
            Btndiv.style.visibility = "hidden"
        })

        
        //deleteButton
        const delBtn = document.createElement('button')
        delBtn.innerHTML = 'delete'
        delBtn.setAttribute("class","bg-red-500 px-1 rounded-xl")
        delBtn.addEventListener('click', () => {
        undoneDiv.removeChild(divTask)
        //////////////////////////
        undonelist.splice(undonelist.findIndex(x => (x === div.innerHTML)),1)
        localStorage.setItem('undone',JSON.stringify(undonelist))
        //////////////////////////
        })

        //doneButton
        const doneBtn = document.createElement('button')
        doneBtn.innerHTML = 'done'
        doneBtn.setAttribute("class","bg-yellow-500 px-1 rounded-xl")
        doneBtn.addEventListener('click', () => {
        divTask.remove()
        doneDiv.insertBefore(divTask,doneDiv.firstChild)
        div.style.textDecoration = 'line-through'
        divTask.removeChild(Btndiv)
        ///////////////////////
        donelist.push(div.innerHTML)
        undonelist.splice(undonelist.findIndex(x => (x === div.innerHTML)),1)
        localStorage.setItem('undone',JSON.stringify(undonelist))
        localStorage.setItem('done',JSON.stringify(donelist))
        ///////////////////////
        })

        Btndiv.append(doneBtn)
        Btndiv.append(delBtn)

        divTask.append(Btndiv)
        undoneDiv.insertBefore(divTask,undoneDiv.firstChild)

        //Clear input box after Add
        input.value = ''
    }
}

//Reset
function Reset() {
    while (undoneDiv.firstChild) {
        undoneDiv.removeChild(undoneDiv.lastChild)
    }
    while (doneDiv.firstChild) {
        doneDiv.removeChild(doneDiv.lastChild)
    }
    input.value = ''
}


