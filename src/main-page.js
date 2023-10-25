import Picture from "./bar-image.jpeg";

export default function createPage() {

    const header = document.createElement("h1");
    header.innerHTML = "Welcome to The Lizard Lounge";
    document.getElementById("content").appendChild(header);

    const picture = new Image();
    picture.src = Picture;
    document.getElementById("content").appendChild(picture);

    const mainText = document.createElement("div");
    mainText.innerHTML = "The Lizard Lounge is Oshkosh's premier craft beer and microbrew bar. We have a variety of beers from Wisconsin, the United States, and the world. Come check us out; you won't be disappointed."
    document.getElementById("content").appendChild(mainText);
}