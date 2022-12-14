class Producto {    //Clase Producto
    constructor(id,nombre,precio,material,descripcion,categoria,oferta,listaTallas,listaColores,listaImagenes,nExistencias){
        this.id=id || 'Sin ID';                       //ID Unico producto
        this.nombre=nombre || 'Sin Nombre';
        this.material=material || 'Sin Material';
        this.precio=precio || 'Sin Precio';
        this.descripcion=descripcion || 'Sin Descripcion';
        this.categoria=categoria || 'Sin Categoría';
        this.oferta=oferta || false;                                //Boolean
        this.listaTallas=listaTallas || ['Sin Tallas'];   //Array
        this.listaColores=listaColores || ['Sin Colores']; //Array
        this.listaImagenes=listaImagenes || ['Sin Imagen'];   //array
        this.nExistencias=nExistencias || 0;
    }


    addTalla(nuevaImagen){
        this.listaImagenes.push(nuevaImagen);
    }
    removeTalla(imagenAQuitar){
        this.listaImagenes.forEach((imagen,posicion) => {
            if(imagen == imagenAQuitar){
                this.listaImagenes.splice(posicion,1);
                return true;
            }
        });
        return false;
    }

    cambiarPrecio(precioNuevo,oferta=false){    //Si solo meto precio, no creo una oferta 
        if (oferta==true){
            this.precioAntiguo = this.precio;   //Creo un nuevo campo con el precio antiguo
        }
        this.precio = precioNuevo;          //Asigno el nuevo precio al precio actual
        this.oferta=oferta;                 //Elijo si quiero que sea una oferta o solo un cambio de precio(booleana)
    }
    addTalla(nuevaTalla){
        this.listaTallas.push(nuevaTalla);
    }
    removeTalla(tallaAQuitar){
        this.listaTallas.forEach((talla,posicion) => {
            if(talla == tallaAQuitar){
                this.listaTallas.splice(posicion,1);
                return true;
            }
        });
        return false;
    }

    addColor(nuevoColor){
        this.listaColores.push(nuevoColor);
    }
    removeColor(colorAQuitar){
        this.listaColores.forEach((color,posicion) => {
            if(color == colorAQuitar){
                this.listaColores.splice(posicion,1);
                return true;
            }
        });
        return false;
    }


}