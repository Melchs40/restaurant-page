import mainPage from "./main-page";
import beerPage from "./beer-page";
import contactPage from "./contact-page"
import './style.css';

export function createButtons() {

const mainButton = document.createElement("button"); 
mainButton.innerHTML = "Check out our main page!";
mainButton.onclick = () => {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    mainPage();
}
    
const beerButton = document.createElement("button"); 
beerButton.innerHTML = "Check out our beers!";
beerButton.onclick = () => {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    beerPage();
}

const contactButton = document.createElement("button");
contactButton.innerHTML = "Feel free to contact us!";
contactButton.onclick = () => {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    contactPage();
}

    

let buttonDiv = document.createElement("div");
document.getElementById("content").appendChild(buttonDiv);
buttonDiv.appendChild(mainButton)
buttonDiv.appendChild(beerButton);
buttonDiv.appendChild(contactButton);

}

mainPage();
