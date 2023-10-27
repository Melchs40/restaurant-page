import './style.css';
import { createButtons, createFooter } from '.';
import Lizard from "./lizard.png";

export default function eventsPage() {

    createButtons();

    const header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "What's going on?";
    document.getElementById("content").appendChild(header);

    const lizard = new Image();
    lizard.setAttribute("id", "lizard");
    lizard.src = Lizard;
    document.querySelector(".header").append(lizard);
   

    const mainText = document.createElement("div");
    mainText.classList.add("text-container");

    const newText = document.createElement("div");
    newText.setAttribute("id", "main-page-text");

    document.getElementById("content").appendChild(mainText);
    document.querySelector(".text-container").appendChild(newText);

    const beer1 = document.createElement("div");
    beer1.classList.add("beer-text");
    beer1.innerHTML = "Test 1"
    document.querySelector(".text-container").appendChild(beer1);

    createFooter();
}