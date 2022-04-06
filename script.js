let clickedCard = null;

function cardClicked(e) {
    let target = e.target;
    target.className = target.className.replace("colorHidden", "").trim();

    if (!clickedCard) {
        clickedCard = target;
    } else if (clickedCard) {}
}