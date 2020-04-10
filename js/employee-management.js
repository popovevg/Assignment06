/*eslint-env browser*/
let employee = [["Tom Ford", "Boss", 1111],
                    ["Lisa Simpson", "Scientist", 3456],
                    ["Aragorn", "Guardian", 6665],
                    ["Victor Gorsky", "ASM", 9009],
                    ["Ella Vagner", "Cleaner", 5001]];

function addNewElement() {
    let name = document.getElementById("name");
    let title = document.getElementById("title");
    let extension = document.getElementById("extension");
    if (name.value != null && isNaN(name.value) 
    && title.value != null && isNaN(title.value) 
    && extension.value != null && !isNaN(extension.value)) {
        employee.push([name.value, title.value, extension.value]);
        cleanData();
        displayData();
        interructWithElements();
        name.value = '';
        title.value = '';
        extension.value = '';
        alert("New employee " + name.value + " was added.");
    }
    else {
        alert("You entered wrong data.")
    }

}

function displayData() {

    let table = document.getElementById("Table");

//Amount of employee:
    let bodyElement = document.querySelector("body");
    let pForEmployeeCount = document.createElement("p");
    let att2 = document.createAttribute("id");
    att2.value = "AmountText";
    let employeeCountText;
    if (employee.length > 0) {
        employeeCountText = document.createTextNode("Showing " + employee.length + " employees");
    }
    else {
        employeeCountText = document.createTextNode("Your employees list is empty");
    }
    // let employeeCountText = document.createTextNode("Showing " + employee.length + " employees");
    pForEmployeeCount.setAttributeNode(att2);
    pForEmployeeCount.appendChild(employeeCountText);
    bodyElement.insertBefore(pForEmployeeCount, table);

for (let i = 0; i < employee.length; i++) {
    let trTag = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
        let thTag = document.createElement("th");
        let text = document.createTextNode(employee[i][j]);
        thTag.appendChild(text);
        trTag.appendChild(thTag);
    }

//Create delete button:
    let thTagButton = document.createElement("th");
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Delete");
    let att = document.createAttribute("class");
    att.value = "delete";
    let att1 = document.createAttribute("value");
    att1.value = i;
    thTagButton.appendChild(button);
    button.appendChild(buttonText);
    button.setAttributeNode(att);
    button.setAttributeNode(att1);
    trTag.appendChild(thTagButton);
    table.appendChild(trTag);

}
}

function cleanData() {
    let amountText = document.getElementById("AmountText");
    amountText.remove();
    let hide = document.querySelectorAll("tr");
    for (element of hide) {
    element.remove();
    }
}

function interructWithElements() {
    let deleteButtons = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", () => {
            employee.splice(deleteButtons[i].value, 1);
            cleanData();
            displayData();
            interructWithElements();
        }
        )
    }
}

window.addEventListener('load', () => {
displayData();
interructWithElements();
let addButton = document.getElementById("Add");
addButton.addEventListener("click", addNewElement);
});


