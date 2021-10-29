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

function validaciones_campos(){
    var str1 = document.getElementById("campoDireccion").value;
    if(!validar_direccion(str1)){
        alert("Formato de dirección incorrecto.");
    }

    var str2 = document.getElementById("campoTelefono").value;
    if(!validar_telefono(str2)){
        alert("Formato de teléfono incorrecto.");
    }
}

module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;