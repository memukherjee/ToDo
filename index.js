let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click',addToDo);
let listGroup = document.getElementById('list-group');
let textInput = document.getElementById('text-input');
textInput.addEventListener('keydown',enterKey);
function enterKey(e){
    if(e.code == 'Enter'){
        addBtn.click();
        textInput.value="";
    }
}
function addToDo(e){
    let btn = e.currentTarget;
    let input = btn.previousElementSibling;
    let newLi = document.createElement('li');
    if(listGroup.children[0].className.includes('emptyMsg')){
        listGroup.children[0].remove();
    }
    newLi.className="list-group-item mb-2 d-flex justify-content-between border border-dark rounded";
    newLi.innerHTML = `<h3 class="flex-grow-1">${input.value}</h3>
                        <button class="btn btn-warning mx-3" onclick="editWork(this)">
                            <i class="far fa-edit"></i>
                        </button>
                        <button class="btn btn-danger" onclick="removeWork(this)">
                            <i class="fas fa-trash-alt"></i>
                        </button>`
    listGroup.appendChild(newLi);
}

function removeWork(e){
    let currentWork = e.parentElement;
    currentWork.remove();
    if(listGroup.children.length<1){
        let emptyMsg = document.createElement('h3');
        emptyMsg.className = "emptyMsg text-center"
        emptyMsg.textContent = "Add some works of your day...";
        listGroup.appendChild(emptyMsg);
    }
}

function editWork(e){
    if(e.innerHTML.includes('edit')){
        let currentText = e.previousElementSibling;
        let currentWorkName = currentText.textContent;
        let workInput = document.createElement('input');
        workInput.type = 'text';
        workInput.placeholder = 'Work name';
        workInput.className = 'form-control'
        workInput.value = currentWorkName;
        e.parentElement.replaceChild(workInput,currentText);
        e.innerHTML = "<i class='fas fa-save'></i>";
    }
    else{
        let newText = document.createElement('h3');
        let inputBox = e.previousElementSibling;
        let inputBoxName = inputBox.value;
        newText.textContent = inputBoxName;
        newText.className = 'flex-grow-1';
        e.parentElement.replaceChild(newText,inputBox);
        e.innerHTML = '<i class="far fa-edit"></i>';
    }
}
