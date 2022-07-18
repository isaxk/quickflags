
let Keyboard = "";
const queryString = window.location.search;
const u = new URLSearchParams(queryString);
const time = u.get("t");
const inverted = u.get("i");
const mode = u.get("m");
const easy = u.get("e");
let count;
if (inverted == "on") {
    document.getElementById("flagimg").style.filter = "invert()";
}
if (mode == "q") {
    document.getElementById("score").innerHTML = "<h2>0/15 </h2>";
    count = 0;
}
let infill;
let topstreak;
if (mode == "s") {
    infill = "";
    if (easy == "on") {
        if (localStorage.easytop) {
            topstreak = localStorage.easytop;
        } else {
            localStorage.easytop = 0;
            topstreak = 0;
        }
        infill = "Easy Mode ";
    } else {
        if (localStorage.top) {
            topstreak = localStorage.top;
        } else {
            localStorage.top = 0;
            topstreak = 0;
        }
    }
    document.getElementById("score").innerHTML =
        "<h2>Current Streak: 0 - Top " +
        infill +
        "Streak: " +
        topstreak +
        "</h2>";
    count = 16;
}

let topresult = "";
justcountries = [];
for (i = 0; i < countries.length; i++) {
    justcountries.push(countries[i].Name);
}
if (easy == "on") {
    countries = countries.filter((el) => el.Easy === true);
}

let currentcountry = "";
function randomflagimg() {
    var randomindex = Math.floor(Math.random() * countries.length);
    currentcountry = countries[randomindex].Name;
    return "/assets/" + countries[randomindex].Code.toLowerCase() + ".svg";
}
let timesup = "";
function setimage(time) {
    document.getElementById("flagimg").src = randomflagimg();
    document.getElementById("messagebar").className = "";

    timesup = window.setTimeout(() => {
        document.getElementById("flagimg").src = "/assets/timesup.png";
    }, time * 1000);
}
let score = 0;
function answer(box) {
    keyboard.clearInput();
    let Keyboard = window.SimpleKeyboard.default;
    justanswered = true;
    window.clearTimeout(timesup);
    countries = countries.filter((item) => item.Name !== currentcountry);
    count++;
    if (box.value.toLowerCase() == currentcountry.toLowerCase()) {
        document.getElementById("messagebar").className = "correct";
        document.getElementById("messagebar").innerText =
            currentcountry + " was correct!";
        score++;
        if (mode == "q") {
            document.getElementById("score").innerHTML =
                "<h2>" + score + "/15</h2>";
        }
        if (mode == "s") {
            if (easy == "on") {
                localstreak = localStorage.easytop;
            } else {
                localstreak = localStorage.top;
            }
            document.getElementById("score").innerHTML =
                "<h2>Current Streak:" +
                score +
                " - Top " +
                infill +
                "Streak: " +
                localstreak +
                "</h2></h2>";
            if (score > localstreak) {
                topstreak = score;
                document.getElementById("score").innerHTML =
                    "<h2>Current Streak:" +
                    score +
                    " - <span style='background-color:#cbffcb; padding: 5px; border-radius: 5px;'>Top " +
                    infill +
                    "Streak: " +
                    localstreak +
                    "</span></h2></h2>";
            }
        }
    } else {
        document.getElementById("messagebar").className = "incorrect";
        document.getElementById("messagebar").innerText =
            "Incorrect! The Answer was " + currentcountry;
        if (mode == "s") {
            document.getElementById("flagimg").style.display = "none";
            document.getElementById("myForm").style.display = "none";
            document.getElementById("myForm").style.display = "none";
            document.getElementById("messagebar").className = "incorrect";
            document.getElementById("messagebar").innerHTML =
                "Streak ended!<br><br>The Answer was " +
                currentcountry +
                `<button class="btn" onclick="share()">Share with your friends!</button>` +
                `<br><br><a href="/" class="btn">Back</a><br><br>`;
            if (easy == "on") {
                localstreak = localStorage.easytop;
            } else {
                localstreak = localStorage.top;
            }
            if (topstreak > localstreak) {
                if (easy == "on") {
                    localStorage.easytop = topstreak;
                } else {
                    localStorage.top = topstreak;
                }
                document.getElementById("messagebar").className = "correct";
                document.getElementById("messagebar").innerHTML =
                    "Streak ended!<br><br>The Answer was " +
                    currentcountry +
                    "<br><br><h3>You beat you top streak of " +
                    localstreak +
                    "!<br><br> <a href='/' class='btn'>Back</a><br><br>";
            }
            while (id--) {
                window.clearTimeout(id); // will do nothing if no timeout with id is present
            }
            window.stop()
            return;
        }
    }
    if (count == 15) {
        document.getElementById("flagimg").style.display = "none";
        document.getElementById("myForm").style.display = "none";
        document.getElementById("messagebar").className = "correct";
        document.getElementById("messagebar").innerHTML =
            "Game complete!<br><br><a href='/' class='btn'>Back</a><br><br>";
        return;
    }
    document.getElementById("myInput").value = "";
    autocomplete(document.getElementById("myInput"), justcountries);
    resetimage();
    document.getElementById("myInput").value = "";
    Keyboard = window.SimpleKeyboard.default;
    return false;
}
function resetimage() {
    document.getElementById("flagimg").src = "/assets/getready.png";
    window.setTimeout(() => {
        setimage(time);
    }, 2000);
}
console.log("hi");
var form = document.getElementById("myForm");
window.setTimeout(() => {
    setimage(time);
}, 5000);
function autocomplete() {

}
autocomplete(document.querySelector("#myInput"), justcountries);
async function share() {
    const shareData = {
        title: "Can you beat my streak on FlagZ?",
        text: "I just got a streak of: " + score + " on FlagZ! " + infill,
        url: "https://flagz.isaacdoescodes.com",
    };

    try {
        await navigator.share(shareData);
        resultPara.textContent = "MDN shared successfully";
    } catch (err) {
        resultPara.textContent = "Error: " + err;
    }
    ;
};