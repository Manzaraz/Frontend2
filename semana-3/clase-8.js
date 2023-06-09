/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array 
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
    // selecciona todos los botones del like
    const botonesLike = document.querySelectorAll(".fa-heart")
    // console.log(botonesLike);
  
    botonesLike.forEach( boton => {
        boton.addEventListener("click", (e)=> {
            console.log(e.target.id);
            console.log(boton.id);
            
            albumesFamosos.forEach( album => {
                if (e.target.id == album.id) {
                    album.like = !album.like
                }
            })

            // Para renderizar nuevamente las tarjetas para que se pinte de nuevo el album famos
            renderizarAlbumes(albumesFamosos)
            // agregar un listener para seguir escuchando si aprieta otro boton
            marcarFavorito()
        })
    })
}
marcarFavorito()



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
    // desarrollar la función 👇
    window.addEventListener("keydown", (e) => { 
        console.log(e);        
        console.log(e.key);        
        if (e.key === "F") {
            const album = prompt("¿Qué album deseas eliminar, danos el nombre: ?")
            console.log(album);
            const posicionParaBuscar = albumesFamosos.findIndex( item => item.nombre.toLowerCase() == album.toLowerCase() )
            console.log(posicionParaBuscar);
            // si fue encontrado el nombre del album..
            if (posicionParaBuscar !== 1 ) {
                albumesFamosos.splice(posicionParaBuscar, 1)
            }
            //👇 post click debemos renderizar nuevamente las tarjetas
            renderizarAlbumes(albumesFamosos)
            //👇 post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior
            marcarFavorito()

        }
     })




}
eliminarAlbum();