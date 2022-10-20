// import carga_json from "../util/json.js";

const botón_idiomas = document.getElementById("botón_idioma");
const lista_idiomas = document.getElementById("lista_idioma");

const ruta_banderas = "archivos/banderas/";
const extensión_bandera = ".svg";
const ruta_idioma = "archivos/idiomas/";
const extensión_idioma = ".json";

const idiomas = { "español": "es", "english": "en", "français": "fr", "deutsch": "de", "italiano": "it", "português": "pt", "日本語": "ja", "中文": "zh", "한국어": "ko" };
const idiomas_disponibles = ["español", "português", "english"];

configurar_idioma();

function configurar_idioma() {
	definir_idioma_actual();
	crear_listado_idiomas();
	escuchar_botón_idiomas();
}

function escuchar_botón_idiomas() {
	botón_idiomas.addEventListener("click", () =>
		lista_idiomas.classList.toggle("oculto"));
}

function cambiar_idioma(idioma) {
	cambiar_bandera(idioma);
	cambiar_idioma_documento(idioma);
	localStorage.setItem("idioma", idioma);
	const ruta = ruta_idioma + idioma + extensión_idioma;
	// carga_json(ruta).then(traductor => {});
}

function traducir_título(título) {
	document.querySelector("title").textContent = título;
}

function cambiar_bandera(idioma) {
	const nombre = idioma + extensión_bandera;
	const ruta = ruta_banderas + nombre;
	botón_idiomas.setAttribute("src", ruta);
}

function cambiar_idioma_documento(idioma) {
	const documento = document.querySelector("html");
	documento.setAttribute("lang", idiomas[idioma]);
}

function definir_idioma_actual() {
	const guardado = localStorage.getItem("idioma");
	if (guardado && guardado != idioma_actual())
		cambiar_idioma(guardado);
	else if (!guardado)
		localStorage.setItem("idioma", idioma_actual());
}

function lang_actual() {
	const documento = document.querySelector("html");
	const lang = documento.getAttribute("lang");
	return lang;
}

function idioma_actual() {
	const lang = lang_actual();
	const posición = Object.values(idiomas).indexOf(lang);
	return Object.keys(idiomas)[posición];
}

function ocultar_listado() {
	lista_idiomas.classList.add("oculto");
}

function crear_listado_idiomas() {
	const fragmento = document.createDocumentFragment();
	for (const idioma of idiomas_disponibles)
		fragmento.appendChild(crear_elemento_idioma(idioma));
	lista_idiomas.appendChild(fragmento);
}

function crear_elemento_idioma(idioma) {
	const elemento = document.createElement("li");
	elemento.appendChild(crear_imagen_elemento(idioma));
	elemento.appendChild(crear_texto_elemento(idioma));
	elemento.addEventListener("click", () => {
		ocultar_listado();
		cambiar_idioma(idioma);
	});
	return elemento;
}

function crear_imagen_elemento(idioma) {
	const imagen = document.createElement("img");
	const nombre = idioma + extensión_bandera;
	const ruta = ruta_banderas + nombre;
	imagen.setAttribute("src", ruta);
	return imagen;
}

function crear_texto_elemento(idioma) {
	const texto = document.createElement("span");
	texto.textContent = " " + dignar(idioma);
	return texto;
}

function dignar(palabra) {
	const inicial = palabra.charAt(0).toUpperCase();
	return inicial + palabra.substring(1);
}