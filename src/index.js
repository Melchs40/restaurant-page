import mainPage from "./main-page";
import beerPage from "./beer-page";
import contactPage from "./contact-page"
import './style.css';

export function createButtons() {

const mainButton = document.createElement("button"); 
mainButton.classList.add("button");
mainButton.innerHTML = "Home";
mainButton.onclick = () => {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    mainPage();
}
    
const beerButton = document.createElement("button"); 
beerButton.classList.add("button");
beerButton.innerHTML = "Beer List";
beerButton.onclick = () => {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    beerPage();
}

const contactButton = document.createElement("button");
contactButton.classList.add("button");
contactButton.innerHTML = "Contact Us";
contactButton.onclick = () => {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    contactPage();
}
    

let buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "button-group");
document.getElementById("content").appendChild(buttonDiv);
buttonDiv.appendChild(mainButton)
buttonDiv.appendChild(beerButton);
buttonDiv.appendChild(contactButton);

}

export function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = "Copyright © Melchs40's Computer Whiz Coding 2023";
    document.getElementById("content").appendChild(footer);
}


mainPage();
