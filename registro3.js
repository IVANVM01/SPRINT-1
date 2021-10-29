<<<<<<< HEAD
var usersArray = new Array();

function validar_telefono(string) {
    var reg = new RegExp('^([0-9]){7,10}$');
    if (!reg.test(string)) {
=======
var usersArray = new Array(); 

function validar_telefono(string){
    var reg = new RegExp('^([0-9]){7,10}$');
    if(!reg.test(string)){
>>>>>>> d5e6e16c2171846c3cc8661bc2a4323f191ba500
        return false;
    }
    return true;
}

<<<<<<< HEAD
function validar_direccion(string) {
    var result = false;
    var reg = new RegExp('^((Calle)|(Carrera)|(Circular)|(Transversal))');
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "#") {
=======
function validar_direccion(string){
    var result = false;
    var reg = new RegExp('^((Calle)|(Carrera)|(Circular)|(Transversal))');
    for(var i=0; i<string.length; i++){
        if(string[i] == "#"){
>>>>>>> d5e6e16c2171846c3cc8661bc2a4323f191ba500
            result = true;
            break;
        }
    }
<<<<<<< HEAD
    if (!result) {
        return false;
    }
    if (string.length < 7 || string.length > 30) {
        return false;
    }
    if (!reg.test(string)) {
=======
    if(!result){
        return false;
    }
    if(string.length<7 || string.length>30){
        return false;
    }
    if(!reg.test(string)){
>>>>>>> d5e6e16c2171846c3cc8661bc2a4323f191ba500
        return false;
    }
    return true;
}

<<<<<<< HEAD
function buscarDominio() {
    //Parte 1: Validar y Almacenar Registros
    var str1 = document.getElementById("campoDireccion").value;
    if (!validar_direccion(str1)) {
=======
function buscarDominio(){
    //Parte 1: Validar y Almacenar Registros
    var str1 = document.getElementById("campoDireccion").value;
    if(!validar_direccion(str1)){
>>>>>>> d5e6e16c2171846c3cc8661bc2a4323f191ba500
        console.log("Formato de dirección incorrecto.");
        return false;
    }
    var str2 = document.getElementById("campoTelefono").value;
<<<<<<< HEAD
    if (!validar_telefono(str2)) {
=======
    if(!validar_telefono(str2)){
>>>>>>> d5e6e16c2171846c3cc8661bc2a4323f191ba500
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
    var usersDomainArray = new Array();
    var reg = new RegExp('[a-zA-Z0-9._-]+(@upb.edu.co)');
<<<<<<< HEAD
    for (var i = 0; i < usersArray.length; i++) {
        if (reg.test(usersArray[i].correo)) {
=======
    for(var i=0; i<usersArray.length; i++){
        if(reg.test(usersArray[i].correo)){
>>>>>>> d5e6e16c2171846c3cc8661bc2a4323f191ba500
            usersDomainArray.push(usersArray[i]);
        }
    }
    console.log("Total Registros: ", usersArray.length);
    console.log("Coindidencias de Dominio: ", usersDomainArray.length);
<<<<<<< HEAD
    for (var i = 0; i < usersDomainArray.length; i++) {
=======
    for(var i=0; i<usersDomainArray.length; i++){
>>>>>>> d5e6e16c2171846c3cc8661bc2a4323f191ba500
        console.log(usersDomainArray[i]);
    }
    return usersDomainArray;
}

<<<<<<< HEAD
function retornarCuenta(args) {
=======
function retornarCuenta(args){
>>>>>>> d5e6e16c2171846c3cc8661bc2a4323f191ba500
    var counter = 0;
    const regName = /a/i;
    const regPhone = /[0-9]+(0|4)$/;

<<<<<<< HEAD
    for (var i = 0; i < args.length; i++) {
        if (regName.test(args[i].nombre) && regPhone.test(args[i].telefono)) {
=======
    for(var i=0; i<args.length; i++){
        if(regName.test(args[i].nombre) && regPhone.test(args[i].telefono)){
>>>>>>> d5e6e16c2171846c3cc8661bc2a4323f191ba500
            counter++;
        }
    }

    console.log("Coincidencias en Nombre y Teléfono: ", counter);
    return counter;
}

module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;
module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;