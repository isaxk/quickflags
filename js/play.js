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
        "<h2>";
    count = 16;
}

let topresult = "";
justcountries = [];
for (i = 0; i < countries.length; i++) {
    justcountries.push(countries[i].Name);
}
// if (easy == "on") {
//     countries = countries.filter((el) => el.Easy === true);
// }

let currentcountry = "";
function randomflagimg() {
    var tochoosecountries = countries.filter((el) => el.Easy < (score+1));
    console.log(tochoosecountries)
    var randomindex = Math.floor(Math.random() * tochoosecountries.length);
    currentcountry = tochoosecountries[randomindex].Name;
    return "/flagz/assets/" + tochoosecountries[randomindex].Code.toLowerCase() + ".svg";
}
let timesup = "";
function setimage(time) {
    document.getElementById("flagimg").src = randomflagimg();
    document.getElementById("messagebar").className = "";

    timesup = window.setTimeout(() => {
        document.getElementById("flagimg").src = "/flagz/assets/timesup.png";
    }, time * 1000);
}
let score = 0;
function answer(box) {
    keyboard.clearInput();
    let Keyboard = window.SimpleKeyboard.default;

    justanswered = true;
    window.clearTimeout(timesup);
    
    if (box.value.toLowerCase() == "usa") box.value = "United States of America";
    if (box.value.toLowerCase() == "uk") box.value = "United Kingdom";
    if (box.value.toLowerCase() == "uae") box.value = "United Arab Emirates";

    var found = false;
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].Name.toLowerCase().replace(/\s+/g, '') == box.value.toLowerCase().replace(/\s+/g, '')) {
            found = true;
            break;
        }
    }
    if (found) {
        count++;
        if (
            box.value.toLowerCase().replace(/\s+/g, '') 
            == currentcountry.toLowerCase().replace(/\s+/g, '') 
        ) {
            document.getElementById("messagebar").className = "correct";
            document.getElementById("mbcontent").innerText =
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
            document.getElementById("messagebar").classList = "incorrect end";
            document.getElementById("mbcontent").innerText =
                "Incorrect! The Answer was " + currentcountry;
            if (mode == "s") {
                document.getElementById("flagimg").style.display = "none";
                document.getElementById("myForm").style.display = "none";
                document.getElementById("myForm").style.display = "none";
                document.getElementById("messagebar").classList = "incorrect end";
                document.getElementById("mbcontent").innerHTML =
                    "Streak ended!<br><br>The Answer was " +
                    currentcountry +
                    `<br><br><button class="btn" onclick="share()">Share with friends!</button>` +
                    `<br><br><a href="/flagz/" class="btn">Play Again</a><br><br>`;
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
                    document.getElementById("messagebar").classList = "correct end";
                    document.getElementById("mbcontent").innerHTML =
                        "Streak ended!<br><br>The Answer was " +
                        currentcountry +
                        "<br><br><h3>You beat you top streak of " +
                        localstreak +
                        '!<br><br> <button class="btn" onclick="share()">Share with friends!</button><br><br><a href="/flagz/" class="btn">Play Again</a><br><br>';
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
            document.getElementById("messagebar").classList = "correct end";
            document.getElementById("mbcontent").innerHTML =
                "Game complete!<br><br><a href='/' class='btn'>Back</a><br><br>";
            return;
        }
        document.getElementById("myInput").value = "";
        autocomplete(document.getElementById("myInput"), justcountries);
        resetimage();
        document.getElementById("myInput").value = "";
        Keyboard = window.SimpleKeyboard.default;
    }
    return false;
}
function resetimage() {
    document.getElementById("flagimg").src = "/flagz/assets/getready.png";
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
function scrollTick() {
    document.body.scrollTop
}
window.setInterval(100, scrollTick)

function toArray(collection) {
    return Array.prototype.slice.call(collection);
}

function noScroll(event) {
    if (event.type === 'focus') {
        document.body.classList.add('no-scroll');
    }

    else if (event.type === 'blur') {
        document.body.classList.remove('no-scroll');
    }
}

var inputs = toArray(document.querySelectorAll('input'));


inputs.forEach(function (input) {
    input.addEventListener('focus', noScroll, false);
    input.addEventListener('blur', noScroll, false);
});