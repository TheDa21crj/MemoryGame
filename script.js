let clickedCard = null;
let NoClick = false;
let score = 0;

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