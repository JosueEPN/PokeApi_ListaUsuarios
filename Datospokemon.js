const consultarpokemon = (id, number) => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then((response) => {
			return response.json();
		})

		.then((data) => {
			pintarPokemon(data, number);
		})
		.catch((error) => {
			console.log(error);
		});
};
const btnSeleccionar = () => {
	let primerPokemon = Math.round(Math.random() * 899);
	let segundoPokemon = Math.round(Math.random() * 899);
	consultarpokemon(primerPokemon, 1);
	consultarpokemon(segundoPokemon, 2);
};

btnSeleccionar();

const lista = document.getElementById("Listarpokemon");

const pintarPokemon = (data, id) => {
	let item = lista.querySelector(`#pok-${id}`);
	item.getElementsByTagName("img")[0].setAttribute(
		"src",
		data.sprites.front_default
	);
	item.getElementsByTagName("p")[0].innerHTML = data.name;

	let pokeUno = ``;

	for (let i = 0; i < data.abilities.length; i++) {
		pokeUno += `<li> ${data.abilities[i].ability.name}</li>`;
	}

	item.getElementsByTagName("ol")[0].innerHTML = pokeUno;
};
