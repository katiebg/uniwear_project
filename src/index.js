import myJson from '/src/wearoptions.json' assert {type: 'json'};

const arrOfClothes = myJson.wear;
let elementId
const elemOfPaste = document.querySelector(".cards");
arrOfClothes.forEach(element => {
    elemOfPaste.insertAdjacentHTML("beforeend", `<div class="clothes-card" data-id='${element.id}'>
    <h2 class="name-of-clothes">${element.name}</h2>
    <img class="picture-clothes" src="img/wear/ШортыСВырезомПудра.jpg" alt="${element.name}">
    <ul class="colors-buttons">
    </ul>
    <div class="cost">
        <p>Стоимость: ${element.cost}</p>
    </div>
</div>`)

elementId = elemOfPaste.querySelector(`[data-id="${element.id}"]`)
    element.colors.forEach((el, idx) => {
        elementId.querySelector(".colors-buttons").insertAdjacentHTML("beforeend", `<li class="color-button">
        <img id='${element.id}' class="color-of-clothes" src="img/imgOfWear/${element.colors[idx]}.png" alt="${element.colors[idx]}">
    </li> `)
    })

});

document.querySelectorAll(".color-of-clothes").forEach(element => element.addEventListener("click", ()=>{
    console.log(element)
    let attrId = element.getAttribute('id')
    let imgOfElem = document.querySelector('[data-id]').querySelector(".picture-clothes");
    let nameOfElem = document.querySelector('[data-id]').querySelector(".name-of-clothes").textContent;

    imgOfElem.setAttribute('src', `img/wear/${nameOfElem.replace(/ /g,'') + element.getAttribute('alt')}.jpg`)

}))

