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
                document.getElementById("ScoreBoard").innerHTML = "-" + fa;
                document.getElementById("failedAttempet").style.color = "#f45725";
            }, 500);
        } else {
            sb = sb + 1;
            document.getElementById("ScoreBoard2").innerHTML = sb;
            document.getElementById("scoreDiv").style.color = "gold";
            s = null;
            if (sb == 5) {
                setTimeout(() => {
                    document.getElementById("alert").style.opacity = "1";
                    document.getElementById("alert").style.visibility = "visible";
                    document.getElementById("alert").innerHTML =
                        "You Have Won in " + fa + " failed attempts";
                    setTimeout(() => {
                        document.getElementById("alert").style.opacity = "0";
                        document.getElementById("alert").style.visibility = "hidden";
                    }, 500);
                });
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
        document.getElementById("svgDiv").style.transform = "translateX(-500px)";
        document.getElementById("burger1").id = "bur1";
        document.getElementById("emailVal").style.opacity = "0";
        document.getElementById("emailVal").style.visibility = "hidden";
        document.getElementById("burger2").id = "bur2";
        document.getElementById("burger3").id = "bur3";
        document.getElementById("raisedH").id = "raisedHand";
        document.getElementById("onH").id = "onHand";
    } else {
        document.getElementById("svgDiv").style.opacity = "1";
        document.getElementById("svgDiv").style.visibility = "visible";
        document.getElementById("svgDiv").style.transform = "translateX(0px)";
        document.getElementById("bur1").id = "burger1";
        document.getElementById("bur2").id = "burger2";
        document.getElementById("bur3").id = "burger3";
        document.getElementById("raisedHand").id = "raisedH";
        document.getElementById("onHand").id = "onH";
    }
}

function emailF(event) {
    setTimeout(() => {
        document.getElementById("emailVal").style.opacity = "1";
        document.getElementById("emailVal").style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("emailVal").style.opacity = "0";
            document.getElementById("emailVal").style.visibility = "hidden";
        }, 3000);
    });
}

function copyClip(event) {
    var copyText = document.getElementById("emailInp");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    setTimeout(() => {
        document.getElementById("alert").style.opacity = "1";
        document.getElementById("alert").style.visibility = "visible";
        document.getElementById("alert").innerHTML = "Copied to clipboard";
        setTimeout(() => {
            document.getElementById("alert").style.opacity = "0";
            document.getElementById("alert").style.visibility = "hidden";
        }, 500);
    });
}