const red = document.querySelector("div:nth-child(1)");
const yellow = document.querySelector("div:nth-child(2)");
const green =document.querySelector("div:nth-child(3)")


function changeToYellow() {
  red.style.backgroundColor = "black";
  yellow.style.backgroundColor = "yellow";
}

function changeToGreen() {
  yellow.style.backgroundColor = "black";
  green.style.backgroundColor = "green";
}

function changeToRed() {
  green.style.backgroundColor = "black";
  red.style.backgroundColor = "red";
}

function delay(d) {
    return new Promise((resolve) => {
        setTimeout(resolve, d);
    });
}

async function run() {
    while(true) {
        changeToYellow();
        await delay(3000);
        changeToGreen();
        await delay(2000);
        changeToRed();
        await delay(3000);
    }
}
run()

