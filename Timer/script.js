// Variables

let milisegundos = 0;
let segundos = 0;
let minutos = 0;
intervalo = null;
dark_mode = false;

// Cuando se hace click en el botón start
function start(){
    if(!intervalo){
        intervalo = setInterval(contador, 10);
    }
}

// Cuando se hace click en el botón stop
function stop(){
    clearInterval(intervalo);
    intervalo = null;
}

// Cuando se hace click en el botón restart
function restart(){
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    clearInterval(intervalo);
    intervalo = null;
    actualizarCronometro();
}

// Aumenta los valores mostrados en el cronómetro
function contador(){
    milisegundos++;

    if(milisegundos == 100){
        segundos++;
        milisegundos = 0;
    }
    if(segundos == 60){
        minutos++;
        segundos = 0;
    }
    
    actualizarCronometro();
}

// Actualiza el contador con el tiempo que ha pasado 
function actualizarCronometro(){
    const contadorHtml = document.getElementById("contador");
    contadorHtml.innerText = `${minutos.toString().padStart(2, 0)}:${segundos.toString().padStart(2, 0)}:${milisegundos.toString().padStart(2, 0)   }`;
}

// Función que cambia entre modo claro y oscuro
function cambiarEstilo(){
    const estilo = document.getElementById('estilo');
    if(!dark_mode){
        estilo.href = 'style_darkmode.css';
        document.getElementById("start").innerText = "";
        document.getElementById("stop").innerText = "";
        document.getElementById("restart").innerText = "";
        document.getElementById("botonCambiarEstilo").innerText = "";
        dark_mode = true;
    } else if(dark_mode){
        estilo.href = 'style.css';
        document.getElementById("start").innerText = "Start";
        document.getElementById("stop").innerText = "Stop";
        document.getElementById("restart").innerText = "Restart";
        document.getElementById("botonCambiarEstilo").innerText = "Change Style";
        dark_mode = false;
    }
}

// Activa los eventos según el botón
document.getElementById("start").addEventListener("click", () => start());
document.getElementById("stop").addEventListener("click", () => stop());
document.getElementById("restart").addEventListener("click", () => restart());
document.getElementById("botonCambiarEstilo").addEventListener("click", () => cambiarEstilo());