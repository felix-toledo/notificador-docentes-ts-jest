import Docente from './Docente'
import Comision from './Comision'
import {Estado, Publicado} from './Patterns/States'
import Modalidad from './Modalidad'
import {Notificador} from './Patterns/Observer'

export default class MesaExamen{
     private nombreCatedra: string;
     private fecha: Date;
     private comision: Comision;
     private notificador: Notificador;
     private modalidad: Modalidad;
     private estado: Estado;

     constructor(nombre: string, comision: Comision, fecha: Date, hora: string, modalidad: Modalidad){
          this.nombreCatedra = nombre;
          this.fecha = fecha;
          this.comision = comision;
          this.notificador = new Notificador();
          this.modalidad = modalidad;
          this.estado = new Publicado(this);
     }
     
     public getEstado(): Estado{
          return this.estado;
     }
     
     public setEstado(estado: Estado):void {
          this.estado = estado;
     }
}