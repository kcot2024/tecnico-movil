
function cambiarColorFondo() {

    const   bgColor = prompt(
        '¡Bienvenido! Puedes cambiar el color del fondo ingresando el nombre de color en ingles, hexadecimal o rgb. '
    );
    document.body.style.backgroundColor = bgColor;
    }
    cambiarColorFondo();




const resultadoH2 = document.getElementById("game-area");
function guardarNombresDeHermanos(){
const cantidadDeHermanos = parseInt(
        prompt("¿Cuántos hermanos tienes?")
);


let contador = 0;

const listaOrdenada = document.createElement("ol");
  listaOrdenada.style.marginLeft = "40px";
  listaOrdenada.style.marginTop = "20px";

while (contador < cantidadDeHermanos){

    const nombreDeHermano = prompt("Ingresa el nombre de tu hermano");
   
    const listItem = document.createElement("li");
    listItem.textContent = nombreDeHermano;
    
    listaOrdenada.appendChild(listItem);

    contador++
}
resultadoH2.innerHTML ="";
resultadoH2.appendChild(listaOrdenada);


}

// Selección del botón y contenedor

const contenedor = document.getElementById("bloquesContenedor");

// Función para generar un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para generar los bloques
function generarBloques() {
    // Limpiar los bloques previos
    
    // Pedir al usuario el número de bloques
    const numeroDeBloques = parseInt(prompt("¿Cuántos bloques quieres generar?"));

    if (isNaN(numeroDeBloques) || numeroDeBloques <= 0) {
        alert("Por favor, introduce un número válido mayor que 0.");
        return;
    }

    // Crear los bloques y añadirlos al contenedor
    for (let i = 0; i < numeroDeBloques; i++) {
        const bloque = document.createElement("div");
        bloque.classList.add("bloque");
        bloque.style.backgroundColor = generarColorAleatorio();
        contenedor.appendChild(bloque);
    }
}


// Asociar el evento al botón
// Opciones disponibles
const opciones = ["piedra", "papel", "tijera"];
// Función para generar una elección aleatoria para la computadora
function generarEleccionComputadora() {
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}




// Función para determinar el resultado del juego

function determinarResultado(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
       return resultadoH2.textContent = "Empate";
    }

    if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra")
    ) {
        return resultadoH2.textContent = "Ganaste";
         
    }

    return resultadoH2.textContent = "Perdiste";
}

// Función principal del juego
function jugarPiedraPapelTijera() {
    const eleccionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();

    // Validar entrada del usuario
    if (!opciones.includes(eleccionUsuario)) {
        alert("Por favor, elige una opción válida: piedra, papel o tijera.");
        return;
    }

    // Generar elección para la computadora
    const eleccionComputadora = generarEleccionComputadora();

    // Determinar el resultado
    const resultado = determinarResultado(eleccionUsuario, eleccionComputadora);

    // Mostrar el resultado al usuario
    resultadoH2.textContent = `Tu elección: ${eleccionUsuario}. Elección de la computadora: ${eleccionComputadora}. Resultado: ${resultado}`;
    
}
