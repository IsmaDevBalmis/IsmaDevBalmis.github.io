'use strict'

let fichero = "fichero.txt"; 

loadLDocA(fichero,"txt")



function gestionarFicheroTXT(documento){

   
   alert(documento)
   let lineas = documento.split("\n")

   alert(lineas)


   let capaVacia = document.querySelector("#ficheroTXT")

   


   for(let i=0; i<lineas.length; i++){
       
        if(i % 2 == 0){
            capaVacia.innerHTML += "<div class='izquierda'>" + lineas[i] + "</div>"
        }else{
            capaVacia.innerHTML += "<div class='derecha'>" + lineas[i] + "</div>"
        }
      
      
   }


}
