import IVisitor from "../Interfaces/IVisitor"
import Directivo from "../Directivo"
import Docente from "../Docente"
import BDD from "../BaseDeDatosAngau"

export default class CreadorDocenteVisitor implements IVisitor {
     private docente: Docente;

     constructor(nombre: string, apellido: string, correo: string, numero: string, dni: string){
          this.docente = new Docente(correo, nombre, apellido, numero, dni);

     }

     public visit(directivo: Directivo): void{
          const bdd = BDD.getInstance();
          bdd.addDocente(this.docente);
          
     }

     
}