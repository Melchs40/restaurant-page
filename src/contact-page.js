import './style.css';
import { createButtons } from '.';

export default function mainPage() {

    createButtons();

    const header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "The Lizard Lounge";
    document.getElementById("content").appendChild(header);

   

    const mainText = document.createElement("div");
    mainText.setAttribute("id", "main-text");
    document.getElementById("content").appendChild(mainText);

    const beer1 = document.createElement("div");
    beer1.classList.add("beer-text");
    beer1.innerHTML = "Test 1"
    document.getElementById("main-text").appendChild(beer1);
}