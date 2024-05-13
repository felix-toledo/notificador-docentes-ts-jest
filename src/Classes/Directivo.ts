import Persona from './Persona'
import BDD from './BaseDeDatosAngau'
import Docente from './Docente'
import IElemento from "./Interfaces/IElemento"
import IVisitor from "./Interfaces/IVisitor"
import MesaExamen from './MesaExamen'
import Comision from './Comision'
import CreadorDocenteVisitor from './Patterns/CreadorDocenteVisitor'
import {Modalidad, Digital, Presencial} from './Modalidad'

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

     public crearMesa(nombre: string, doc1: Docente, doc2: Docente, doc3: Docente, fecha: string, hora: string, tipoModalidad: string, lugar: string): void {
          // Crear una nueva MesaExamen
          const mesa = new MesaExamen(nombre, this.crearComision(doc1, doc2, doc3), fecha, hora, this.crearModalidad(tipoModalidad, lugar));
      
          // Obtener la instancia de la base de datos
          const bdd = BDD.getInstance();
      
          // Agregar la nueva MesaExamen a la base de datos
          bdd.addMesa(mesa);
      }
      
      

      public crearComision(doc1: Docente, doc2: Docente, doc3: Docente): Comision {
        const comision = this.crearComision(doc1, doc2, doc3);          
          return comision;
      }
      
      

      public crearModalidad(tipo: string, lugar: string): Modalidad {
          let modalidad: Modalidad;
          if (tipo === "Digital") {
              modalidad = new Digital(lugar);
          } else if (tipo === "Presencial") {
              modalidad = new Presencial(lugar);
          } else {
              throw new Error("Tipo de modalidad no soportado");
          }
          return modalidad;
      }
      

     public eliminarMesa(id: number): void {
          // Obtener la instancia de la base de datos
          const bdd = BDD.getInstance();
          const mesaEncontrada = bdd.getMesa(id);
          if (mesaEncontrada) {
            mesaEncontrada.getEstado().borrado();
            bdd.removeMesa(id);
        }            
      }
      
      

      public modificarMesa(mesa: MesaExamen): void {
          // Obtener la instancia de la base de datos
          const bdd = BDD.getInstance();
      
          // Buscar la mesa en la base de datos
          var mesaEncontrada = bdd.getMesa(mesa.getId());
      
          // Si la mesa existe en la base de datos, modificar su estado 
          if (mesaEncontrada) {
              bdd.removeMesa(mesaEncontrada.getId());
              mesa.getEstado().modificado();
              bdd.addMesa(mesa);
          }
      }
      

     public generarReporte(): void{
          //me devuelve todos los datos de la mesa (esta en el archivo de historias de usuario)
     }
     
     accept(ivisitor: IVisitor): void{
          ivisitor.visit(this);
     }

}
 