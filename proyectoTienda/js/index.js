window.onload=()=>{
mostrarCardsProductos(listaProductos);

}


var carrito=buscarCookieCarrito();
if (carrito){
    mostrarCarrito(carrito);
}else{
    
}



function buscarCookieCarrito(){
    let listaCookies=document.cookie.split(';');
    listaCookies.forEach(cookie => {
        if (cookie[0]=='carrito'){
            return JSON.parse(cookie[1]);
        }
    });
    return false;
}

function mostrarCardsProductos(lista){
    if(document.getElementById('divCentral').hasChildNodes){
        document.getElementById('divCentral').innerHTML="";
    }
    let divCentral = document.getElementById('divCentral');
    lista.forEach(producto => {
        let enlaceTitulo=document.createElement('a');
        let carta=document.createElement('div');
        let imagenCarta=document.createElement('img');
        let tituloCarta=document.createElement('h4');
        let textoCarta=document.createElement('p');
        let botonCarta=document.createElement('button');
        enlaceTitulo.href='../html/paginaProducto.html?idProducto='+producto.id;
        carta.setAttribute('class','card col-3 mx-2 my-2');
        imagenCarta.class='card-img-top';
        imagenCarta.src=producto.listaImagenes[0];
        carta.appendChild(imagenCarta);
        tituloCarta.setAttribute('class','card-title');
        tituloCarta.innerHTML=producto.nombre;
        enlaceTitulo.appendChild(tituloCarta);
        carta.appendChild(enlaceTitulo);
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
        botonCarta.addEventListener('click',addCarrito);
        divCentral.appendChild(carta);
    });
}

function addCarrito(){

}