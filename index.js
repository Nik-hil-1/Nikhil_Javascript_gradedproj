function list(name){
    this.name = name;
    this.listIndex = 0;
}

list.prototype.getElementByIndex = function(){
    return lists[this.listIndex];
}

var lists = [];

document.getElementById("add").onclick = function(){

    var task = document.getElementById("toDo").value;
    document.getElementById("toDo").value = "";
    console.log(task);
    lists.push(new list(task));

    const newLine = document.createElement("div");
    const listName = document.createElement("span");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
        
    newLine.setAttribute("style", "display: flex; padding-bottom: 5px;");
    listName.setAttribute("style", "width :70%; overflow: hidden; font-size: x-large; padding-top: 6px");
    listName.innerHTML = task;
    deleteBtn.setAttribute("style", "background-color: red; float: right;");
    deleteBtn.setAttribute("id", 'delete');
    deleteBtn.textContent = "Delete";
    editBtn.setAttribute("style", "background-color:green; float: right;");
    editBtn.setAttribute("id", 'edit');
    editBtn.textContent="Edit";

    newLine.appendChild(listName);
    newLine.appendChild(editBtn);
    newLine.appendChild(deleteBtn);
            
    document.getElementById("list-item").appendChild(newLine); 
    
    lists[lists.length-1].listIndex = lists.length-1;

}




