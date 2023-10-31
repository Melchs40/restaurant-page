import './style.css';
import { createButtons, createFooter } from '.';
import Lizard from "./lizard.png";

export default function contactPage() {

    createButtons();
    
    document.title = "Lizard Lounge - Contact Us";

    const header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = "Let's get in touch";
    document.getElementById("content").appendChild(header);

    const lizard = new Image();
    lizard.setAttribute("id", "lizard");
    lizard.src = Lizard;
    document.querySelector(".header").append(lizard);
   

    const mainText = document.createElement("div");
    mainText.classList.add("contact-text-container");
    document.getElementById("content").appendChild(mainText);

    const phoneNumber = document.createElement("div")
    phoneNumber.setAttribute("id", "phone-number");
    phoneNumber.innerHTML = "Call us at (920) 555-1234";
    document.querySelector(".contact-text-container").appendChild(phoneNumber);

    const streetAddress = document.createElement("div");
    streetAddress.setAttribute("id", "street-address");
    streetAddress.innerHTML = "Visit us at 01 Main Street Oshkosh, WI 54901"
    document.querySelector(".contact-text-container").appendChild(streetAddress);

    const formTitle = document.createElement("div");
    formTitle.setAttribute("id", "form-title");
    formTitle.innerHTML = "Contact Us Form";
    document.querySelector(".contact-text-container").appendChild(formTitle);

    const myForm = document.createElement("form");
    myForm.setAttribute("method", "post");
    myForm.setAttribute("action", "#");
    myForm.setAttribute("id", "my-form");
    document.querySelector(".contact-text-container").appendChild(myForm);

    const formName = document.createElement("label");
    formName.setAttribute("for", "form-name");
    formName.setAttribute("id", "form-name-text");
    formName.innerHTML = "Full Name:";
    myForm.appendChild(formName);

    const custName = document.createElement("input");
    custName.setAttribute("type", "text");
    custName.setAttribute("name", "FullName");
    custName.setAttribute("id", "form-name");
    custName.setAttribute("placeholder", "Enter full name");
    myForm.appendChild(custName);

    const formEmail = document.createElement("label");
    formEmail.setAttribute("for", "form-email");
    formEmail.setAttribute("id", "form-email-text");
    formEmail.innerHTML = "Email:";
    myForm.appendChild(formEmail);

    const custEmail = document.createElement("input");
    custEmail.setAttribute("type", "email");
    custEmail.setAttribute("name", "Email");
    custEmail.setAttribute("id", "form-email");
    custEmail.setAttribute("placeholder", "Enter email address");
    myForm.appendChild(custEmail);

    const formNumber = document.createElement("label");
    formNumber.setAttribute("for", "form-number");
    formNumber.setAttribute("id", "form-number-text");
    formNumber.innerHTML = "Phone Number:";
    myForm.appendChild(formNumber);

    const custNumber = document.createElement("input");
    custNumber.setAttribute("type", "number");
    custNumber.setAttribute("name", "PhoneNumber");
    custNumber.setAttribute("id", "form-number");
    custNumber.setAttribute("placeholder", "Enter phone number");
    myForm.appendChild(custNumber);

    const formComment = document.createElement("label");
    formComment.setAttribute("for", "form-comment");
    formComment.setAttribute("id", "form-comment-text");
    formComment.innerHTML = "Comments/Concerns:";
    myForm.appendChild(formComment);

    const custComment = document.createElement("textarea");
    custComment.setAttribute("type", "text");
    custComment.setAttribute("name", "Comment");
    custComment.setAttribute("id", "form-comment");
    custComment.setAttribute("rows", "10");
    custComment.setAttribute("columns", "10");
    custComment.setAttribute("placeholder", "Let's see what you've got to say...");
    myForm.appendChild(custComment);

    const submit = document.createElement("input");
    submit.setAttribute("type", "button");
    submit.setAttribute("id", "submit-button");
    submit.setAttribute("value", "Submit");
    myForm.appendChild(submit);

    createFooter();
}