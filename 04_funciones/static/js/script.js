/*Ejercicio 1: Lista de Asistencia (push)
Contexto: Eres el profesor y estás pasando la lista. Cada alumno que dice "presente" debe ser anotado al final del registro.
Crea un arreglo vacío: let asistencia = [];
Función Principal: Crea registrarAlumno(). (Esta va en el onclick del botón).
Captura el nombre escrito en el input.
Usa .push() para meter a ese alumno al final del arreglo asistencia.
Modifica el textContent del párrafo para mostrar: "Alumnos presentes: " seguido del arreglo.
Limpia el input vaciando su .value.
 */
let asistencia = [];
function agregarLista(nombre) {
    asistencia.push(nombre)
    return asistencia.join(", ")
}

function registrarAlumno() {
    const container = document.getElementById("container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");
    // input = parseInt(input); --> trasformar input en caso de que sea numerico.
    let nombre = input.value;
    let resultado = agregarLista(nombre); // llamado a la funcion con envio de parametros
    result.textContent = resultado;
    input.value = "";
    // hace aparecer el resultado en una caja verde.
    container.classList.remove("d-none");
};
/* Ejercicio 2: Fila de Urgencias Médicas (unshift e if)
Contexto: En un hospital, los pacientes graves no van al final de la fila, pasan directamente al primer lugar de atención.
Crea un arreglo: let pacientes = ["Carlos", "María", "Diego"];
Función Principal: Crea ingresarUrgencia().
Captura el nombre del paciente desde el input.
Usa un if para revisar si el input NO está vacío (!== "").
Si escribieron un nombre, usa .unshift() para agregarlo al inicio del arreglo */

let pacientes = ["Carlos", "María", "Diego"];
function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ")
};
// esta funcion se activara al momento que el boton se presione
function ingresarUrgencia() {
    // los tres const estan seleccionando desde javascript al html
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    // valida su el inout esta vacio.
    if (input.value !== "") {
        // guarda el valor del input
        let nombre = input.value;
        // resultado va a guardar el valor de nombre, envinadolo a la primera funcion
        let resultado = agregarUrgencia(nombre);

        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("El nombre no puede quedar vacío.")
    };

};
/*
Ejemplo:
function sumar(a, b) {
    return a + b;
}
function sunarNumeros() {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    // variable que estaran guarda las sumas
    let resultado = sumar(num1, num2);
 document.getElementById("contenedor").textContent = resultado;
}
 sumar(2,5);
*/