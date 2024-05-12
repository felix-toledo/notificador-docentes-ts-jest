import Persona from './Persona'
import IElemento from "./Interfaces/IElemento"
import IVisitor from "./Interfaces/IVisitor"
import MesaExamen from './MesaExamen'
import Comision from './Comision'
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

     public crearMesa(): void{
          /*
          const bdd = BDD.getInstance();
          bdd.addDocente(this.docente);*/

          //new MesaExamen(nombre, crearComision(), fecha, hora, crearModalidad())
     }

     public crearComision(doc1, doc2, doc3): Comision{
          //tiene q poder acceder a comison
          //con el visitor va creando deocentes
          //comision tiene q tener 3 parametros de docentes
          //new comision (doc1 doc2 doc3)
          return comision;
     }

     public crearModalidad(): Modalidad{
          return modadlidad;
     }

     public eliminarMesa(): void{
          //busca la mesa en la bdd
          //la elimina
     }

     public modificarMesa(): void{
          //dependiendo de que quiere modificar
          //se modifica
     }

     public generarReporte(): void{
          //me devuelve todos los datos de la mesa (esta en el archivo de historias de usuario)
     }
     
     accept(ivisitor: IVisitor): void{
          ivisitor.visit(this);
     }


     /*
     public crearMesa(nombre: string, doc1: Docente, doc2: Docente, doc3: Docente, fecha: Date, hora: string, tipoModalidad: string, lugar: string): MesaExamen {
        const comision = this.crearComision(doc1, doc2, doc3);
        const modalidad = this.crearModalidad(tipoModalidad, lugar);
        const mesa = new MesaExamen(nombre, comision, fecha, hora, modalidad);
        const bdd = BDD.getInstance();
        bdd.addMesaExamen(mesa);
        return mesa;
    }

    public crearComision(doc1: Docente, doc2: Docente, doc3: Docente): Comision {
        return new Comision(doc1, doc2, doc3);
    }

    public crearModalidad(tipo: string, lugar: string): Modalidad {
        if (tipo === "Digital") {
            return new Digital("Examen Digital", lugar);
        } else {
            return new Presencial("Examen Presencial", lugar);
        }
    }

    public eliminarMesa(mesa: MesaExamen): void {
        const bdd = BDD.getInstance();
        bdd.removeMesaExamen(mesa);
    }

    public modificarMesa(mesa: MesaExamen, nuevosDatos: any): void {
        // Aquí se debería implementar la lógica para modificar los datos de la mesa
        // Esto es un ejemplo genérico, depende de qué datos se quieran modificar
        mesa.update(nuevosDatos);
        const bdd = BDD.getInstance();
        bdd.updateMesaExamen(mesa);
    }

    public generarReporte(mesa: MesaExamen): string {
        // Generar un reporte con todos los datos de la mesa
        return `Reporte de la Mesa: ${mesa.getNombre()} - Modalidad: ${mesa.getModalidad().getNombre()}`;
    }
     */
}
 