let addPokemon = false;

document.addEventListener("DOMContentLoaded", () => {
    fetchRequest()
})

function renderPokemon(pokemon){
    let card = document.createElement("li")
    card.className = "card"
    card.innerHTML = `
    <img src="${pokemon.image}" class="pokemon-image">
    <div class="card=content">
        <p>${pokemon.name}</p>
        <p>${pokemon.type}</p>
        <p>$${pokemon.price}</p>
    `
    document.querySelector("#pokemon-cards").appendChild(card)
}

function fetchRequest(){
    fetch("http://localhost:3000/pokemon")
    .then(request => request.json())
    .then(data => data.forEach(pokemon => renderPokemon(pokemon)))
}