import Sesion from './Sesion'
import Directivo from "./Directivo"
import BDD from './BaseDeDatosAngau'

export default class Usuario {
     private sesion: Sesion | null;
     private basedd: BDD;

     constructor() {
          this.sesion = null;
          this.basedd = BDD.getInstance();
     }
   
     public iniciarSesion(us: string, pass: string): void {
          const directivo = this.basedd.getDirectivo(us, pass);
          if (directivo) {
              this.sesion = new Sesion(directivo); 
          } else {
              this.sesion = null;
          }
     }

     public registrarseEnBD(mail: string, pass: string, name: string, surname: string, number: string, dni: string): void {
          const nuevoDirectivo = new Directivo(mail, pass, name, surname, number, dni);
          this.basedd.addDirectivo(nuevoDirectivo);
     }

     public usuarioIniciado(): boolean{
          if (this.sesion){
               return true;
          }
          return false;
     }
   }
   
