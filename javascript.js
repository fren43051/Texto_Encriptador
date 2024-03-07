// Seleccion de objetos
const btnEncriptar = document.querySelector('.boton-encriptar');
const textEncriptar = document.querySelector('.texto-encriptar');
const aviso = document.querySelector('.texto-aviso');
const respuesta = document.querySelector('.mensaje-encriptado');
const contenido = document.querySelector('.contenedor-mensaje');
const btnCopiar = document.querySelector('.boton-copiar');
const btnDesencriptar = document.querySelector('.boton-desencriptar');


// Referencia al botón Encriptar
btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = textEncriptar.value;
    let txtSinAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let txtSinCaracteresEspeciales = txtSinAcentos.replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;]/g, "");

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800"
        aviso.textContent = "El campo de texto no puede estar vacío";

        setTimeout(() =>{
            aviso.removeAttribute('style');
        },1500);
    }

    if (texto != txtSinAcentos){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800"
        aviso.textContent = "No debe tener acentos";

        setTimeout(() =>{
            aviso.removeAttribute('style');
        },1500);
        return;
    }

    else if (texto != txtSinCaracteresEspeciales){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800"
        aviso.textContent = "No debe tener caracteres especiales";

        setTimeout(() =>{
            aviso.removeAttribute('style');
        },1500);
        return;
    }

    else if (texto != texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800"
        aviso.textContent = "El texto debe ser todo en minúsculas";

        setTimeout(() =>{
            aviso.removeAttribute('style');
        },1500);
        return;
    }
    
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
    }
    
    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
});

// Referencia al botón Desencriptar
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = textEncriptar.value;
    let txtSinAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let txtSinCaracteresEspeciales = txtSinAcentos.replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;]/g, "");

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800"
        aviso.textContent = "El campo de texto no puede estar vacío";

        setTimeout(() =>{
            aviso.removeAttribute('style');
        },1500);
    }

    if (texto != txtSinAcentos){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800"
        aviso.textContent = "No debe tener acentos";

        setTimeout(() =>{
            aviso.removeAttribute('style');
        },1500);
        return;
    }

    else if (texto != txtSinCaracteresEspeciales){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800"
        aviso.textContent = "No debe tener caracteres especiales";

        setTimeout(() =>{
            aviso.removeAttribute('style');
        },1500);
        return;
    }

    else if (texto != texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800"
        aviso.textContent = "El texto debe ser todo en minúsculas";

        setTimeout(() =>{
            aviso.removeAttribute('style');
        },1500);
        return;
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
    }

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
});

// Referencia al botón Copiar
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand('copy');
}); 