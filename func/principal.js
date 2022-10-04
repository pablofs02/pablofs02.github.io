const elementos = [
	{
		nombre: "Aplicaciones",
		artículos: [{
			nombre: "Cronos",
			imagen: "https://repository-images.githubusercontent.com/509259259/f031b98d-c95d-42a1-807a-f3c0f13a8be9",
			enlace: "Cronos"
		}, {
			nombre: "Curriculum Vitae",
			imagen: "https://repository-images.githubusercontent.com/465828758/247802b1-291c-42f3-9f4c-b0c765b5e640",
			enlace: "Curriculum-Vitae"
		}]
	},
	{
		nombre: "Juegos",
		artículos: [{
			nombre: "Rompe Ladrillos",
			imagen: "https://repository-images.githubusercontent.com/471554899/d3bb30f9-9f89-475d-9976-4841586492f5",
			enlace: "Rompe-Ladrillos"
		}, {
			nombre: "Lucha",
			imagen: "https://repository-images.githubusercontent.com/487407324/4635a82d-82e8-4f07-acb8-fbea30778ad0",
			enlace: "Lucha"
		}, {
			nombre: "Serpiente",
			imagen: "https://repository-images.githubusercontent.com/469462989/c32df3e4-c1cf-4d79-970a-257dbadcf401",
			enlace: "https://github.com/TetrisRubik/Serpiente"
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
	const nodo = document.createElement("a");
	nodo.appendChild(crear_texto(artículo.nombre));
	nodo.appendChild(crear_imagen(artículo.imagen));
	nodo.href = artículo.enlace;
	nodo.classList.add("artículo");
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