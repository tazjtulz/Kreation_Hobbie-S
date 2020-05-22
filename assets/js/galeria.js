const btnNoGusta = document.querySelectorAll('.icDislike')
console.log(btnNoGusta)

const funcLike = (e)=>{
    e.target.classList.toggle('mostrar') 
    console.log(e)  
}

for(let i =0; i<btnNoGusta.length; i+=1){
    btnNoGusta[i].addEventListener('click', funcLike);
    console.log(btnNoGusta[i])
};
const meGustaguardados = JSON.stringify();
localStorage.setItem('btnNoGusta', meGustaguardados)


// MDB Lightbox Init
$(function () {

    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");

});


const btnBorrar = document.querySelectorAll('#eliminar');
console.log(btnBorrar)

const funcBorrar = (e)=>{
    
    console.log(e)
    const padre = e.target.closest('.amigos')
    padre.remove()
    console.log(padre)
    
}

for (let i = 0; i < btnBorrar.length; i+=1) {
    btnBorrar[i].addEventListener('click', funcBorrar) 
}


/* const meGustaguardados = JSON.stringify();
localStorage.setItem('btnNoGusta', meGustaguardados) */


/* const obtenerLocal = () */
/* const tarjetaHijo = document.querySelector('.hijo')
console.log(tarjetaHijo.lastChild) */
/* const tarjetaPadre = document.querySelector('.padre')
const tarjetaHijo = document.querySelector('.hijo')
const eliminarT = tarjetaPadre.removeChild(tarjetaHijo) */