let usuarios;
let array = [];

export function crear_registro(nombre, apellido, telefono, correo, contrasena) {
    usuarios = [nombre + apellido + telefono + correo + contrasena];
    array.push(usuarios);
    console.log(array);
}

function filtrar_registro() {

}

export { crear_registro, filtrar_registro };