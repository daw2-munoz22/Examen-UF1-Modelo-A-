//función pintaTarjetas, que recibe la base de datos
function pintaTarjetas(arrayPersonajes) {
    var codigo = '';
    //recorro la base de datos y pinto tantas tarjetas como objetos haya
    for (let index = 0; index < arrayPersonajes.length; index++) {
        codigo += `
            <div class="card" style="width: 18rem;">
                <img src="${arrayPersonajes[index].imagenUrl}" class="card-img-top" alt="imagen">
                <div class="card-body">
                    <h5 class="card-title">${arrayPersonajes[index].nombre}</h5>
                    <p class="card-text">Edad: ${arrayPersonajes[index].edad}</p>
                </div>
            </div>`;
    }
    console.log(codigo);
    return codigo;
}
//función creaPersonaje()
//creo unas variables para guardar el valor de cada input
//creo un objeto vacío y en cada propiedad, inyecto el valor
//Al acabar, guardo el objeto en la base de datos e inyecto el resultado en el div con id="personajes"
function creaPersonaje(event) {
    event.preventDefault();
    const inputName = document.querySelector("#nombre");
    const inputImagen = document.querySelector("#imagen");
    const inputEdad = document.querySelector("#edad");
    const personaje = {};
    personaje.nombre = inputName.value,
        personaje.imagenUrl = inputImagen.value,
        personaje.edad = inputEdad.value
    arrayPersonajes.push(personaje);
    document.querySelector('#personajes').innerHTML = pintaTarjetas(arrayPersonajes);
}

//función buscaPersonaje()

function buscaPersonaje() {
    /*
    alert(usuari.mensaje);
    
    arrayPersonajes.forEach(personaje => alert(personaje.nombre));*/
    const inputName = document.querySelector("#watch");
    let nombre_personaje = inputName.value;
    for (let index = 0; index < arrayPersonajes.length; index++) {
        if (arrayPersonajes[index].nombre == nombre_personaje) {
            console.log(nombre_personaje);
            //guardo en la variable tarjeta la ficha del personaje e la inyecto en el div con id filtro
            let targeta = `
            <div class="card" style="width: 18rem;">
                <img src="${arrayPersonajes[index].imagenUrl}" class="card-img-top" alt="imagen">
                <div class="card-body">
                    <h5 class="card-title">${arrayPersonajes[index].nombre}</h5>
                    <p class="card-text">Edad: ${arrayPersonajes[index].edad}</p>
                </div>
            </div>`;    
            document.getElementById('filtro').innerHTML = targeta;
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
    //caso por defecto
    //muestro la ficha en consola
    //en la variable mensaje, guardo el mensaje cuyo error es true y lo muestro mediante un alert
    console.log(nombre_personaje);
    let mensaje = 'El personaje no existe en la base de datos';
    alert(mensaje);
    return {
        error: true,
        datos: '',
        mensaje: mensaje
    } 
    
}

