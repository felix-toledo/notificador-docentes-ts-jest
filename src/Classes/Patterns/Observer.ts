import MesaExamen from '../MesaExamen';
import ISuscriptor from '../Interfaces/ISuscriptor';
import { BaseDecorator } from '../BaseDecorator';


export class Notificador {
     private mesaExamen: MesaExamen;
     private contadorDias: number;
     private suscriptor: ISuscriptor;

     constructor(mesaExamen: MesaExamen, fecha: string){
          this.mesaExamen = mesaExamen;
          const today = new Date();
          this.contadorDias = 0;
          this.suscriptor = new BaseDecorator("");
     }

     public getSuscriptor(): ISuscriptor{
          return this.suscriptor;
     }
}