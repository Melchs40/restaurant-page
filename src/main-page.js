import './style.css';
import { createButtons, createFooter } from '.';
import Lizard from "./lizard.png";

export default function mainPage() {

    createButtons();

    document.title = "Lizard Lounge - Home";

    // const newContent = document.createElement("div");
    // newContent.setAttribute("id","new-content");
    // document.getElementById("content").appendChild(newContent);

    const header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "Lizard Lounge";
    document.getElementById("content").appendChild(header);

    const mainText = document.createElement("div");
    mainText.classList.add("main-text-container");
    document.getElementById("content").appendChild(mainText);
    
    const secondText = document.createElement("div");
    secondText.setAttribute("id", "secondary-title-text");
    secondText.innerHTML = "Oshkosh's premier craft beer and microbrew bar";
    document.querySelector(".main-text-container").appendChild(secondText)

    const paraText = document.createElement("div");
    paraText.setAttribute("id", "main-page-text");
    paraText.innerHTML = "Located in the heart of historic downtown Oshkosh, the Lizard Lounge is one of the oldest and most prestigeous bars in the country. We have over 150 different beers from the great state of Wisconsin, the United States, and the world including 30 on monthly rotating taps. Come check us out; you won't be disappointed! Live music on the main stage every Friday and Saturday night. Open 3:00pm daily.";
    document.querySelector(".main-text-container").appendChild(paraText);

    const lizard = new Image();
    lizard.setAttribute("id", "lizard");
    lizard.src = Lizard;
    document.querySelector(".header").append(lizard); 
    

    createFooter();
}