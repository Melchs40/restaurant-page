export default function createPage() {
    const header = document.createElement("h1");
    header.innerHTML = "Welcome to The Lizard Lounge";
    document.getElementById("content").appendChild(header);
    console.log("test success");
}