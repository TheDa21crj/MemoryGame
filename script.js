let clickedCard = null;

function cardClicked(e) {
    let target = e.target;

    if (target === clickedCard || target.className.includes("done")) {
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
            console.log("not same");
            setTimeout(() => {
                clickedCard.className =
                    clickedCard.className.replace("done", "").trim() + " colorHidden";
                target.className =
                    target.className.replace("done", "").trim() + " colorHidden";
                clickedCard = null;
            }, 500);
        } else {
            clickedCard = null;
        }
    }
}