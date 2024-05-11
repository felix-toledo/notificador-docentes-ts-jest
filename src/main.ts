class Personita {
     private nombre: string;
     private edad: number;
   
     constructor(nombre: string, edad: number) {
       this.nombre = nombre;
       this.edad = edad;
     }
   
     public saludar(): void {
       console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
     }
   }
   
   // Crear una instancia de la clase Persona
   const persona1 = new Personita("Juan", 30);
   persona1.saludar(); // Imprimirá "Hola, mi nombre es Juan y tengo 30 años."