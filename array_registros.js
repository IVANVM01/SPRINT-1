let usuarios;
let array = [];

function crear_registro(nombre, apellido, telefono, correo, contrasena) {
    usuarios = [nombre + apellido + telefono + correo + contrasena];
    array.push(usuarios);
    console.log(array);
}

function filtrar_registro() {

    let array_filtrar;

    for (let i = 0; i < array_usuarios.length; i++) {

        console.log(array_usuario[i][3]);
    }

}

export { crear_registro, filtrar_registro }