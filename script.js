let s = null;
let sb = 0,
    fa = 0,
    hB = 0;

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

function hamburger(event) {
    hB++;
    if (hB % 2 == 0) {
        document.getElementById("svgDiv").style.opacity = "0";
        document.getElementById("svgDiv").style.visibility = "hidden";
        document.getElementById("burger1").id = "bur1";
        document.getElementById("burger2").id = "bur2";
        document.getElementById("burger3").id = "bur3";
    } else {
        document.getElementById("svgDiv").style.opacity = "1";
        document.getElementById("svgDiv").style.visibility = "visible";
        document.getElementById("bur1").id = "burger1";
        document.getElementById("bur2").id = "burger2";
        document.getElementById("bur3").id = "burger3";
    }
}