import Persona from './Persona'
import { Medios } from './Medios'

export default class Docente extends Persona {
     private mediosPreferidos: Array<Medios>;

     constructor(mail: string, name: string, surname: string, number: string, dni: string){
          super(name, surname, mail, number, dni);
          this.mediosPreferidos = [];
     }

     public addMedio(medio: Medios): void{
          this.mediosPreferidos.push(medio);
     }

     public getMedios(): Array<Medios>{
          return this.mediosPreferidos;
     }

     public getNombreCompleto(){
          return `${this.nombre} ${this.apellido}`
     }

     // Acá no sé si agregar las bandejas de cada medio ya que técnicamente es una API, entonces en ese caso lo unico que haría es mostrar
     // con la API que mandé tal cosa a tal contacto.
}