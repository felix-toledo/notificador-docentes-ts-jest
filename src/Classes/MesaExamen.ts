import Docente from './Docente'
import Comision from './Comision'
import {Estado, Publicado} from './Patterns/States'
import {Modalidad, Presencial, Digital} from './Modalidad'
import {Notificador} from './Patterns/Observer'
import BDD from './BaseDeDatosAngau'

export default class MesaExamen{
     private id: number;
     private nombreCatedra: string;
     private fecha: string;
     private hora: string;
     private comision: Comision;
     private notificador: Notificador;
     private modalidad: Modalidad;
     private estado: Estado;

     constructor(nombre: string, comision: Comision, fecha: string, hora: string, modalidad: Modalidad){
          const bdd = BDD.getInstance();
          this.id = bdd.getMesas().length + 1;
          this.nombreCatedra = nombre;
          this.fecha = fecha;
          this.hora = hora;
          this.comision = comision;
          this.notificador = new Notificador(this, fecha);
          this.modalidad = modalidad;
          this.estado = new Publicado(this);
          this.getNotificador().getSuscriptor().update(this);
     }
     
     // Getters
     public getId(): number {
          return this.id;
     }

     public getNombreCatedra(): string {
          return this.nombreCatedra;
     }

     public getFecha(): string {
          return this.fecha;
     }

     public getComision(): Comision {
          return this.comision;
     }

     public getNotificador(): Notificador {
          return this.notificador;
     }

     public getModalidad(): Modalidad {
          return this.modalidad;
     }

     public getEstado(): Estado {
          return this.estado;
     }

     public getHora():string{
          return this.hora;
     }

     // Setters
     public setId(id: number): void {
          this.id = id;
     }

     public setNombreCatedra(nombreCatedra: string): void {
          this.nombreCatedra = nombreCatedra;
     }

     public setFecha(fecha: string): void {
          this.fecha = fecha;
     }

     public setComision(comision: Comision): void {
          this.comision = comision;
     }

     public setNotificador(notificador: Notificador): void {
          this.notificador = notificador;
     }

     public setModalidad(modalidad: Modalidad): void {
          this.modalidad = modalidad;
     }

     public setHora(newHora: string){
          this.hora = newHora;
     }

  
     public setEstado(estado: Estado):void {
          this.estado = estado;
          this.getNotificador().getSuscriptor().update(this);
          //activar notificador
     }


}