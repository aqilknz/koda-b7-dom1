const main = document.createElement("main")
document.body.appendChild(main)

const sectionDisplay = document.createElement("section")
sectionDisplay.className = "display"

const spanReset = document.createElement("span");
spanReset.textContent = "⟲";
const spanValue = document.createElement("span");
spanValue.textContent = "0";
sectionDisplay.append(spanReset, spanValue)
main.appendChild(sectionDisplay)


const sectionButtons = document.createElement("section")
sectionButtons.className = "button"
main.appendChild(sectionButtons);

const buttonsData = [
    { text: "<span>Deg</span> | Rad", class: "btn degrad" },
    { text: "x!", class: "btn exf" },
    { text: "(", class: "btn bk" },
    { text: ")", class: "btn tk" },
    { text: "%", class: "btn persen" },
    { text: "AC", class: "btn ac" },
    { text: "Inv", class: "btn inv" },
    { text: "Sin", class: "btn sin" },
    { text: "In", class: "btn in" },
    { text: "7", class: "btn sev num" },
    { text: "8", class: "btn eight num" },
    { text: "9", class: "btn nine num" },
    { text: "/", class: "btn sl" },
    { text: "π", class: "btn phi" },
    { text: "cos", class: "btn cos" },
    { text: "log", class: "btn log" },
    { text: "4", class: "btn fourth num" },
    { text: "5", class: "btn five num" },
    { text: "6", class: "btn six num" },
    { text: "x", class: "btn ex" },
    { text: "e", class: "btn e" },
    { text: "tan", class: "btn tang" },
    { text: "√", class: "btn rot" },
    { text: "1", class: "btn one num" },
    { text: "2", class: "btn two num" },
    { text: "3", class: "btn thr num" },
    { text: "-", class: "btn min" },
    { text: "Ans", class: "btn ans" },
    { text: "EXP", class: "btn exp" },
    { text: "x<sup>y</sup>", class: "btn exye" },
    { text: "0", class: "btn zer num" },
    { text: ".", class: "btn dott num" },
    { text: "=", class: "btn equal" },
    { text: "+", class: "btn plus" }
];
for (const data of buttonsData) {
    const btn = document.createElement("button");
    btn.className = data.class;
    btn.innerHTML = data.text;
    sectionButtons.appendChild(btn);
}