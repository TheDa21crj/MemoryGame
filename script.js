function cardClicked(e) {
    let target = e.target;
    target.className = target.className.replace("colorHidden", "").trim();
}