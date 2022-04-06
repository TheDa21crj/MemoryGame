let clickedCard = null;
let NoClick = false;
let score = 0;

const colors = [
    "orange",
    "green",
    "darkcyan",
    "pink",
    "yellow",
    "blue",
    "orchid",
    "maroon",
];

const cards = [...document.querySelectorAll(".card")];
for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += `${color}`;
    cardA.setAttribute("data-color", color);

    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);

    cardB.className += `${color}`;
    cardB.setAttribute("data-color", color);
}

function cardClicked(e) {
    let target = e.target;

    if (NoClick || target === clickedCard || target.className.includes("done")) {
        return;
    }

    target.className = target.className.replace("colorHidden", "").trim();
    target.className += " done";

    if (!clickedCard) {
        clickedCard = target;
    } else if (clickedCard) {
        if (
            clickedCard.getAttribute("data-color") !==
            target.getAttribute("data-color")
        ) {
            NoClick = true;
            console.log("not same");
            setTimeout(() => {
                clickedCard.className =
                    clickedCard.className.replace("done", "").trim() + " colorHidden";
                target.className =
                    target.className.replace("done", "").trim() + " colorHidden";
                clickedCard = null;
                NoClick = false;
            }, 500);
        } else {
            score++;
            clickedCard = null;
            if (score === 8) {
                console.log("Score = 8");
            }
        }
    }
}