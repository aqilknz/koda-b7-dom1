const title = document.createElement("h1")
title.innerText = "Form Survery Perokok"
document.body.appendChild(title)

const form = document.createElement("form")
document.body.appendChild(form)

// name
const divName = document.createElement("div")
const labelName = document.createElement("nama")
labelName.setAttribute("for", "nama")
labelName.textContent = "Nama: "
const inputName = document.createElement('input');
inputName.setAttribute("type", "text")
inputName.setAttribute("name", "nama")
inputName.setAttribute("id","nama")
inputName.setAttribute("placeholder","Enter Your Name")
divName.append(labelName, inputName)
form.appendChild(divName)

// umur
const divUmur = document.createElement("div");
const labelUmur = document.createElement("label");
labelUmur.setAttribute("for", "umur")
labelUmur.textContent = "Umur: "
const inputUmur = document.createElement("input")
inputUmur.setAttribute("type", "number")
inputUmur.setAttribute("name", "umur")
inputUmur.setAttribute("id", "umur")
inputUmur.setAttribute("placeholder","Enter Your Age");
divUmur.append(labelUmur, inputUmur);
form.appendChild(divUmur);

// Option Gender
const divGender = document.createElement("div");
const labelGenderUtama = document.createElement("label");
labelGenderUtama.textContent = "Jenis Kelamin";
divGender.appendChild(labelGenderUtama);
divGender.appendChild(document.createElement('br'));

const genderOpt = [
    {
        "id": "L",
        "text": "Laki-Laki"
    },
    {
        "id": "P",
        "text": "Perempuan"
    }
]
genderOpt.forEach(opt => {
    const radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "gender"
    radio.className = "radio"
    radio.id = opt.id

    const labelRadio = document.createElement("label")
    labelRadio.setAttribute("for", opt.id)
    labelRadio.textContent = opt.text
    divGender.append(radio, labelRadio)

})
form.appendChild(divGender)

// Option Status
const divStatus = document.createElement("div")
const labelStatus = document.createElement("label")
labelStatus.textContent = "apakah anda seorang perokok?"
divStatus.appendChild(labelStatus)
form.appendChild(divStatus)

const selectStatus = document.createElement("select")
const statusOpt = [
    {text : "pilih", value : "", disabled: "true", selected:"Pilih"},
    {text : "Perokok", value : "perokok"},
    {text : "Bukan Perokok", value : "bukan"}
]
statusOpt.forEach(opt => {
    const option = document.createElement("option")
    option.value = opt.value
    option.textContent = opt.text
    if(opt.disabled) option.disabled = true
    if(opt.selected) option.selected = true
    selectStatus.appendChild(option)
})
divStatus.appendChild(selectStatus)
form.appendChild(divStatus)

// Brands
const divBrand = document.createElement("div")
const labelBrand = document.createElement("label")
labelBrand.textContent = "Brand rokok apa yang digunakan: "
divBrand.appendChild(labelBrand)
form.appendChild(divBrand)

const brands = ["Sampoerna", "Dio", "Magnum", "Surya"]


brands.forEach(b => {
    const divCheck = document.createElement('div');
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.name = b.toLowerCase();
    cb.id = b.toLowerCase();
    
    const labelCb = document.createElement('label');
    labelCb.setAttribute('for', b.toLowerCase());
    labelCb.textContent = b;
    
    divCheck.appendChild(cb);
    divCheck.appendChild(labelCb);
    divBrand.appendChild(divCheck);
});
form.appendChild(divBrand);

// submit
const divSubmit = document.createElement('div');
const btnSubmit = document.createElement('input');
btnSubmit.type = 'button';
btnSubmit.value = 'Submit'; 
divSubmit.appendChild(btnSubmit);
form.appendChild(divSubmit);
