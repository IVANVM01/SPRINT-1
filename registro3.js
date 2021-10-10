var usersArray = new Array(); 

function validar_telefono(string){
    var reg = new RegExp('^([0-9]){7,10}$');
    if(!reg.test(string)){
        return false;
    }
    return true;
}

function validar_direccion(string){
    var result = false;
    var reg = new RegExp('^((Calle)|(Carrera)|(Circular)|(Transversal))');
    for(var i=0; i<string.length; i++){
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
    var str1 = document.getElementById("campoDireccion").value;
    if(!validar_direccion(str1)){
        console.log("Formato de dirección incorrecto.");
        return false;
    }
    var str2 = document.getElementById("campoTelefono").value;
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
    var usersDomainArray = new Array();
    var reg = new RegExp('[a-zA-Z0-9._-]+(@upb.edu.co)');
    for(var i=0; i<usersArray.length; i++){
        if(reg.test(usersArray[i].correo)){
            usersDomainArray.push(usersArray[i]);
        }
    }
    console.log("Total Registros: ", usersArray.length);
    console.log("Coindidencias de Dominio: ", usersDomainArray.length);
    for(var i=0; i<usersDomainArray.length; i++){
        console.log(usersDomainArray[i]);
    }
    return usersDomainArray;
}

function retornarCuenta(args){
    var counter = 0;
    const regName = /a/i;
    const regPhone = /[0-9]+(0|4)$/;

    for(var i=0; i<args.length; i++){
        if(regName.test(args[i].nombre) && regPhone.test(args[i].telefono)){
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