const form = document.querySelector("form");
const input = document.querySelector("input");
const output = document.querySelector("ul");

function outputList(text) {
    var item = createItem(text);
    output.appendChild(item);
}

function createItem(text) {
    const item = document.createElement("li");
    const toDo = document.createElement("span");
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    toDo.innerText = text;
    completeBtn.innerText = "complete";
    completeBtn.addEventListener("click", completeItem);
    deleteBtn.innerText = "delete";
    deleteBtn.addEventListener("click", deleteItem);
    item.appendChild(toDo);
    item.appendChild(completeBtn);
    item.appendChild(deleteBtn);
    return item;
}

function deleteItem() {
    this.addEventListener("click", output.removeChild(this.parentNode));
}

function completeItem() {
    const target = this.parentNode.querySelector("span");
    if (target.style.textDecoration === "line-through") {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "line-through";
    }
}

function submitHandler(event) {
    event.preventDefault();
    const currentValue = input.value;
    if (currentValue != "") {
        outputList(currentValue);
    }
    input.value = "";
}

function init() {
    form.addEventListener("submit", submitHandler);
}

init();