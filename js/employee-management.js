/*eslint-env browser*/
window.addEventListener('load', () => {
    let employee = [["Tom Ford", "Boss", 1111],
                    ["Lisa Simpson", "Scientist", 3456],
                    ["Aragorn", "Guardian", 6665],
                    ["Victor Gorsky", "ASM", 9009],
                    ["Ella Vagner", "Cleaner", 3456]];

let table = document.getElementById("Table");

for (let i = 0; i < employee.length; i++) {
    let trTag = document.createElement("tr");    
    for (let j = 0; j < 3; j++) {
        let thTag = document.createElement("th");
        let text = document.createTextNode(employee[i][j]);
        thTag.appendChild(text);
        trTag.appendChild(thTag);
    }
    
//Create button:
    let thTagButton = document.createElement("th");
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Delete");
    let att = document.createAttribute("id");
    att.value = "delete";
    thTagButton.appendChild(button);
    button.appendChild(buttonText);
    button.setAttributeNode(att);
    trTag.appendChild(thTagButton);

    table.appendChild(trTag);
}






// for (let i = 0; i < employee.length; i++) {
//     for (j = 0; j < employee[i].length; i++) {
//         var mainTabTag = document.createElement("tr");
//         var chailTabTag = document.createElement("th");
//         chailTabTag.appendChild(document.createTextNode(employee[i][j]));
//         mainTabTag.appendChild(chailTabTag);
//         table.appendChild(mainTabTag);
//     }




// var paragraph = document.createElement("p");
// paragraph.appendChild(document.createTextNode("Hello from JS!"));
// table.appendChild(paragraph);
});
