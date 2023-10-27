import './style.css';
import { createButtons, createFooter } from '.';
import Lizard from "./lizard.png";

export default function mainPage() {

    createButtons();

    const header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "Lizard Lounge";
    document.getElementById("content").appendChild(header);

   

    const mainText = document.createElement("div");
    mainText.classList.add("main-text-container");

    const secondText = document.createElement("div");
    secondText.setAttribute("id", "secondary-title-text");

    const paraText = document.createElement("div");
    paraText.setAttribute("id", "main-page-text");

    const lizard = new Image();
    lizard.setAttribute("id", "lizard");
    lizard.src = Lizard;

    secondText.innerHTML = "Oshkosh's premier craft beer and microbrew bar"
    paraText.innerHTML = "Located in the heart of historic downtown Oshkosh, the Lizard Lounge is one of the oldest and most prestigeous bars in the country. We have over 150 different beers from the great state of Wisconsin, the United States, and the world including 30 on monthly rotating taps. Come check us out; you won't be disappointed! Live music on the main stage every Friday and Saturday night. Open 3:00pm daily."

    document.getElementById("content").appendChild(mainText);
    document.querySelector(".main-text-container").appendChild(secondText)
    document.querySelector(".main-text-container").appendChild(paraText);
    document.querySelector(".header").append(lizard);

    createFooter();
}