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



/* Ejercicio 3: Sistema de Delivery (shift, pop e if)
Contexto: Un restaurante tiene pedidos listos. El cajero puede despachar el pedido más antiguo, o cancelar el último pedido que entró por un error.
Crea un arreglo: let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
Función Principal: Crea gestionarPedidos().
Captura el texto del input. El usuario debe escribir la palabra "despachar" o "cancelar".
Usa un if. Si escribió "despachar", usa .shift() para sacar la primera comida de la lista.
Usa un else if. Si escribió "cancelar", usa .pop() para eliminar la última comida de la lista.
Muestra en el textContent: "Pedidos pendientes: " seguido del arreglo.
Limpia el input.
*/

let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
function actualizarPedido(pedido) {
    if (pedido == "despachar") {
        entregas.shift()
    } else if (pedido == "cancelar") {
        entregas.pop()
    } else {
        alert("Ingrese un valor válido")
    }
    return `Pedidos pendientes: ${entregas.join(", ")}`
}
function gestionarPedido() {
    const container = document.getElementById("container3");
    const result = document.getElementById("result3");
    const input = document.getElementById("input3").value;
    let resultado = actualizarPedido(input.value.toLowerCase())
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

/*Ejercicio 4: Validador de Códigos de Descuento (for e if)
Contexto: Una tienda online revisa si el código promocional que ingresó el cliente existe en su base de datos para aplicarle una rebaja.
Crea un arreglo: let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
Función Principal: Crea verificarCodigo().
Captura el código desde el input.
Crea una variable mensaje = "Código inválido o expirado";.
Recorre el arreglo con un ciclo for.
Si el elemento actual del ciclo es igual al texto del input, cambia la variable mensaje a "¡Éxito! Código aceptado".
Fuera del ciclo, inyecta la variable mensaje en el textContent del párrafo.
Limpia el input.
*/

let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];

function buscarCodigo(codigo) {
    let mensaje = "Codigo invalido o expirado";
    for (let i = 0; i < codigosValidos.length; i++) {
        if (codigo === codigosValidos[i]) {
            mensaje = "!Exito! codigo aceptado"
            return "¡Exito! codigo aceptado";
        } else {
            mensaje = "Ingresa un codigo valido"
        }

    }
    return mensaje
}


function verificarCodigo() {
    let codigo = input.value;
    let input = document.getElementById("input4")
    let resultado = buscarCodigo(codigo);
    const container = document.getElementById("container4");
    const result = document.getElementById("result4");
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none")



}
/*Ejercicio 6: Filtro de Presupuesto (for e if)
Contexto: Una vitrina virtual tiene varios precios. El cliente ingresa cuánta plata tiene en el bolsillo, y el sistema le muestra solo los precios que le alcanza para pagar.
Crea un arreglo de precios: let vitrina = [2500, 15000, 8000, 30000, 5000];
Función Principal: Crea filtrarPrecios().
Captura el número desde el input (este será el presupuesto del cliente. Recuerda usar Number()).
Crea una variable opciones = "Te alcanza para los precios: ";
Recorre el arreglo vitrina con un for.
Dentro del ciclo, usa un if. Si el precio actual del arreglo es menor o igual (<=) a la plata que ingresó el cliente, súmalo a la variable opciones más un guion (-).
Muestra el resultado en el textContent del párrafo.
Limpia el input.
*/


function calcularCuotas(valor, cuota) {
    let registroPagos = "";
    for (let i = 1; i <= 3; i++) {
        registroPagos += `Cuota ${i} de ${cuota}: ${parseInt(valor / 3)} |`;
    }
    return registroPagos;
};
function simularCuotas() {
    const producto = document.getElementById("input5_1");
    let valorProdcuto = parseInt(producto.value);
    const cuotaInput = document.getElementById("input5_2");
    let cuota = parseInt(cuotaInput.value);
    const result = document.getElementById(result5);
    const container = document.getElementById(container5);
    let resultado = calcularCuotas(valorProdcuto, cuota)
    result.textContent = resultado;
    producto.value = "";
    cuotaInput.value = "";
    container - classList.remove("d-none")
}


/*Ejercicio 6: Filtro de Presupuesto (for e if)
Contexto: Una vitrina virtual tiene varios precios. El cliente ingresa cuánta plata tiene en el bolsillo, y el sistema le muestra solo los precios que le alcanza para pagar.
Crea un arreglo de precios: let vitrina = [2500, 15000, 8000, 30000, 5000];
Función Principal: Crea filtrarPrecios().
Captura el número desde el input (este será el presupuesto del cliente. Recuerda usar Number()).
Crea una variable opciones = "Te alcanza para los precios: ";
Recorre el arreglo vitrina con un for.
Dentro del ciclo, usa un if. Si el precio actual del arreglo es menor o igual (<=) a la plata que ingresó el cliente, súmalo a la variable opciones más un guion (-).
Muestra el resultado en el textContent del párrafo.
Limpia el input.
 */

let vitrina = [2500, 15000, 8000, 30000, 5000];
let opciones = [];
function comprobarPresupuesto(presupuesto) {
    for (let i = 0; i <= vitrina.length; i++) {
        if (presupuesto >= vitrina[i]) {
            opciones.push(vitrina[i])
        };
    };
    if (opciones == "") {
        return "No te alcanza para nada. ";
    } else {
        return `Te alcanza para los precios: ${opciones.join(" - ")}`
    }
}
function filtrarPrecios() {
    let input = document.getElementById("input6");
    const result = document.getElementById("result6");
    const container = document.getElementById(container6);
    let dinero = parseInt(input.value);
    if (isNaN(dinero)) {
        alert("Ingresa valores valido. ");
    } else {
        let resultado = comprobarPresupuesto(dinero);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none")
        opciones = [];
    }

}
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