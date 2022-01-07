let s = null;
let sb = 0;
let fa = 0;

function mom(event) {
    if (event.target === s || event.target.className.includes("done")) {
        return;
    }

    event.target.className = event.target.className.replace("c-hideq", "").trim();
    event.target.className += " done";

    if (!s) {
        s = event.target;
    } else if (s) {
        if (
            s.getAttribute("data-color") !== event.target.getAttribute("data-color")
        ) {
            console.log("cards are NOT equal");
            setTimeout(() => {
                s.className = s.className.replace("done", "").trim() + " c-hideq";
                event.target.className =
                    event.target.className.replace("done", "").trim() + " c-hideq";
                s = null;
                fa = fa + 1;
                document.getElementsByTagName("body").cursor = "pointer";
                document.getElementById("ScoreBoard").innerHTML = fa;
            }, 500);
        } else {
            sb = sb + 1;
            s = null;
            if (sb == 5) {
                alert("You Have Won in " + fa + " failed attempts");
                document.getElementById("ScoreBoard").innerHTML = fa;
                document.getElementById("ScoreBoard2").innerHTML = sb;
            }
        }
    }
}