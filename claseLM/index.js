'use strict'

let fichero = "fichero.txt"; 

loadLDocA(fichero,"txt")



function gestionarFicheroTXT(documento){

   
   alert(documento)
   let lineas = documento.split("\n")

   alert(lineas)


   let capaVacia = document.querySelector("#ficheroTXT")

   let chat = documento.querySelectorAll("mensaje")


   for(let i=0; i<chat.length; i++){
       //capaVacia.innerHTML += "<div class='fila'>" + libros[i].textContent + "</div>"
       capaVacia.innerHTML += "<div class='celda'>" + lineas[i] + "</div>"
      
   }


}
