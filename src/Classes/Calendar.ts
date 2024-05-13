import { BaseDecorator } from "./BaseDecorator";
import Docente from "./Docente";

export class Calendar{
    public mandarContenido(contacto: Docente, contenido: string): string {
        console.log(`Creando evento de calendar en ${contacto.getCorreo()} con contenido: ${contenido}`);
        return `Creando evento de calendar en ${contacto.getCorreo()} con contenido: ${contenido}`
    }
}