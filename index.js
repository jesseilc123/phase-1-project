document.addEventListener("DOMContentLoaded", () => {
    fetchRequest()
})

function hideForm(){
    let addPokemon = false;

    const addBtn = document.querySelector("#new-toy-btn");
}
function renderPokemon(pokemon){
    let card = document.createElement("li")
    card.className = "card"
    card.innerHTML = `
    <img src="${pokemon.image}" class="pokemon-image">
    <div class="card-content">
        <p>${pokemon.name}</p>
        <p>$${pokemon.price}</p>
        <p>${pokemon.type}</p>
        <button>Sell</button>
    </div>
    `
    document.querySelector("#pokemon-cards").appendChild(card)
}

function fetchRequest(){
    fetch("http://localhost:3000/pokemon")
    .then(request => request.json())
    .then(data => data.forEach(pokemon => renderPokemon(pokemon)))
}