import './style.css';
import { createButtons, createFooter } from '.';
import Lizard from "./lizard.png";

export default function eventsPage() {

    createButtons();

    document.title = "Lizard Lounge - Events";

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
    document.getElementById("content").appendChild(mainText);

    const eventText = document.createElement("div");
    eventText.setAttribute("id", "events-page-text");
    document.querySelector(".text-container").appendChild(eventText);

    const event1Date = document.createElement("div");
    event1Date.classList.add("events-date");
    event1Date.innerHTML = "Friday 10/27"
    document.querySelector("#events-page-text").appendChild(event1Date);

    const event2Date = document.createElement("div");
    event2Date.classList.add("events-date");
    event2Date.innerHTML = "Saturday 10/28"
    document.querySelector("#events-page-text").appendChild(event2Date);

    const event3Date = document.createElement("div");
    event3Date.classList.add("events-date");
    event3Date.innerHTML = "Tuesday 10/31"
    document.querySelector("#events-page-text").appendChild(event3Date);

    const event1 = document.createElement("div");
    event1.classList.add("events");
    event1.innerHTML = "Monster Mash featuring Goblins and Ghouls";
    document.querySelector("#events-page-text").appendChild(event1);

    const event2 = document.createElement("div");
    event2.classList.add("events");
    event2.innerHTML = "Costume Party";
    document.querySelector("#events-page-text").appendChild(event2);

    const event3 = document.createElement("div");
    event3.classList.add("events");
    event3.innerHTML = "Halloween Spooktacular";
    document.querySelector("#events-page-text").appendChild(event3);

    const event4Date = document.createElement("div");
    event4Date.classList.add("events-date");
    event4Date.innerHTML = "Friday 11/03"
    document.querySelector("#events-page-text").appendChild(event4Date);

    const event5Date = document.createElement("div");
    event5Date.classList.add("events-date");
    event5Date.innerHTML = "Friday 11/04"
    document.querySelector("#events-page-text").appendChild(event5Date);

    const event6Date = document.createElement("div");
    event6Date.classList.add("events-date");
    event6Date.innerHTML = "Wednesday 11/08"
    document.querySelector("#events-page-text").appendChild(event6Date);

    const event4 = document.createElement("div");
    event4.classList.add("events");
    event4.innerHTML = "Garage Rock with That Guy";
    document.querySelector("#events-page-text").appendChild(event4);

    const event5 = document.createElement("div");
    event5.classList.add("events");
    event5.innerHTML = "Let's Disco and Sherman and the Pugs";
    document.querySelector("#events-page-text").appendChild(event5);

    const event6 = document.createElement("div");
    event6.classList.add("events");
    event6.innerHTML = "America's Pub Quiz";
    document.querySelector("#events-page-text").appendChild(event6);

    const event7Date = document.createElement("div");
    event7Date.classList.add("events-date");
    event7Date.innerHTML = "Friday 11/10"
    document.querySelector("#events-page-text").appendChild(event7Date);

    const event8Date = document.createElement("div");
    event8Date.classList.add("events-date");
    event8Date.innerHTML = "Saturday 11/11"
    document.querySelector("#events-page-text").appendChild(event8Date);

    const event9Date = document.createElement("div");
    event9Date.classList.add("events-date");
    event9Date.innerHTML = "Monday 11/13"
    document.querySelector("#events-page-text").appendChild(event9Date);

    const event7 = document.createElement("div");
    event7.classList.add("events");
    event7.innerHTML = "The Coleopteras";
    document.querySelector("#events-page-text").appendChild(event7);

    const event8 = document.createElement("div");
    event8.classList.add("events");
    event8.innerHTML = "Battle of the Bands";
    document.querySelector("#events-page-text").appendChild(event8);

    const event9 = document.createElement("div");
    event9.classList.add("events");
    event9.innerHTML = "Monthly Book Club Meeting";
    document.querySelector("#events-page-text").appendChild(event9);

    createFooter();
}