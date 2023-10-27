import './style.css';
import { createButtons, createFooter } from '.';

export default function mainPage() {

    createButtons();

    const header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "The Lizard Lounge";
    document.getElementById("content").appendChild(header);

   

    const mainText = document.createElement("div");
    mainText.classList.add("text-container");

    const newText = document.createElement("div");
    newText.setAttribute("id", "main-page-text");

    newText.innerHTML = "The Lizard Lounge is Oshkosh's premier craft beer and microbrew bar. We have a variety of beers from Wisconsin, the United States, and the world. Come check us out; you won't be disappointed."

    document.getElementById("content").appendChild(mainText);
    document.querySelector(".text-container").appendChild(newText);

    createFooter();
}