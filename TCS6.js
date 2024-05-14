'use strict'

let clavedeuser
let clavecorrecta=2875
let intentos=0

do{
    clavedeuser=prompt("Ingrese su clave")
    intentos++
    if(clavedeuser==clavecorrecta){
        break
    }

}while (intentos!=3)
    alert(clavedeuser==clavecorrecta ? "Operacion exitosa" : "Tarjeta bloqueada")
