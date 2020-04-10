/*eslint-env browser*/
let employee = [["Tom Ford", "Boss", 1111],
                    ["Lisa Simpson", "Scientist", 3456],
                    ["Aragorn", "Guardian", 6665],
                    ["Victor Gorsky", "ASM", 9009],
                    ["Ella Vagner", "Cleaner", 5001]];


function displayData() {

    let table = document.getElementById("Table");

//Amount of employee:
    let pForEmployeeCount = document.createElement("p");
    let employeeCountText = document.createTextNode("Showing " + employee.length + " employee");
    pForEmployeeCount.appendChild(employeeCountText);
    let mainElement = document.getElementsByTagName("strong");
    

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

    table.appendChild(pForEmployeeCount);
}
}

function cleanData() {

}

window.addEventListener('load', () => {
displayData();
let deleteButtons = document.getElementsByClassName("delete");
for (element of deleteButtons) {
    element.addEventListener("click", () => {
        delete employee[element.value];
        displayData();
        // alert("HI");
    })
}
});


