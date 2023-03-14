let addPokemon = false;

document.addEventListener("DOMContentLoaded", () => {
    
})

function renderPokemon(Pokemon){}

function fetchRequest(){
    fetch("http://localhost:3000/pokemon")
    .then(request => request.json())
    .then(data => data.forEach(pokemon => renderPokemon(pokemon)))
}