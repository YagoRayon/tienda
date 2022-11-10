window.onload=()=>{
mostrarCardsProductos(listaProductos);
pintarCarrito();
}


var listaCarrito=cargarCarrito();




function cargarCarrito(){
    if(localStorage.getItem('carrito')){
        listaCarrito=JSON.parse(localStorage.getItem('carrito'));
    }else{
        listaCarrito=[];
    }
    return listaCarrito;
    pintarCarrito();
}

function mostrarCardsProductos(lista){
    if(document.getElementById('divCentral').hasChildNodes){
        document.getElementById('divCentral').innerHTML="";
    }
    let divCentral = document.getElementById('divCentral');
    lista.forEach(producto => {
        let carta=document.createElement('div');
        let imagenCarta=document.createElement('img');
        let tituloCarta=document.createElement('h4');
        let textoCarta=document.createElement('p');
        let botonCarta=document.createElement('button');
        carta.setAttribute('class','card col-12 col-sm-6 col-md-3 mx-2 my-2');
        carta.style.cursor='pointer';
        carta.addEventListener('click',()=>window.location.assign('../html/paginaProducto.html?idProducto='+producto.id));
        imagenCarta.class='card-img-top';
        imagenCarta.src=producto.listaImagenes[0];
        carta.appendChild(imagenCarta);
        tituloCarta.setAttribute('class','card-title');
        tituloCarta.innerHTML=producto.nombre;
        carta.appendChild(tituloCarta);
        textoCarta.setAttribute('class','card-body');
        if(producto.oferta==true){
            textoCarta.innerHTML= '<del>'+producto.precioAntiguo+' </del> <span class="text-success">'+producto.precio+"</span>";
        }else{
            textoCarta.innerHTML=producto.precio+'€';
        }
        carta.appendChild(textoCarta);
        botonCarta.setAttribute('class','btn btn-secondary');
        botonCarta.innerHTML='Comprar';
        botonCarta.value=producto.id;
        carta.appendChild(botonCarta);
        botonCarta.addEventListener('click',()=>addCarrito(event));
        divCentral.appendChild(carta);
    });
}

function addCarrito(event){
    event.stopPropagation();
    let producto=listaProductos[listaProductos.findIndex(p=>p.id==event.target.value)];
    console.log(producto);
    if (listaCarrito.findIndex(p=>p.id==producto.id)!=-1){
        let productoCarrito=listaCarrito[listaCarrito.findIndex(p=>p.id==producto.id)];
        productoCarrito.cantidad++;
        console.log(productoCarrito.cantidad);
    } else {
        producto.cantidad=1;
        listaCarrito.push(producto);
        console.log(producto.cantidad);
    }
    guardarCarrito();
    pintarCarrito();
}
function guardarCarrito(){
    localStorage.setItem('carrito',JSON.stringify(listaCarrito));
}
function pintarCarrito(){
    listaCarrito=cargarCarrito();
    let divContenidoCarrito=document.getElementById('divContenidoCarrito');
    if(document.getElementById('divContenidoCarrito').hasChildNodes){
        document.getElementById('divContenidoCarrito').innerHTML="";
    }
    listaCarrito.forEach(producto => {
        //Creamos los elementos a añadir
        let carta=document.createElement('div');
        let imagenCarta=document.createElement('img');
        let tituloCarta=document.createElement('h4');
        let textoCarta=document.createElement('p');
        let botonCarta=document.createElement('button');
        //Personalizamos el card
        carta.setAttribute('class','card col-10 mx-2 my-2');
        carta.style.cursor='pointer';
        carta.addEventListener('click',()=>window.location.assign('../html/paginaProducto.html?idProducto='+producto.id));
        //Agregamos la imagen dentro del card
        imagenCarta.class='card-img-top';
        imagenCarta.src=producto.listaImagenes[0];
        carta.appendChild(imagenCarta);
        //Agregamos el titulo al card
        tituloCarta.setAttribute('class','card-title');
        tituloCarta.innerHTML=producto.nombre;
        carta.appendChild(tituloCarta);
        //Agregamos el texto con el precio al card
        textoCarta.setAttribute('class','card-body');
        textoCarta.innerHTML=producto.precio+'€';
        carta.appendChild(textoCarta);
        //Agregamos el boton de quitar
        botonCarta.setAttribute('class','btn btn-secondary');
        botonCarta.innerHTML='Quitar';
        botonCarta.value=producto.id;
        carta.appendChild(botonCarta);
        botonCarta.addEventListener('click',()=>quitarCarrito(event));
        
        divContenidoCarrito.appendChild(carta);
    });
}