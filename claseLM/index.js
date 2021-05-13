'use strict'

let fichero = "libros"; 

loadLDocA(fichero,"xml")

function gestionarFicheroXML(xml){

    let capaVacia = document.querySelector("#ficheroXML")
	let libros = xml.querySelectorAll("libro")
	for(let i=0; i<libros.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
	
    
    let capa = document.querySelector("div:nth-child(1)") 
    capa.addEventListener("click",CargarFichero);


}

