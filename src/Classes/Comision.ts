import Docente from './Docente'
import { Medios } from './Medios'

export default class Comision{
     private presidente: Docente;
     private vocales: Array<Docente>;
     private presidenteConfirma: boolean;
     private vocalesConfirman: Array<boolean>;

     constructor(pdte: Docente, voc1: Docente, voc2: Docente){
          this.presidente = pdte;
          this.vocales = [voc1, voc2];
          this.presidenteConfirma = false;
          this.vocalesConfirman = [false, false];
     }

     public mensajeComision(): string{
     return `Presidente: ${this.presidente.getNombreCompleto()} - Vocales: ${this.vocales.map(vocal => vocal.getNombreCompleto()).join(', ')}`;
     }

     // Getters
     public getPresidente(): Docente {
          return this.presidente;
      }
 
      public getVocales(): Array<Docente> {
          return this.vocales;
      }
 
      public getPresidenteConfirma(): boolean {
          return this.presidenteConfirma;
      }
 
      public getVocalesConfirman(): Array<boolean> {
          return this.vocalesConfirman;
      }
 
      // Setters
      public setPresidente(presidente: Docente): void {
          this.presidente = presidente;
      }
 
      public setVocales(vocales: Array<Docente>): void {
          this.vocales = vocales;
      }
 
      public confirmarAsis(docente: Docente): void {
          if (docente = this.presidente){
               this.presidenteConfirma = true;
          } else{
               this.vocales.forEach((vocal, index) => {
                    if (vocal === docente) {
                        this.vocalesConfirman[index] = true;
                    }
                });
          }
      }

}