// Rango del número aleatorio será entre 1 y 100
const min = 1;
const max = 100;
let numeroAleatorio = 0;

// Se genera el número aleatorio
function generarNumeroAleatorio(event){
    if (numeroAleatorio != 0){
        alert("Has reiniciado el número aleatorio.");
    }
    numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    // Se muestra en consola el número que se debe adivinar
    console.log("El número que el usuario debe adivinar es:", numeroAleatorio);
}

generarNumeroAleatorio();

// Evento que se accede a través del index.html
function evaluarNumero(event){
    // Se previene que la página se refresque cada vez que se activa el evento
    event.preventDefault();
    
    // Se obtiene el número ingresado por el usuario
    const numero = parseInt(document.getElementById("numero").value);
    
    console.log("El usuario ha ingresado", numero);

    // Se evalúa si el número del usuario es mayor o menor que el número aleatorio
    if(numero > numeroAleatorio){
        alert("El número es menor");
    }

    else if(numero < numeroAleatorio){
        alert("El número es mayor");
    }

    else if(isNaN(numero) == true){
        alert("¡No has ingresado ningún número!");
    }
    
    else if(numero == numeroAleatorio){
        alert("¡Felicidades! Has adivinado el número " + numeroAleatorio);
    }

    // En caso de que alguien se quiera pasar de listo...
    else{
        console.log("De aquí no escaparás...");
        alert("¡Aaaah!");
        alert("Veo que intentaste alterar mi código...");
        alert("Las consecuencias serán...");
        alert("¡IRREVERSIBLES!");
        location.href="https://youtu.be/dQw4w9WgXcQ?si=0X7gWDEUbSWvivqV";
    }
}