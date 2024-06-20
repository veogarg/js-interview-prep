
document.addEventListener("DOMContentLoaded", () => {
    const pokeSelect =  document.getElementById("poke-select")
    const pokeDetails = document.getElementById("pokemon-details")
    const pokemonDetails = {}

    const fetchPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(pokemons => {
            displayPokemonList(pokemons.results)
        })
        .catch(err => {
            console.log(err)
            pokeSelect.innerHTML = "<option>Error while fetching pokemons</option>"
        })
    }

    const displayPokemonList = (pokemons) => {
        pokemons.forEach(pokemon => {
            const option = document.createElement("option")
            option.value = pokemon.url;
            option.text = pokemon.name
            pokeSelect.appendChild(option)
        });
    }

    pokeSelect.addEventListener("change", (e) => {
        const url = e.target.value
        if(pokemonDetails[url]) {
            displayPokemonDetails(pokemonDetails[url])
        }else {
            pokeDetails.innerHTML = "Loading..."
            fetch(url)
            .then(res => res.json())
            .then(details => {
                pokemonDetails[url] = details
                pokeDetails.innerHTML = ""
                displayPokemonDetails(details)
            })
            .catch(err => {
                pokeDetails.innerHTML = ""
                console.log(err)
            })
        }
    })

    const displayPokemonDetails = (details) => {
        const detailsHtml = `
            <h2 style="text-transform: uppercase">${details.name}</h2>
            <p>Height: <strong>${details.height}</strong></p>
            <p>Weight: <strong>${details.weight}</strong></p>
            <p>Abilities: <strong>${details.abilities.map(ability => ability.ability.name).toString()}</strong></p>
        `
        pokeDetails.innerHTML = detailsHtml
    }

    fetchPokemons()
})