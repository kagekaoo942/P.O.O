/*1. El Contador en Pantalla
Selecciona el párrafo con el id pantalla.
Crea un ciclo for que vaya del 1 al 10.
En cada vuelta del ciclo, agrega (concatena con +=) el número actual seguido de un guion (ej: "1 - 2 - 3 - ") al párrafo.
 */
function contadorPantalla() {
    let numeros = [];
    const container = document.getElementById('resultadoContainer');
    const resultado = document.getElementById('result1');
    for (let i = 0; i <= 10; i++) {
        // inserta los numeros del contador de i que incrementa en numero
        numeros.push(i);
    }
    resultado.textContent = `Contando: ${numeros.join(" - ")}`;
    container.classList.remove('d-none');
}

/*2. Lista de Asistencia Automática
Tienes la siguiente lista de estudiantes: let curso = ["Ana", "Diego", "Sofía", "Matias"];
Selecciona el párrafo pantalla y límpialo primero asignándole un texto vacío ("").
Usa un ciclo for para recorrer el arreglo. En cada iteración, agrega el nombre del estudiante al párrafo, separándolos por una coma y un espacio.
 */
function asistenciaAutomatica() {
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    const container = document.getElementById('resultadoContainer2');
    const resultado = document.getElementById('result2');
    resultado.textContent = ""; // limpiar contenedor
    for (let i = 0; i < curso.length; i++) {
        resultado.textContent += `${curso[i]}, `
    }
    container.classList.remove('d-none')
}
/*3. Buscador de Aprobados (Escala 1 a 7)
Tienes una lista con las notas finales de un curso: let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
Crea una variable contadorAprobados que inicie en 0.
Recorre el arreglo con un for. Si la nota es 4.0 o superior, suma 1 al contador.
Al terminar el ciclo, muestra en el párrafo pantalla: "Total de alumnos aprobados: [número]".
 */

function buscarAprobados() {
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    let contadorAprobados = 0;
    const container = document.getElementById('resultadoContainer3');
    const resultado = document.getElementById('result3');
    for (let i = 0; i > notas.length; i++) {
        if (notas[i] >= 4.0) {
            contadorAprobados++
        }
    }
    resultado.textContent = "Total de alumnos aprobados: " + contadorAprobados
    container.classList.remove('d-none');
}

/*4. El Filtro de Inventario
Una tienda quiere mostrar solo los productos que están disponibles.
let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
Recorre la lista con un ciclo for.
Si el producto es diferente de "Agotado" (!==), agrégalo al texto del párrafo pantalla. Si dice "Agotado", sáltalo. */
function controlStock() {
    let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
    const container = document.getElementById('resultadoContainer4'); // Eleccion elemento html
    const resultado = document.getElementById('result4');
    let disponibles = [];
    resultado.textContent = "";
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] !== "Agotado") {
            disponibles.push(productos[i]);
        }
    }
    resultado.textContent = `Productos disponibles: ${disponibles.join(" - ")}`
    container.classList.remove(`d-none`)
}
/*5. Sumando la Colecta
Durante una actividad escolar se recolectaron distintos montos en dinero: let aportes = [1500, 2000, 500, 3000, 1000];
Crea una variable totalRecaudado que inicie en 0.
Usa un ciclo for para sumar cada uno de los aportes a la variable total.
Al finalizar el ciclo, escribe en el párrafo: "La colecta reunió un total de: $[total]".
*/
function sumandoColecta() {
    let aportes = [1500, 2000, 500, 3000, 1000];
    let totalRecaudado = 0;
    const container = document.getElementById('resultadoContainer5'); // Eleccion elemento html
    const resultado = document.getElementById('result5');

    for (let i = 0; i < aportes.length; i++) {
        totalRecaudado += aportes[i];
    }
    resultado.textContent = `Colecta reunio un total de: ${[totalRecaudado]}`
    container.classList.remove(`d-none`)
}
/*6. Formateador de Nombres VIP
Tienes una lista de usuarios: let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
Queremos mostrarlos en el HTML, pero destacando a algunos.
Recorre el arreglo. Si el índice actual (i) es par (puedes usar i % 2 === 0), agrega la palabra " [VIP]" al lado de su nombre y muéstralo en el párrafo. Si es impar, muéstralo normal.
 */
function FormateadorNombre() {
    let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
    let result = [];
    const container = document.getElementById('resultadoContainer6'); // Eleccion elemento html
    const resultado = document.getElementById('result6');
    for (let i = 0; i < asistentes.length; i++) {
        if (i % 2 === 0) {
            result.push(`${asistentes[i]} [VIP]`)
        } else {
            result.push(`${asistentes[i]} `)
        }

    }
    resultado.textContent = result.join(" - ")
    container.classList.remove(`d-none`)
}

/*7. El Buscador de Stock Específico
Tienes un inventario: let bodega = ["Lápiz", "Cuaderno", "Goma", "Cuaderno", "Regla", "Cuaderno"];
Crea una variable articuloBuscado = "Cuaderno" y una variable vecesEncontrado = 0.
Recorre la bodega con un for. Cada vez que el elemento de la lista sea igual al articuloBuscado, aumenta tu contador.
Al final, inyecta en el párrafo: "El artículo [articuloBuscado] se encuentra [veces] veces en la bodega".
*/
function BuscarStock() {
    let bodega = ["Lápiz", "Cuaderno", "Goma", "Cuaderno", "Regla", "Cuaderno"];
    let articuloBuscado = prompt("Ingrese el articulo que busca: ");
    let vecesEncontrado = 0;
    const container = document.getElementById('resultadoContainer7'); // Eleccion elemento html
    const resultado = document.getElementById('result7');
    for (let i = 0; i < bodega.length; i++) {
        if (articuloBuscado == bodega[i]) {
            vecesEncontrado++
        }
    }
    resultado.textContent = `El artículo ${articuloBuscado} se encuentra ${vecesEncontrado} veces en la bodega`
    container.classList.remove(`d-none`)
}

/*8. Generador de Párrafos de Advertencia
Tienes una lista de temperaturas registradas en una sala de servidores: let temperaturas = [22, 24, 28, 35, 21, 38];
Queremos mostrar alertas solo para las temperaturas peligrosas.
Usa .innerHTML en lugar de .textContent en tu párrafo.
Recorre el arreglo. Si la temperatura es mayor a 30, inyecta en el párrafo: "¡ALERTA! Temperatura crítica de " + temperatura + " grados.<br>".
(Nota: el <br> hará que cada alerta aparezca en una nueva línea en la pantalla).
 */
function generarParrafos() {
    let temperaturas = [22, 24, 28, 35, 21, 38];

    const container = document.getElementById('resultadoContainer8'); // Eleccion elemento html
    const result = document.getElementById('result8');

    for (i = 0; i > temperaturas.length; i++) {
        if (temperaturas[i] >= 30 && temperaturas[i] < 50) {
            result.innerHTML += `<p class="text-danger">¡ALERTA! Temperatura crítica de "+ ${temperaturas[i]} grados.</p><br>`;
        }
        container.classList.remove(`d-none`)
    }
}
