// Write your code here!
const mainElement = document.getElementById('main');
mainElement.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent="Young Jun Do is the champion";
document.body.append(newHeader);