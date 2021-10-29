import { crear_registro, filtrar_registro } from './array_registros.js';

document.querySelector("#boton_registrar").addEventListener('click', click_registrar);

function click_registrar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    crear_registro(nombre, apellido, telefono, correo, contrasena);


}