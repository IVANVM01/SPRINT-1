let usuarios;
let array = [];

function crear_registro(nombre, apellido, telefono, correo, contrasena) {
    usuarios = [nombre + apellido + telefono + correo + contrasena];
    array.push(usuarios);
    console.log(array);
}

function filtrar_registro() {

    let array_filtrar = [];
    let array_correos = [];
    let correo = [];

    for (let i = 0; i < array_usuarios.length; i++); {

        array_correos.push(array_usuarios[i][3]);
        correo = Array.from(array_correos[i])
        for (let j = 0; j < correo.length; j++);
        if (correo[i] == '@');
    }

}

export { crear_registro, filtrar_registro }