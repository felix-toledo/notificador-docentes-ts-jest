import MesaExamen from '../MesaExamen';
import ISuscriptor from '../Interfaces/ISuscriptor';


export class Notificador {
     private mesaExamen: MesaExamen;
     private contadorDias: number;
     private suscriptores: Array<ISuscriptor>;

     constructor(mesaExamen: MesaExamen, fecha: Date){
          this.mesaExamen = mesaExamen;
     const today = new Date();
     const timeDiff = fecha.getTime() - today.getTime();
     this.contadorDias = Math.ceil(timeDiff / (1000 * 3600 * 24));
     this.suscriptores = [];
     }
}