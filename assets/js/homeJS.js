/* AGREGAR CLASE */

const eLatido = document.querySelector('#logHeader');
console.log(eLatido)

const funcLatido = (e) => {

    e.target.classList.toggle('latido') //definir evento ¿qué se va a hacer al dar click?

}

eLatido.addEventListener('click', funcLatido);

/* for (let i = 0; i < eLatido.length; i += 1) {
    console.log(eLatido[i])
}
 */


 /* Cambiar Clase */

 function cambiarClase(){
    let contMenu = document.getElementById('contMenu');
        contMenu.classList.toggle('contMenuOpen');
    let menuToggle = document.getElementById('menuToggle');
        menuToggle.classList.toggle('menuOpen');    
        
    
    if(contMenu.classList.contains('contMenuOpen')){
        localStorage.setItem('menuOn', 'Sí');
    }else{
        localStorage.setItem('menuOn', 'No');
    }
}

if(localStorage.getItem('menuOn')==='Sí'){
    contMenu.classList.add('contMenuOpen');
    menuToggle.classList.add('menuOpen');
}else{
    contMenu.classList.remove('contMenuOpen');
    menuToggle.classList.remove('menuOpen');
}




/* LOCAL STORAGE */

/* const btnRegistrar = document.getElementById('btnReg')
console.log(btnRegistrar) */




const formReg = document.querySelector('#formReg')
console.log(formReg)

formReg.addEventListener('submit', ()=>{

 const name = docuent.querySelector('#user').value;
 const password = document.getElementById('password1').value;
 const passwordVal = document.querySelector('#password2').value;

    localStorage.setItem('nombre', name)
    localStorage.setItem('contraseña', password)
    localStorage.setItem('contraseñaVal', passwordVal)
})