// Variables del problema

var metrosCuadrados = 0;
var tipoDeInmueble = "";
var valorDeAdministracion = 0;
var cuotaDeAseo = 0;
var derechosDeGym = 0;
var cantidadDeHabitantes = 0;
var generoDelHabitante = "";
var edadDeCadaHabitante = 0;


// Datos de entrada

metrosCuadrados = prompt("Digite los " + "metros cuadrados");
tipoDeInmueble = prompt('Digite el tipo de  '+ 'inmueble "Casa" o "Apartamento".' );
tipoDeInmueble = tipoDeInmueble.toUpperCase();
cantidadDeHabitantes = prompt("Digite la cantidad de " + "personas que viven en el inmueble");
for(var i=0; i<cantidadDeHabitantes; i++){
    generoDelHabitante = prompt("Digite el genero " + (i+1));
    edadDeCadaHabitante = prompt("Cual es la edad " + (i+1) );
    generoDelHabitante = generoDelHabitante.toLowerCase();
    derechosDeGym += calcularValorDelGym(generoDelHabitante, edadDeCadaHabitante);

}



/* Procesos o calculos

if(tipoDeInmueble == "CASA"){
    valorDeAdministracion = metrosCuadrados-1500+100000;
}else if(tipoDeInmueble == "APARTAMENTO"){
    valorDeAdministracion = metrosCuadrados*1500+50000;
}else{
    alert("Tipo de inmueble no valido")
} */


valorDeAdministracion = calcularValorDeAdministracion(metrosCuadrados, tipoDeInmueble);
cuotaDeAseo = calcularCuotaDeAseo(valorDeAdministracion, metrosCuadrados);

function calcularValorDelGym(generoDelHabitante, edadDeCadaHabitante){
    switch(generoDelHabitante){
        case 'masculino':
            if(edadDeCadaHabitante<10){
                return 0;
            }else if(edadDeCadaHabitante >=10 && edadDeCadaHabitante <20){
                return 20000;
            }else if(edadDeCadaHabitante >=20 && edadDeCadaHabitante <40){
                return 15000;
            }else if(edadDeCadaHabitante >=40 && edadDeCadaHabitante <60){
                return 10000;
            }else if(edadDeCadaHabitante >60){
                return 0;
            }
            break;
        case 'femenino':
            if(edadDeCadaHabitante<10){
                return 0;
            }else if(edadDeCadaHabitante >=10 && edadDeCadaHabitante <18){
                return 15000;
            }else if(edadDeCadaHabitante >=18 && edadDeCadaHabitante <35){
                return 12000;
            }else if(edadDeCadaHabitante >=35 && edadDeCadaHabitante <55){
                return 8000;
            }else if(edadDeCadaHabitante >55){
                return 0;
            }
            break;
    }
}


function calcularValorDeAdministracion(metrosCuadrados, tipoDeInmueble){
    if(tipoDeInmueble == "CASA"){
        return metrosCuadrados*1500+100000;
    }else if(tipoDeInmueble == "APARTAMENTO"){
        return metrosCuadrados*1500+50000;
    }else{
        return "Tipo de inmueble no valido"
    }
}

function calcularCuotaDeAseo(valorDeAdministracion, metrosCuadrados){
    return (valorDeAdministracion * 0.1)+ (metrosCuadrados*1000);
}


// Salidas del sistema

document.write("El valor de la administración es: " + valorDeAdministracion + "</br>" +
                "El valor de la cuota de aseo es: " + cuotaDeAseo + "</br>" +
                "El valor del Gym es: " + derechosDeGym + "</br>" +
                "El total es " + (valorDeAdministracion + cuotaDeAseo + derechosDeGym) );