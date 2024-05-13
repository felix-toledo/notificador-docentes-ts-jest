// Clase Correo que hereda de BaseDecorator
import { BaseDecorator } from "./BaseDecorator";
import Docente from "./Docente";

export class Correo{
    public mandarContenido(contacto: Docente, contenido: string): string {
        console.log(`Enviando Correo a ${contacto.getCorreo()} con contenido: ${contenido}`);
        return `Enviando Correo a ${contacto.getCorreo()} con contenido: ${contenido}`
    }
}