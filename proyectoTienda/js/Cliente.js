class Cliente{
    constructor(dni,nombre,usuario,password,correo,rutaImagen){
        this.DNI=dni || 'Sin DNI';
        this.nombre=nombre || 'Sin Nombre';
        this.usuario=usuario || 'Sin Usuario';
        this.password=password || 'Sin Contraseña';
        this.correo=correo || 'Sin Correo';
        this.rutaImagen=rutaImagen || 'sinRuta.png';
        this.historialCompras = [];
    }

    cambiarImagen(nuevaRuta){
        this.rutaImagen=nuevaRuta;
    }
    cambiarPassword(nuevaPass){
        this.password=nuevaPass;
    }
    addCompra(idCompra){
        this.comprasPasadas.push(idCompra);
    }
}