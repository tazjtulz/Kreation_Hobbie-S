/* const popUpPrototipo = alert('Estimado cliente, te recordamos que este es un prototipo en desarrollo del requerimiento que nos hiciste. Algunas funcionalidades no se encuentran aún disponibles. Contactacta con nuestro agente comercial para mayor información. Gracias por preferirnos KREATION')
 */
const btnSubmit = document.querySelector('button')
console.log(btnSubmit)

// INTENTO QUE FUNCIONO
const valForm = () =>{
       
    const inputCheck = document.querySelector('#check');
    console.log(inputCheck.checked)

    if(inputCheck.checked==true){
    alert("Gracias, nos pondremos en contacto contigo lo más pronto posible.")
    }else{
    alert("Complete todos los campos")
    }
}

btnSubmit.addEventListener('click', valForm)
console.log(valForm)

// INTENTO FALLIDO 1
/* const funAlert = alert("Gracias, nos pondremos en contacto contigo lo más pronto posible.") */
//btnSubmit.addEventListener('submit', alert("Gracias, nos pondremos en contacto contigo lo más pronto posible."))

// INTENTO FALLIDO 2
/* const btnSubmit = document.getElementById("button"); */

/* btnSubmit.onclick = function() {
  alert("Soy un botón");
} */


// INTENTO FALLIFO 3
/* console.log(funSubmit)
const funSubmit = (e)=>{
    e.preventDeFault();
} */


// INTENTO FALLIDO 4
/* 
btnSubmit.addEventListener('click', ()=>{
    alert("Gracias, nos pondremos en contacto contigo lo más pronto posible.")

}) */



// INTENTO FALLIDO 5 
/* const validarFormulario = (event) =>{
    event.preventDeFault();
    const inputName = document.querySelector('#program').value;
    console.log(inputName)
    if(inputName==""){
        alert('Ingrese correctamente los datos')
    }
} */



// INTENTO FALLIDO 6
/* let errorMsn = "";
function valVacio(input, nombreInput){
    if(input.value==="")
    errorMsn=`${errorMsn} Completa el campo ${nombreInput}<br>`
}
 */
//valForm coincide con la fórmula puesta en el html
/* const valForm=(event)=>{
    event.preventDefault();
    
    const output= document.querySelector('#output');//div creado en html

    const inputName=document.querySelector('.inputName');
    valVacio(inputName, 'Nombre')

    const inputSurname = document.querySelector('.inputSurname');
    valVacio(inputSurname, 'Apellido')

    const inputTelefono=document.querySelector('.inputTelefono');
    valVacio(inputTelefono, 'Teléfono')

    output.innerHTML=errorMsn

}
 */


/* checked true */