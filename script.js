const noMessages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let noIndex = 0;
let yesClicks = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = noMessages[noIndex];
    noIndex = (noIndex + 1) % noMessages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    const message = document.getElementById("message");
    const steamMessage = document.getElementById("steam-message");

    if (yesClicks === 0) {
        yesButton.textContent = "Are you sure?";
        yesClicks++;
    } else {
        yesButton.style.display = "none";
        noButton.style.display = "none";
        document.getElementById("question").style.display = "none";
        message.style.display = "block";
        steamMessage.style.display = "block"; // Both messages show at the same time
    }
}