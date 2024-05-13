// Clase abstracta BaseDecorator
import { BaseDecorator } from "./BaseDecorator";
import Docente from "./Docente";
import MesaExamen from "./MesaExamen";

export class WhatsApp{


    public mandarContenido(contacto: Docente, contenido: string): string {
        console.log(`Enviando mensaje de WhatsApp a ${contacto.getNumero()} con contenido: ${contenido}`);
        return `Enviando mensaje de WhatsApp a ${contacto.getNumero()} con contenido: ${contenido}`
    }
}