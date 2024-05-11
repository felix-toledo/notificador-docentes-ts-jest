import Persona from './Persona'

export default class Directivo extends Persona {
     private usuario: string;
     private contrasena: string;

     constructor(mail: string, pass: string, name: string, surname: string, number: string){
          super(name, surname, mail, number);
          this.usuario = mail;
          this.contrasena = pass;
     }

     public getUsuario(): string {
          return this.usuario;
     }

     public getContrasena(): string {
          return this.contrasena;
     }

}
 