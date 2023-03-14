let addPokemon = false;

document.addEventListener("DOMContentLoaded", () => {
    fetchRequest()
})

function renderPokemon(pokemon){
    let card = document.createElement("li")
    card.className = "card"
    card.innerHTML = `
    <img src="${pokemon.image}">
    `
    document.querySelector("#pokemon-cards").append(card)
}

function fetchRequest(){
    fetch("http://localhost:3000/pokemon")
    .then(request => request.json())
    .then(data => data.forEach(pokemon => renderPokemon(pokemon)))
}