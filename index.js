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

        if(formData.name === "" || formData.image === "" || formData.type === "" || formData.price === ""){
            return alert("Please do not leave any of the criteria blank.")
        } 
        if(parseFloat(formData.price) > parseFloat(document.querySelector("#balance").innerText)){
            return alert("Insufficient funds.")
        } else {
            postCard(formData)
            document.querySelector("#balance").innerText = parseFloat(document.querySelector("#balance").innerText) - formData.price
            patchBalance(parseFloat(document.querySelector("#balance").innerText))
            alert("Pokemon card successfully purchased!")
            document.querySelector(".buy-card-form").reset()
        }
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
            addBtn.innerText = "Close"
        }else{
            pokemonFormContainer.style.display = "none";
            addBtn.innerText = "Buy new Pokemon card!"
        }
    })
}
function renderPokemon(pokemon){
    let card = document.createElement("li")
    card.className = "card"
    card.innerHTML = `
    <img src="${pokemon.image}" class="pokemon-image">
    <div class="card-content">
        <p class="top-left">${pokemon.name}</p>
        <p class="bottom-left">$${pokemon.price} USD</p>
        <p class="top-right">${pokemon.type}</p>
        <button id="sell-card">Sell</button>
    </div>
    `
    document.querySelector("#pokemon-cards").appendChild(card)

    sellCard(card, pokemon) 
}

function handleBalance(value){
    let totalBalance = document.querySelector("#balance")
    totalBalance.innerText = value.balance
}

function sellCard(card, pokemon){
    card.querySelector("#sell-card").addEventListener("click", () => {
        card.remove()
        document.querySelector("#balance").innerText = parseFloat(document.querySelector("#balance").innerText) + parseFloat(pokemon.price)
        deleteSellCard(pokemon.id)
        patchBalance(parseFloat(document.querySelector("#balance").innerText))
        alert("Pokemon card successfully sold!")
    })
}

function fetchRequest(){
    fetch("http://localhost:3000/pokemon")
    .then(request => request.json())
    .then(data => data.forEach(pokemon => renderPokemon(pokemon)))

    fetch("http://localhost:3000/total-balance")
    .then(request => request.json())
    .then(data => data.forEach(value => handleBalance(value)))
}

function postCard(pokemonObj){
    fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(pokemonObj)
    })
    .then(response => response.json())
    .then(pokemon => renderPokemon(pokemon))
}

function patchBalance(balance){
    let obj = {
        "id": 1,
        "balance": balance
    }
    fetch("http://localhost:3000/total-balance/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(balance => console.log(balance))
}

function deleteSellCard(id){
    fetch(`http://localhost:3000/pokemon/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
    .then(response => response.json())
    .then(pokemon => console.log(pokemon))
}