

class compradores {

    constructor (nombre, apellido , producto , monto ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.producto = producto;
        this.monto = monto;
    }



}

let lista_compradores = [];


let validacion = prompt ("quiere ingresar datos? si/no " )


while (validacion == "si"){

    let nombre = prompt("Ingrese nombre");
    let apellido = prompt("Ingrese apellido");
    let producto = prompt("Ingrese el producto");
    let monto = parseInt(prompt("Ingrese el monto de la compra"));

    validacion = prompt("Quiere seguir ingresando datos? si/no");

    let comprador = new compradores (nombre,apellido,producto,monto);

    lista_compradores.push(comprador)
}


function calcular_total( acu , item){

    acu = acu + item.monto;

    return acu
}



console.log(lista_compradores);

let compra_total = lista_compradores.reduce (calcular_total, 0 )

console.log ("el total de las compras fue de: ", compra_total)
