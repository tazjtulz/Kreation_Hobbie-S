const btnFoto = document.querySelectorAll('.cardImg')
console.log(btnFoto)

const funcZoom = (e)=>{
    e.target.classList.toggle('zoom') 
    console.log(e)
}

for(let i =0; i<btnFoto.length; i+=1){
    btnFoto[i].addEventListener('click', funcZoom);
    console.log(btnFoto[i])
}






/* 
const btnEliminar = document.querySelectorAll('.iconImg')
console.log(btnEliminar)
const tarjeta = document.querySelectorAll('.amigos')


const funcBorrar = (e)=>{
    e.target.classList.toggle('eliminar') 
    console.log(e)
}
for(let i =0; i<btnEliminar.length; i+=1){
    btnEliminar[i].addEventListener('click', funcBorrar);
    console.log(btnEliminar[i])
} */

// Vamos por otro intento

/* 
const btns = document.querySelectorAll('.btn'); // se llama al botón
console.log(btns)
const output = document.querySelector('#output') // se llama las tarjetas

const btnTxt = (e)=>{

    const btnTxt = e.target.innerText;


    if(btnTxt === 'ESPACIO'){
        output.innerHTML += `&nbsp`;
    }else if(btnTxt === '<--'){
        output.innerText = output.innerText.slice(0, -1);
    }else{
        output.innerText += btnTxt;
    }


    //output.innerText = output.innerText + btnTxt; //Esto equivale a lo mismo de arriba
}

for(let i =0; i<btns.length; i+=1){
    btns[i].addEventListener('keydown', btnTxt);
    } */

/* const btnBorrar = document.querySelector('.iconImg')
console.log(btnBorrar)
const tarjeta = document.querySelector('.amigos')
console.log(tarjeta)

const funcBorrar = (e)=>{
    e.target.classList.toggle('eliminar')

    if (btnBorrar.className == "elimnar") {
        
        tarjeta.classList.toggle('eliminar')
                    
    }
}
btnBorrar.addEventListener('click', funcBorrar)
console.log(funcBorrar) */



/* if (btnNoGusta.className == "mostrar") {
        
    btnNoGusta.classList.toggle('mostrar')

                    
} */

/* const btnBorrar = document.querySelectorAll('.iconImg');

const funcBorrar = ()=>{
    const tarjetaPadre = document.querySelector('.amigosPadre')
    const tarjetaHijo = document.querySelector('.amigos')
    const eliminar = tarjetaPadre.removeChild(tarjetaHijo)
}

/* btnBorrar.addEventListener('click', funcBorrar) */


/* for(let i =0; i<btnBorrar.length; i+=1){
    btnBorrar[i].addEventListener('click', funcBorrar);
    console.log(btnBorrar[i])
} */


const btnBorrar = document.querySelectorAll('.iconImg');
console.log(btnBorrar)

/* const tarjetaHijo = document.querySelector('.hijo')
console.log(tarjetaHijo.lastChild) */


const funcBorrar = (e)=>{

    console.log(e)
    const padre = e.target.closest('.amigos')
    padre.remove()
    console.log(padre)
    /* const tarjetaPadre = document.querySelector('.padre')
    const tarjetaHijo = document.querySelector('.hijo')
    const eliminarT = tarjetaPadre.removeChild(tarjetaHijo) */
   
}




for (let i = 0; i < btnBorrar.length; i+=1) {
    btnBorrar[i].addEventListener('click', funcBorrar) 
    
}
