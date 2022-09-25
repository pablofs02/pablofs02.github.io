const elementos = [
	{
		nombre: "Aplicaciones",
		artículos: [{
			nombre: "Cronos",
			imagen: "https://avatars.githubusercontent.com/u/76429811",
			enlace: "Cronos"
		}, {
			nombre: "artículo 2",
			imagen: "https://avatars.githubusercontent.com/u/76429811",
			enlace: ""
		}]
	},
	{
		nombre: "Juegos",
		artículos: [{
			nombre: "artículo 1",
			imagen: "https://avatars.githubusercontent.com/u/76429811",
			enlace: ""
		}, {
			nombre: "artículo 2",
			imagen: "https://avatars.githubusercontent.com/u/76429811",
			enlace: ""
		}]
	}];

agregar_elementos(elementos);

function agregar_elementos(listado) {
	const nodo = document.querySelector("main");
	for (let i = 0; i < listado.length; i++)
		nodo.appendChild(crear_sección(listado[i]));
}

function crear_sección(sección) {
	const nodo = document.createElement("section");
	nodo.appendChild(crear_título(sección.nombre));
	nodo.appendChild(crear_contenido(sección.artículos));
	return nodo;
}

function crear_título(nombre) {
	const nodo = document.createElement("h2");
	nodo.textContent = nombre;
	return nodo;
}

function crear_contenido(artículos) {
	const nodo = document.createElement("div");
	for (let i = 0; i < artículos.length; i++)
		nodo.appendChild(crear_artículo(artículos[i]));
	return nodo;
}

function crear_artículo(artículo) {
	const nodo = document.createElement("article");
	nodo.appendChild(crear_imagen(artículo.imagen));
	nodo.appendChild(crear_texto(artículo.nombre));
	nodo.addEventListener("click", () => {
		location.assign(artículo.enlace);
	});
	return nodo;
}

function crear_imagen(imagen) {
	const nodo = document.createElement("img");
	nodo.src = imagen;
	return nodo;
}

function crear_texto(nombre) {
	const nodo = document.createElement("h3");
	nodo.textContent = nombre;
	return nodo;
}