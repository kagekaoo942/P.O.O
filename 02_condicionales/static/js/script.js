/*1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: "Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".
*/
function ingresarEdad() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad >= 18) {
        alert("Acceso permitido a la App")
    }else{
        alert("Acceso denegado: necesitas ser mayor de edad")
    }
}
/*2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push()
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".
*/
function ingresarNombre(){
    let nombre = prompt("Ingrese su nombre: ")
    let usuarios;
    if(nombre = usuarios){
        alert(usuarios.push(usuarios))
    }else{
        alert("Error: El nombre no puede estar en blanco")
    }
}