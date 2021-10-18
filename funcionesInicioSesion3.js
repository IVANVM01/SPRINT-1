var usersArray = new Array(); 


function validar_telefono(string){
    let reg = new RegExp('^([0-9]){7,10}$');
    if(!reg.test(string)){
        return false;
    }
    return true;
}
function validar_direccion(string){
    let result = false;
    let reg = new RegExp('^((Calle)|(Carrera)|(Circular)|(Transversal))');
    for(let i=0; i<string.length; i++){
        if(string[i] == "#"){
            result = true;
            break;
        }
    }
    if(!result){
        return false;
    }
    if(string.length<7 || string.length>30){
        return false;
    }
    if(!reg.test(string)){
        return false;
    }
    return true;
}


function buscarDominio(){
    //Parte 1: Validar y Almacenar Registros
    let str1 = document.getElementById("campoDireccion").value;
    if(!validar_direccion(str1)){
        console.log("Formato de dirección incorrecto.");
        return false;
    }
    let str2 = document.getElementById("campoTelefono").value;
    if(!validar_telefono(str2)){
        console.log("Formato de teléfono incorrecto.");
        return false;
    }
    let newUser = {
        'nombre': document.getElementById('campoNombre').value,
        'usuario': document.getElementById('campoUsuario').value,
        'direccion': document.getElementById('campoDireccion').value,
        'contrasena': document.getElementById('campoContrasena').value,
        'correo': document.getElementById('campoCorreo').value,
        'confirmacioncorreo': document.getElementById('campoConfirmacionCorreo').value,
        'telefono': document.getElementById("campoTelefono").value,
    }
    usersArray.push(newUser);
    console.log("Registro Exitoso.");

    //Parte 2: Buscar correos con dominio upb.edu.co
    let filteredUsersArray = new Array();
    let reg = new RegExp('[a-zA-Z0-9._-]+(@upb.edu.co)');
    for(let i=0; i<usersArray.length; i++){
        if(reg.test(usersArray[i].correo)){
            filteredUsersArray.push(usersArray[i]);
        }
    }
    console.log("Total Registros: ", usersArray.length);
    console.log("Coindidencias de Dominio: ", filteredUsersArray.length);
    for(let i=0; i<filteredUsersArray.length; i++){
        console.log(filteredUsersArray[i]);
    }
    return filteredUsersArray;
}
function retornarCuenta(args){
    let counter = 0;
    const regName = /a/i;
    const regPhone = /[0-9]+(0|4)$/;

    for(let i=0; i<args.length; i++){
        if(regName.test(args[i].nombre) && regPhone.test(args[i].telefono)){
            counter++;
        }
    }

    console.log("Coincidencias en Nombre y Teléfono: ", counter);
    return counter;
}


function verificarInicioSesion3(correo, contrasena, arreglo){
    let result = false;
    let value;
    for(let i=0; i<arreglo.length; i++){
        if(correo==arreglo[i].correo && contrasena==arreglo[i].contrasena){
            result = true;
            //value = prompt("¿Cúal es el factorial de 6");
            break;
        }
    }
    if(result){
        console.log("Inicio de sesión exitoso!");
        return value;
    } else {
        console.log("Error al iniciar sesión!");
        return false;
    }
}
function verificarCaptcha3(respuesta){
    if(respuesta == calcularFactorial(6)){
        console.log("Verificación de captcha exitosa!");
        return true;
    } else {
        console.log("Error al verificar captcha!");
        return false;
    }
}


function calcularFactorial(num){
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * calcularFactorial(num-1);
    }
}
function buscarDominioTest(){
    //Esto la parte de la funcion buscarDominio() necesaria para hacer pruebas
    let filteredUsersArray = new Array();
    let reg = new RegExp('[a-zA-Z0-9._-]+(@upb.edu.co)');
    for(let i=0; i<usersArray.length; i++){
        if(reg.test(usersArray[i].correo)){
            filteredUsersArray.push(usersArray[i]);
        }
    }
    return filteredUsersArray;
}
function iniciarSesionTest(){
    verificarCaptcha3(
        verificarInicioSesion3(
            document.getElementById('campoUsuarioCorreo').value,
            document.getElementById('campoUsuarioContrasena').value,
            buscarDominioTest()
        )
    );
}

module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;
module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;
module.exports.verificarInicioSesion3 = verificarInicioSesion3;
module.exports.verificarCaptcha3 = verificarCaptcha3;