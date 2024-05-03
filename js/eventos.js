const boton = document.querySelector('button')
const menu = document.querySelector('.menu')

boton.addEventListener('click', function(){
    menu.classList.toggle('hidden')
})

