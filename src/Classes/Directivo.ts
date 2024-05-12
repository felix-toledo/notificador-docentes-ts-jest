import Persona from './Persona'
import IElemento from "./Interfaces/IElemento"
import IVisitor from "./Interfaces/IVisitor"

export default class Directivo extends Persona implements IElemento{
     private usuario: string;
     private contrasena: string;

     constructor(mail: string, pass: string, name: string, surname: string, number: string, dni: string){
          super(name, surname, mail, number, dni);
          this.usuario = mail;
          this.contrasena = pass;
     }

     public getUsuario(): string {
          return this.usuario;
     }

     public getContrasena(): string {
          return this.contrasena;
     }

     public crearMesa(): void{

     }

     public crearComision(): void{
          
     }

     public eliminarMesa(): void{
          
     }

     public modificarMesa(): void{
          
     }

     public generarReporte(): void{
          
     }
     
     accept(ivisitor: IVisitor): void{
          ivisitor.visit(this);
     }

}
 