"use strict";
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
// Crear una instancia de la clase Persona
const persona1 = new Persona("Juan", 30);
persona1.saludar(); // Imprimirá "Hola, mi nombre es Juan y tengo 30 años."
