import './style.css';
import { createButtons, createFooter } from '.';
import Lizard from "./lizard.png";

export default function beerPage() {

    createButtons();

    document.title = "Lizard Lounge - BEER!";
    
    const header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "Beers of the Month";
    document.getElementById("content").appendChild(header);

    const lizard = new Image();
    lizard.setAttribute("id", "lizard");
    lizard.src = Lizard;
    document.querySelector(".header").append(lizard);

    const mainText = document.createElement("div");
    mainText.classList.add("text-container");
    document.getElementById("content").appendChild(mainText);

    const newText = document.createElement("div");
    newText.classList.add("beer-page-text");
    document.querySelector(".text-container").appendChild(newText);

    const beer1 = document.createElement("div");
    beer1.classList.add("beer-text");
    beer1.innerHTML = "1. New Glarus Spotted Cow (cream ale)"
    document.querySelector(".beer-page-text").appendChild(beer1);

    const beer2 = document.createElement("div");
    beer2.classList.add("beer-price");
    beer2.innerHTML = "----- $5 per 16oz"
    document.querySelector(".beer-page-text").appendChild(beer2);

    const beer3 = document.createElement("div");
    beer3.classList.add("beer-text");
    beer3.innerHTML = "2. Hop Yard Ale Works Giggle Water (hard seltzer)";
    document.querySelector(".beer-page-text").appendChild(beer3);

    const beer4 = document.createElement("div");
    beer4.classList.add("beer-price");
    beer4.innerHTML = "----- $6 per 12oz"
    document.querySelector(".beer-page-text").appendChild(beer4);

    const beer5 = document.createElement("div");
    beer5.classList.add("beer-text");
    beer5.innerHTML = "3. Bare Bones Bitch in Heat (fruit beer)";
    document.querySelector(".beer-page-text").appendChild(beer5);

    const beer6 = document.createElement("div");
    beer6.classList.add("beer-price");
    beer6.innerHTML = "----- $7 per 16oz"
    document.querySelector(".beer-page-text").appendChild(beer6);

    const beer7 = document.createElement("div");
    beer7.classList.add("beer-text");
    beer7.innerHTML = "4. Fifth Ward Mango Margarita Frootenanny (fruited sour)";
    document.querySelector(".beer-page-text").appendChild(beer7);

    const beer8 = document.createElement("div");
    beer8.classList.add("beer-price");
    beer8.innerHTML = "----- $7 per 10oz";
    document.querySelector(".beer-page-text").appendChild(beer8);

    const beer9 = document.createElement("div");
    beer9.classList.add("beer-text");
    beer9.innerHTML = "5. Copper State Oktoberfest (märzen)"
    document.querySelector(".beer-page-text").appendChild(beer9);

    const beer10 = document.createElement("div");
    beer10.classList.add("beer-price");
    beer10.innerText = "----- $6 per 16oz";
    document.querySelector(".beer-page-text").appendChild(beer10);

    const beer11 = document.createElement("div");
    beer11.classList.add("beer-text");
    beer11.innerHTML = "6. McFleshman's Kōkua Session IPA (india pale ale)"
    document.querySelector(".beer-page-text").appendChild(beer11);

    const beer12 = document.createElement("div");
    beer12.classList.add("beer-price");
    beer12.innerHTML = "----- $7 per 16oz"
    document.querySelector(".beer-page-text").appendChild(beer12);

    createFooter();
}