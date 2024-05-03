// QUERY SELECTOR y QUERY SELECTOR ALL

const titulo = document.querySelector('h1')

console.log(titulo)

const parrafos = document.querySelectorAll('p')
parrafos.forEach(parrafo => console.log(parrafo))

// const arrayCualquiera = new Array()
const arrayCualquiera = []
arrayCualquiera.push(2)
// console.log(arrayCualquiera)
const parrafosArray = Array.from(parrafos)
parrafosArray.push(4)
// console.log(parrafosArray)

const links = document.querySelectorAll('.links-footer>li')
// console.log(links)

// const body = document.querySelector('h1')




// INNER HTML Y TEXT, styles
titulo.innerHTML = 'Nuevo<span id="span-title"> HTML</span>'

console.log(parrafos[0])
parrafos[1].innerText = 'Texto inyectado desde JS'


parrafos.forEach((parrafo, index) => {
    parrafo.innerText = `Texto desde JS ${index}`
})

const span = document.querySelector('#span-title')
span.style.color = 'red'



// CREATE ELEMENTS y Atributos

const menu = document.querySelector('.menu')

const loginLi = document.createElement('li')
loginLi.innerText = 'Iniciar sesion'
menu.append(loginLi)

const crearElemento = (contenedor, tagName, text, idElement) => {
    const element = document.createElement(tagName)
    element.innerText = text
    element.setAttribute('id', `att-${idElement}`)
    element.setAttribute('class', 'h5-element')
    contenedor.append(element)
}

const tecnologias = [
    "React",
    "Angular",
    "Vue.js",
    "Ember.js",
    "Backbone.js",
    "jQuery",
    "D3.js",
    "Three.js",
    "Express.js",
    "Meteor",
    "Electron",
    "Knockout.js",
    "Polymer",
    "Mithril",
    "Preact",
    "Riot.js",
    "Aurelia",
    "Svelte",
    "Nest.js",
    "Feathers.js",
    "Koa",
    "Next.js",
    "Nuxt.js",
    "Gatsby",
    "Stimulus"
];

const contenedor = document.querySelector('#frameworks-librerias')

tecnologias.forEach((tecnologia, index) =>{
    crearElemento(contenedor, 'h5', tecnologia, index)
})

// ALTERNATIVA DE crearElemento

// let datos = ''

// tecnologias.forEach(elemento => {
//     datos += `<h5>${elemento}</h5>`
// })

// const contenedor2 = document.querySelector('.clients')

// contenedor2.innerHTML = datos

const frameworks = document.querySelector('#frameworks-librerias')
const angular = frameworks.querySelector('#att-1')
console.log(angular)
angular.removeAttribute('id')


const ember = frameworks.querySelector('#att-3')

// CLASS LIST

ember.classList.add('color-green')
ember.classList.remove('h5-element')
console.log(ember.classList.contains('red'))
ember.classList.toggle('blue')
