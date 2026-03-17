const cToF = (c) => {
    return parseInt(c) * 1.8 + 32;
}
const cToK = (c) => {
    return parseInt(c) + 273.15;
}
const cToR = (c) => {
    return parseInt(c) * 0.8;
}

document.body.style.padding = "50px"
const label = document.querySelector("label")
label.style.fontSize = ("20px")

const form = document.querySelector("form")
form.style.display = "flex"
form.style.flexDirection = "column"
form.style.width = "40%"
form.style.gap = "10px"

const inputCelcius = document.querySelector('input[name="celcius"]');

inputCelcius.addEventListener("input", (e) => {
    const value = e.target.value;
    e.preventDefault();
    //   console.log(e.target.celcius.value);
    const showC = document.querySelector("div p:nth-child(1)")
    showC.textContent = `Celcius: ${value}`;

    const showF = document.querySelector("div p:nth-child(2)")
    showF.textContent = `Fahrenheit: ${cToF(value)}`;

    const showK = document.querySelector("div p:nth-child(3)")
    showK.textContent = `Kelvin: ${cToK(value)}`;

    const showR = document.querySelector("div p:nth-child(4)")
    showR.textContent = `Reamur: ${cToR(value)}`;
});
