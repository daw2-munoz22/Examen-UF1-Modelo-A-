//creacion de la base de datos, que es un array de objetos
const arrayPersonajes = [{
        id: 1,
        nombre: "Batman",
        imagenUrl: "https://pngimg.com/uploads/batman/batman_PNG83.png",
        edad: 4
    },
    {
        id: 2,
        nombre: "One Piece",
        imagenUrl: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2020/04/One-Piece.jpg?fit=2560%2C1440&ssl=1",
        edad: 44
    },
    {
        id: 3,
        nombre: "Superman",
        imagenUrl: "https://th.bing.com/th/id/OIP.B75ZHwlbnRygChj68H60HQHaJ4?pid=ImgDet&rs=1",
        edad: 444
    },
    {
        id: 4,
        nombre: "Hulk",
        imagenUrl: "https://image.tmdb.org/t/p/original/5AQUYjvO0Bnkjj0CArfykrDoABG.jpg",
        edad: 4444
    }
]
console.log(arrayPersonajes);
//var pepe = pintaTarjetas(arrayPersonajes);

//función pintaTarjetas, que recibe la base de datos
function pintaTarjetas(arrayPersonajes) {
    let codigo = '';
    //recorro la base de datos y pinto tantas tarjetas como objetos haya
    for (let index = 0; index < arrayPersonajes.length; index++) {
        codigo += `
            <div class="card" style="width: 18rem;">
                <img src="${arrayPersonajes[index].imagenUrl}" class="card-img-top" alt="imagen">
                <div class="card-body">
                    <h5 class="card-title">${arrayPersonajes[index].nombre}</h5>
                    <p class="card-text">Edad: ${arrayPersonajes[index].edad}</p>
                </div>
            </div>`
    }
    return codigo;
}
var inyectar = document.querySelector('#personajes').innerHTML = pintaTarjetas(arrayPersonajes);

//función creaPersonaje()
//creo unas variables para guardar el valor de cada input
//creo un objeto vacío y en cada propiedad, inyecto el valor
//Al acabar, guardo el objeto en la base de datos e inyecto el resultado en el div con id="personajes"
function creaPersonaje(event) {
    event.preventDefault()
    const inputName = document.querySelector("#nombre");
    const inputImagen = document.querySelector("#imagen");
    const inputEdad = document.querySelector("#edad");
    const personaje = {}
    personaje.nombre = inputName.value,
        personaje.imagenUrl = inputImagen.value,
        personaje.edad = inputEdad.value
    arrayPersonajes.push(personaje);
    document.querySelector('#personajes').innerHTML = pintaTarjetas(arrayPersonajes);
}

//función buscaPersonaje()

function buscaPersonaje(usuari) {
    alert(usuari.mensaje);
    
    arrayPersonajes.forEach(personaje => alert(personaje.nombre));
    
    /*for (let index = 0; index < arrayPersonajes.length; index++) {
        if (arrayPersonajes[index].nombre == usuari.nombre) {
            if (arrayPersonajes[index].imagen == usuari.imagen) {
                if (arrayPersonajes[index].edad == usuari.edad) {
                    return {
                        error: false,
                        datos: {
                            nombre: `${arrayPersonajes[index].nombre}`,
                            imagenUrl: `${arrayPersonajes[index].imagenUrl}`,
                            edad: `${arrayPersonajes[index].edad}`
                        },
                        mensaje: 'ok'
                    }
                }
            }
        }
    }*/
   
    return {
        error: true,
        datos: '',
        mensaje: 'El personaje no existe en la base de datos'
    }

}