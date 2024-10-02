/*
Tengo que armar un js donde se pueda elegir entre varios destinos turisticos, los cuales tengan una tarifa base y
a medida que se vayan agregando extras (como numero de personas, excursiones, un hotel mas lujoso, 
vuelos/colectivo, etc) se vaya sumando a la tarifa inicial y que al finalizar y dar la opcion de comprar/pagar
se limpie todo (como si fuera un carrito de un e-commerce)
 */

/*
destino 1: playa del carmen 
destino 2: rio de janeiro
destino 3: miami
destino 4: ibiza

tarifas base x persona (precios en usd):
1: 500
2: 450
3: 1200
4: 1500

tarifa base incluye:
hotel 3 estrellas, desayuno, traslado del aeropuerto/terminal al hotel, asistencia al viajero

extras a sumar (opcionales):
pasaje ida y vuelta (avion directo 300usd / avion con escalas 200usd)
excursiones: 50usd c/u
pension completa (almuerzo y cena): 30usd
seguro de equipaje: 50usd

*/

let destino 
let numDestino = parseInt(prompt("Seleccione el numero correspondiente al destino deseado: 1- Playa del Carmen; 2- Rio de Janeiro; 3- Miami; 4- Ibiza"))


while(numDestino<1 || numDestino>4 || isNaN(numDestino)){
    numDestino = parseInt(prompt("El valor ingresado es incorrecto, por favor seleccione una opcion válida. 1- Playa del Carmen; 2- Rio de Janeiro; 3- Miami; 4- Ibiza"))
}
if(numDestino === 1){
    destino = "Playa del Carmen"
}else if(numDestino === 2){
    destino = "Rio de Janeiro"
}else if(numDestino === 3){
    destino = "Miami"
}else if(numDestino ===4){
    destino = "Ibiza"
}
console.log("El destino elegido es", destino)

let tarifa 
if(numDestino === 1){
    tarifa = 500
}else if(numDestino === 2){
    tarifa = 450
}else if(numDestino === 3){
    tarifa = 1200
}else{
    tarifa = 1500
}

console.log("La tarifa base x persona para el destino elegido es $"+ tarifa+ " usd y esto incluye hotel 3 estrellas, desayuno, traslado del aeropuerto/terminal al hotel, asistencia al viajero durante todo el viaje")

let vuelo = prompt("Desea contratar el vuelo con nosotros? Responda con si o no.")
vuelo = vuelo.toLowerCase()
while(vuelo!="si" && vuelo!="no"){
    vuelo = prompt("El valor ingresado es incorrecto. Desea contratar el vuelo con nosotros? Responda con si o no.");
    vuelo = vuelo.toLowerCase()
};
if(vuelo == "si"){
    let tipoTransporte = parseInt(prompt("Desea que el vuelo sea con escalas a 200usd o un vuelo directo a 300usd? Responda 1 en caso de querer con escalas o 2 si lo quiere sin escala.")) 
    while(tipoTransporte != 1 && tipoTransporte != 2){
        tipoTransporte = parseInt(prompt("El valor ingresado es incorrecto. Desea que el vuelo sea con escalas a 200usd o un vuelo directo a 300usd? Responda 1 en caso de querer con escalas o 2 si lo quiere sin escala."));
    }
    if(tipoTransporte === 1){
        tarifa += 200
    }else{
        tarifa += 300
    }
}else{
    console.log("Perfecto, no hay problema")
}

let seguroEquipaje = prompt("De momento hay una promocion exclusiva para asegurar su equipaje por solo 30usd extras, le gustaria aprovecharla? Responda con si o no.")
seguroEquipaje = seguroEquipaje.toLowerCase()

while(seguroEquipaje!="si" && seguroEquipaje!="no"){
    seguroEquipaje = prompt("El valor ingresado es incorrecto. Quiere aprovechar la promocion para asegurar su equipaje por 30usd extras? Responda con si o no.");
    seguroEquipaje = seguroEquipaje.toLowerCase()
};

if(seguroEquipaje =="si"){
    tarifa += 30
}else{
    console.log("No se preocupe, de igual manera su equipaje estara seguro.")
}

// console.log("De momento su tarifa es de $"+ tarifa, "usd")

let excursiones = prompt("Le gustaria contratar excursiones por un extra de 50usd c/u? Responda con si o no.")
excursiones = excursiones.toLowerCase()

while(excursiones!="si" && excursiones!="no"){
    excursiones = prompt("El valor ingresado es incorrecto. Le gustaria contratar excursiones por un extra de 50usd c/u? Responda con si o no.");
    excursiones = excursiones.toLowerCase()
};

if(excursiones == "si"){
    let cantExcursiones = parseInt(prompt("Cuantas excursiones quiere contratar? Puede seleccionar un maximo de 3.")) 
    while(cantExcursiones < 1 || cantExcursiones > 3){
        cantExcursiones = parseInt(prompt("El valor ingresado es incorrecto. Cuantas excursiones quiere contratar? Puede seleccionar un maximo de 3."));
    }
    if(cantExcursiones === 1){
        tarifa += 50
    }else if(cantExcursiones === 2){
        tarifa += 100
    }else{
        tarifa += 150
    }
}else{
    console.log("Ningun problema, seguimos con unas preguntas mas y finalizamos.")
}

let  comidas = prompt("Por un adicional de 50usd puede contratar la pension completa que incluye almuerzo y cena, esta interesado en agregarlo? Responda si o no.")
comidas = comidas.toLowerCase();

while(comidas!="si" &&comidas!="no"){
    comidas = prompt("El valor ingresado es incorrecto. Le gustaria contratar la pension completa por 50usd adicionales? Responda con si o no.");
    comidas = comidas.toLowerCase()
};

if(comidas =="si"){
    tarifa += 50
}else{
    console.log("No hay problema.")
}

let cantPersonas = parseInt(prompt(" Por ultimo, cuantos pasajeros participaran del viaje?"))

while(cantPersonas<1){
    cantPersonas = parseInt(prompt("El valor ingresado es incorrecto, por favor ingrese el numero de pasajeros."))
}

tarifa = tarifa*cantPersonas

console.log("el precio final para el paquete elegido es de $"+ tarifa, "usd, muchas gracias por elegirnos.")






