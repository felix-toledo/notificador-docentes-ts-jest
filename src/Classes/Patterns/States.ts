import MesaExamen from "../MesaExamen"

export abstract class Estado {

     private mesaExamen;
     private nombreEstado;
     private mensaje;

     constructor(mesaExamen: MesaExamen, nombreEstado: string, mensaje: string){
          this.mesaExamen = mesaExamen;
          this.nombreEstado = nombreEstado;
          this.mensaje = mensaje;
     }

     public getMesa(){
          return this.mesaExamen;
     }

     public modificado(): void{
          this.mesaExamen.setEstado(new Modificado(this.mesaExamen))
     }    
     
     public publicado(): void{
          this.mesaExamen.setEstado(new Publicado(this.mesaExamen))
     }
     
     public finalizado(): void{
          this.mesaExamen.setEstado(new Finalizado(this.mesaExamen))

     }

     public borrado(): void{
          this.mesaExamen.setEstado(new Borrado(this.mesaExamen))
     }

     public mensajeEstado(): string{
          return this.mensaje;
     }

     public getNombre(): string{
          return this.nombreEstado;
     }
}
 

export class Modificado extends Estado {
     constructor(mesa: MesaExamen) {
          super(mesa, "Modificado", "La mesa ha sido modificada.")
     }
     
     public modificado(): void{
          super.getMesa().setEstado(this)
     }    
 }

 export class Publicado extends Estado {
     constructor(mesa: MesaExamen) {
          super(mesa, "Publicado", "La mesa ha sido publicada.")
     }

     public publicado(): void{
          super.getMesa().setEstado(this)
     } 
}

 export class Finalizado extends Estado {
     constructor(mesa: MesaExamen) {
          super(mesa, "Finalizado", "La mesa ha sido finalizada.")
     }

     public finalizado(): void{
          super.getMesa().setEstado(this)
     } 
 }

 export class Borrado extends Estado {
     constructor(mesa: MesaExamen) {
          super(mesa, "Borrado", "La mesa ha sido borrada.")
     }

     public borrado(): void{
          super.getMesa().setEstado(this)
     } 
 }