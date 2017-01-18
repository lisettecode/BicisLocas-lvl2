function validateForm(){

	var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contraseña = document.getElementById("input-password").value;
    var text = "";
    if (nombre.length == 0 && apellido == 0 && correo == 0 && contraseña == 0) {
		text = "Por favor, complete todos los campos.";
		error(text, "name");
	} else{
        
    //Nombre
	if( nombre == null || nombre.length == 0 || nombre == ""){
		text = "Por favor, escriba su nombre.";
		error(text, "name");
	}else if ( /[0-9]/.test(nombre)){
		text = "Por favor, no ingrese números.";
		error(text, "name");
	}else if ( /^[a-z]/.test(nombre.charAt(0)) ){
		text="Por favor. Escriba el primer caracter en mayuscula";
		error(text, "name");
	}
        
        
    //Apellido
	if( apellido == null || apellido.length == 0 || apellido == ""){
	 	text = "Por favor,escribe tu apellido.";
		error(text, "lastname");
	}else if ( /[0-9]/.test(apellido)){
		text ="Por favor, no ingrese números.";
		error(text, "lastname");
	}else if ( /^[a-z]/.test(apellido.charAt(0)) ){
		text = "Por favor, escriba el primer caracter en mayúscula.";
		error(text, "lastname");
	}
        
    //Correo
	var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!emailRegex.test(correo)) {
        text = "Por favor, ingrese un correo válido.";
        error(text, "input-email");
    };
        
    //Contraseña
    if(contraseña == null || contraseña.length == 0) {
        text = "Por favor, ingresa una contraseña.";
        error(text, "input-password");
    } else if (contraseña.length < 6){
        text = "Por favor, la contraseña no es válida, ingresa mínimo 6 caracteres.";
        error(text, "input-password");
    } 
    if (contraseña == "123456" || contraseña == "098754" || contraseña == "password"){
    	text = "'123456', '098754' y 'password' no son contraseñas válidas.";
    	error(text, "input-password");
    };
        
    //Select
	var opcion = document.querySelector("select").selectedIndex;
        if( opcion == null || opcion == "" ) {
        text = "Por favor, seleccione una opción.";
        var error = document.createElement("span");
		var textError = document.createTextNode(text);
		error.appendChild(textError);
		var name = document.querySelector("select");
		var padre = name.parentNode;
		var newSpan = padre.insertBefore(error, name);
    }
}
    
    //Fallas
	function error(texto, identificador){
		var error = document.createElement("span");
		var textError = document.createTextNode(texto);
		error.appendChild(textError);
		var name = document.getElementById(identificador);
		var padre = name.parentNode;
		var newSpan = padre.insertBefore(error, name);
	}

}