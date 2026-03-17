// input = parseInt(input); --> trasformar input en caso de que sea numerico

/*Ejercicio 1: Lista de Asistencia (push)
Contexto: Eres el profesor y estás pasando la lista. Cada alumno que dice "presente" debe ser anotado al final del registro.
Crea un arreglo vacío: let asistencia = [];
Función Principal: Crea registrarAlumno(). (Esta va en el onclick del botón).
Captura el nombre escrito en el input.
Usa .push() para meter a ese alumno al final del arreglo asistencia.
Modifica el textContent del párrafo para mostrar: "Alumnos presentes: " seguido del arreglo.
Limpia el input vaciando su .value.
 */
function registrarAlumno() {
    let asistencias =[];
    const input = document.getElementById("input1").value;
    
}