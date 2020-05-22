/* SILENCIAR VIDEO DE FONDO */

const unmuteBtn=document.querySelector('#unmuteButton')

unmuteBtn.addEventListener('click', ()=> {

    video.muted = false;

});

/* MOSTRAR CONTRASEÑA */


/* const btnCambio = document.querySelector("#mostrar_ocultar")
console.log(btnCambio)

const funcMostrarPass=()=>{
    btnCambio.classList.toggle('passView')
}

btnCambio.addEventListener('click', funcMostrarPass); */

const btnCambio = document.querySelector('#mostrar_ocultar');

btnCambio.addEventListener('click', ()=>{
    const verPass = document.querySelector('#passwordIngreso');
    if (verPass.type == "password") {
        btnCambio.classList.toggle('passView');
        verPass.setAttribute('type', 'text')
    } else {
        btnCambio.classList.toggle('passHide');
        verPass.setAttribute('type', 'password')
    }
    console.log(verPass)
})

console.log(btnCambio)

//const verPass = document.querySelector('#passwordIngreso');
//console.log(verPass)


/* SLIDER LOGIN */


/* MOSTRAR U OCULTAR BOTÓN */

/* const btnNoGusta = document.querySelector('.noMostrar');
console.log(btnNoGusta.length)

const funcLike = (e)=>{
    
    const funcLike = e.target.attributes[1].value;
    console.log(e)
    
    console.log(funcLike)

    if (btnNoGusta.className == "mostrar") {
        
        btnNoGusta.classList.toggle('mostrar')

                        
    } else {
        btnNoGusta.classList.toggle('mostrar')
          
    }

    
}
 
for(let i =0; i<btnNoGusta.length; i+=1){
    btnNoGusta[i].addEventListener('click', funcLike);
}

btnNoGusta.addEventListener('click', funcLike)

console.log(funcLike) */







/* const imgBtn = document.querySelector('#imgBtn')
console.log(imgBtn.attributes[2])
console.log(imgBtn.attributes)

if (imgBtn.attributes[2]=='src="assets/Multimedia_Proyecto_Final/LogIn/App_Store2.png"'){
    console.log("funciona")
} else{
    console.log ("no funciona")
} */

/* 
imgBtn.addEventListener('click', ()=>{
    if (imgBtn.attributes[2]=="assets/Multimedia_Proyecto_Final/LogIn/App_Store2.png"){
        
        imgBtn.attributes[2]("assets/Multimedia_Proyecto_Final/LogIn/App_Store4.png")
    }
}) */



/* 
btnLike.addEventListener('click', ()=>{
     
    if (btnNoGusta.classList[1]=="mostrar") {
        btnLike.classList.remove('mostrar')
        btnLike.classList.add('noMostrar')
        
    } else {
        btnLike.classList.remove('noMostrar')
        btnLike.classList.add('mostrar')
    }
}) */



/* if (btnNoGusta.classList[1]=="mostrar") {console.log("activada")
        
} else {console.log("noActivada")
    
} */



/* ALERTA DE RENUNCIA DE RESPONSABILIDADES */

Swal.fire({
    title: '<strong class="titleAlert">¡Atención!</strong>',
	html: '<p class="textAlert">Estimado cliente, te recordamos que este es un prototipo en desarrollo del requerimiento que nos hiciste. Algunas funcionalidades no se encuentran aún disponibles. Contactacta con nuestro agente comercial para mayor información. Gracias por preferirnos.</p>',
	imageUrl: './assets/Multimedia_Proyecto_Final/HeaderFooter/Logo Kreation_wh2.png',
	imageWidth: '90px',
    width: '40%',
    
	confirmButtonText: '<p class="button">Aceptar</p>',
	
	background: 'rgb(216, 216, 216)',
	
	allowOutsideClick: false,
	allowEscapeKey: false,
	allowEnterKey: false,
	stopKeydownPropagation: false,

	
	confirmButtonColor: "#022C51",
	
})
