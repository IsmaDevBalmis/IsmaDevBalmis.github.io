'use strict'

let fichero = "libros"; 

loadLDocA(fichero,"xml")

function gestionarFicheroXML(xml){

    let capaVacia = document.querySelector("#ficheroXML")
	let libros = xml.querySelectorAll("libro")
	for(let i=0; i<libros.length; i++){
		//capaVacia.innerHTML += "<div class='fila'>" + libros[i].textContent + "</div>"
		capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("ISBN").textContent + "</div>"
		capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("titulo").textContent + "</div>"
		capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("nivelProfundidad").textContent + "</div>"
		capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("autores").textContent + "</div>"
		capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("editorial").textContent + "</div>"
		capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("fechaPublicacion").textContent + "</div>"
		capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("paginaWeb").textContent + "</div>"
		capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("precio").textContent + "</div>"
        capaVacia.innerHTML += "<div class='fila'> </div>"
    }
	
    
    let capa = document.querySelector("div:nth-child(1)") 
    capa.addEventListener("click",CargarFichero);


}

