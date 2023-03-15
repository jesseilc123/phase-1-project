document.addEventListener("DOMContentLoaded", () => {
    handleForm()
    hideForm()
    fetchRequest()
})

function handleForm(){
    document.querySelector(".buy-card-form").addEventListener("submit", (event) => {
        event.preventDefault()
        let formData = {
            name: event.target.name.value,
            image: event.target.image.value,
            type: event.target.type.value,
            price: event.target.price.value
        }

        renderPokemon(formData)
    })
}

function hideForm(){
    let buyPokemon = false;

    const addBtn = document.querySelector("#buy-new-card-button");
    const pokemonFormContainer = document.querySelector(".container")
    addBtn.addEventListener("click", () => {
        buyPokemon = !buyPokemon;
        if(buyPokemon){
            pokemonFormContainer.style.display = "block";
        }else{
            pokemonFormContainer.style.display = "none";
        }
    })
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