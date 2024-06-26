

export abstract class Modalidad{
     private nombre: string;
     private lugar: string;

     constructor(nombre: string, lugar: string){
          this.nombre = nombre;
          this.lugar = lugar;
     }

     public getLugar(){
          return this.lugar;
     }

     public getNombre(){
          return this.nombre;
     }

}


export class Digital extends Modalidad{

     constructor(lugar: string){
          super("Digital", lugar)
     }

}

export class Presencial extends Modalidad{

     constructor(lugar: string){
          super("Presencial", lugar)
     }

}


