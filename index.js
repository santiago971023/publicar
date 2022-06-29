
//Código para el botón del menú
const btn_menu = document.getElementById('svg');
const menu = document.getElementById('menu');
console.log(menu);

btn_menu.addEventListener("click",()=>{
    menu.classList.toggle('activo');
})


// Código para el acordeón de mostrar los ejercicios
const bloque = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');

h2.forEach( (cadaH2 , i )=> {
    h2[i].addEventListener('click',()=>{

        bloque.forEach( ( cadaBloque , i )=> {
            bloque[i].classList.remove('activar')
        })
        
        bloque[i].classList.add('activar')
        
    })
})












// DECLARACIÓN VARIABLES
const input_nombre = document.getElementById('input_nombre');
const input_correo = document.getElementById('input_correo');
const input_asunto = document.getElementById('input_asunto');
const input_mensaje = document.getElementById('input_mensaje');

const inputs = document.getElementsByClassName('formulario_input');




// ------ AGREGANDO EVENTOS------

// --------Animaciones-----------

input_nombre.addEventListener('keyup', () => {
    if(input_nombre.value.length>=1){
        input_nombre.nextElementSibling.classList.add('activo1');
    }else{
        input_nombre.nextElementSibling.classList.remove('activo1');
    }
})

input_correo.addEventListener('keyup', () => {
    if(input_correo.value.length>=1){
        input_correo.nextElementSibling.classList.add('activo1');
    }else{
        input_correo.nextElementSibling.classList.remove('activo1');
    }
})


input_asunto.addEventListener('keyup', () => {
    if(input_asunto.value.length>=1){
        input_asunto.nextElementSibling.classList.add('activo1');
    }else{
        input_asunto.nextElementSibling.classList.remove('activo1');
    }
})

input_mensaje.addEventListener('keyup', () => {
    if(input_mensaje.value.length>=1){
        input_mensaje.nextElementSibling.classList.add('activo_1');
    }else{
        input_mensaje.nextElementSibling.classList.remove('activo1');
    }
})


// ------------  Eventos para validar formulario ------------



const btn_enviar = document.getElementById('btn_enviar');
var incompletos = []
var inputs2 = [input_nombre.value,input_correo.value,input_asunto.value,input_mensaje.value];
btn_enviar.addEventListener('click', () => {

    const nombre = input_nombre.value;
    const correo = input_correo.value;
    const asunto = input_asunto.value;
    const mensaje = input_mensaje.value;

    if(nombre === ""){
        alert("El campo nombre está vacío");
        return false;
    }else if(correo === ""){
        alert("El campo correo está vacío");
        return false;
    }else if(asunto === ""){
        alert("El campo asunto está vacío");
        return false;
    }else if(mensaje === ""){
        alert("El campo mensaje está vacío");
        return false;
    }
    else{
        const datos = {
            datoNombre : nombre,
            datoCorreo : correo,
            datoAsunto : asunto,
            datoMensaje : mensaje
        
        };
        
        console.log("Nombre: "+datos.datoNombre);
        console.log("Correo: "+datos.datoCorreo);
        console.log("Asunto: "+datos.datoAsunto);
        console.log("Mensaje: "+datos.datoMensaje);
        alert("Su mensaje se envió correctamente.")

    }


})






