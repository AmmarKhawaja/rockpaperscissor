//The new branch
var points = 0
function game(player) {
    var rand = Math.floor(Math.random() * 3);
    var cpu = " ";
    if (rand == 0) {
        cpu = "r"
    }
    if (rand == 1) {
        cpu = "p"
    }
    if (rand == 2) {
        cpu = "s"
    }
    console.log(player);
    console.log(cpu);
    if (player == "r") {
        if (cpu == "r") {
            changeOutput("TIE");
        }
        if (cpu == "p") {
            changeOutput("CPU WIN");
        }
        if (cpu == "s") {
            changeOutput("YOU WIN");
            points += 1
            addScore(points)
        }
    }
    if (player == "p") {
        if (cpu == "r") {
            changeOutput("YOU WIN");
            points += 1
            addScore(points)
        }
        if (cpu == "p") {
            changeOutput("TIE");
        }
        if (cpu == "s") {
            changeOutput("CPU WIN");
        }
    }
    if (player == "s") {
        if (cpu == "r") {
            changeOutput("CPU WIN");
        }
        if (cpu == "p") {
            changeOutput("YOU WIN");
            points += 1
            addScore(points)
        }
        if (cpu == "s") {
            changeOutput("TIE");
        }
    }
}
function changeOutput(text) {
    content.textContent = text;
    outputText.appendChild(content);
}
function addScore(point) {
    scoreContent.textContent = point;
    scoreText.appendChild(scoreContent);
}
const outputText = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = " ";
outputText.appendChild(content);

const scoreText = document.querySelector("#score");
const scoreContent = document.createElement("div");
scoreContent.classList.add("scoreDisplay");
scoreContent.textContent = "0";
scoreText.appendChild(scoreContent);
