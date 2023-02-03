

// Variables

let Keyboard = "";
let time = 100
let inverted = false
let mode = 's'
let easy = 'on'
let topstreak;
let timesup = "";
let currentcountry = "";
let tochoosecountries = countries;
let score = 0;


async function share() {
    const shareData = {
        title: "Can you beat my streak on FlagZ?",
        text: "I just got a streak of: " + score + " on FlagZ! ",
        url: "https://www.isaacboor.me/flagz/",
    };

    try {
        await navigator.share(shareData);
        resultPara.textContent = "MDN shared successfully";
    } catch (err) {
        resultPara.textContent = "Error: " + err;
    }
    ;
};


function initialiseLocalStorage() {
    if (localStorage.top) {
        localstreak = localStorage.top;
        topstreak = localStorage.top;
    } else {
        localstreak = localStorage.top;
        localStorage.top = 0;
        topstreak = 0;
    }
}




function setScoreBoard() {
    document.getElementById("score").innerHTML =
        "<h2>Current Streak:" +
        score +
        " - Top " +
        "Streak: " +
        localstreak +
        "</h2></h2>";
    if (score > localstreak) {
        topstreak = score;
        document.getElementById("score").innerHTML =
            "<h2>Current Streak:" +
            score +
            " - <span style='background-color:#cbffcb; padding: 5px; border-radius: 5px;'>Top " +
            "Streak: " +
            localstreak +
            "</span></h2></h2>";
    }
}

String.prototype.noSpace = function () {
    return this.replace(/\s+/g, '')
}



function initialScoreBoard() {
    setScoreBoard(
        "<h2>Current Streak: 0 - Top " +
        "Streak: " +
        topstreak +
        "<h2>"
    );
}




function cacheImages() {
    for (i = 0; i < countries.length; i++) {
        var path = "/flagz/assets/" + countries[i].Code.toLowerCase() + ".svg";
        var img = new Image();
        img.src = path;
    }
}




function randomFlagImg() {
    var tochoosecountries = countries.filter((el) => el.Easy < (score + 1));
    console.log(tochoosecountries)
    var randomindex = Math.floor(Math.random() * tochoosecountries.length);
    tochoosecountries[randomindex].Easy = 1000;
    currentcountry = tochoosecountries[randomindex].Name;
    return "/flagz/assets/" + tochoosecountries[randomindex].Code.toLowerCase() + ".svg";
}



function setImage(time) {
    document.getElementById("flagimg").src = randomFlagImg();
    document.getElementById("messagebar").className = "";

    timesup = window.setTimeout(() => {
        document.getElementById("flagimg").src = "/flagz/assets/timesup.png";
    }, time * 1000);
}


function resetImage() {
    document.getElementById("flagimg").src = "/flagz/assets/getready.png";
    window.setTimeout(() => {
        setImage(time);
    }, 2000);
}


function applySubs(input) {
    if (input.toLowerCase() == "usa") return "United States of America";
    if (input.toLowerCase() == "uk") return "United Kingdom";
    if (input.toLowerCase() == "uae") return "United Arab Emirates";
    return input;
}



function setMessageBar(content, style) {
    document.getElementById("mbcontent").innerHTML = content;
    document.getElementById("messagebar").classList = style;
}



function hideAll() {
    document.getElementById("flagimg").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    document.getElementsByClassName("simple-keyboard")[0].style.display = "none";
}


function clearInput() {
    document.getElementById("myInput").value = "";
    keyboard.clearInput();
}

function correctAnswer() {
    clearInput();
    setMessageBar(currentcountry + " was correct!", "correct")
    score++;
    localstreak = localStorage.top;
    setScoreBoard();
    resetImage();

}

function incorrectBeatStreak() {
    hideAll();

    localStorage.top = topstreak;
    setMessageBar(
        "Streak ended!<br><br>The Answer was " +
        currentcountry +
        "<br><br><h3>You beat you top streak of " +
        localstreak +
        '!<br><br> <button class="btn" onclick="share()">Share with friends!</button><br><br><a href="/flagz/" class="btn">Play Again</a><br><br>'
        , "correct end")
}

function incorrectAnswer() {
    hideAll();

    setMessageBar(
        "Streak ended!<br><br>The Answer was " +
        currentcountry +
        `<br><br><button class="btn" onclick="share()">Share with friends!</button>` +
        `<br><br><a href="/flagz/" class="btn">Play Again</a><br><br>`
        , 'incorrect end');

    localstreak = localStorage.top;
}



function answerQuestion(box) {


    justanswered = true;
    window.clearTimeout(timesup);
    var submittedAnswer = box.value.toLowerCase();
    submittedAnswer = applySubs(submittedAnswer).toLowerCase();
    var isValidAnswer = false;

    // check if valid
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].Name.toLowerCase().noSpace() == submittedAnswer.noSpace()) {
            isValidAnswer = true;
            break;
        }
    }
    if(!isValidAnswer) {
        return false;
    }
    console.log(submittedAnswer.noSpace())

    // check if correct
    if (
        submittedAnswer.noSpace()
        == currentcountry.toLowerCase().noSpace()
    ) isCorrectAnswer = true;
    else {
        isCorrectAnswer = false
    }

    if (isCorrectAnswer == true) {
        correctAnswer();
    } else {
        if (topstreak > localstreak) {
            incorrectBeatStreak();
        }
        else {
            incorrectAnswer();
        }
    }
    keyboard.clearInput();
    let Keyboard = window.SimpleKeyboard.default;
    return;
}

function startGame() {
    window.setTimeout(() => {
        setImage(time);
    }, 5000);
}

function initialiseGame() {
    cacheImages();
    initialiseLocalStorage();
    initialScoreBoard();
    startGame();
}

initialiseGame();