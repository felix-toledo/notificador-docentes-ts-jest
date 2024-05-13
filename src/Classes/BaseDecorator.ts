import Docente from "./Docente";
import ISuscriptor from "./Interfaces/ISuscriptor";
import MesaExamen from "./MesaExamen";
import { Medios } from "./Medios";
import { WhatsApp } from "./Whatsapp";
import { Calendar } from "./Calendar";
import { Correo } from "./Correo";

// Clase abstracta BaseDecorator
export class BaseDecorator implements ISuscriptor{
    protected contenido: string;
    protected destinatario: string;

    constructor(contenido: string) {
        this.contenido = contenido;
        this.destinatario = "";
    }

    public mandarContenido(contacto: Docente, contenido: string){};

    public setContenido(mesa: MesaExamen): void {
        this.contenido = `${mesa.getEstado().mensajeEstado()}. Nombre de la catedra: ${mesa.getNombreCatedra()}. - Fecha y hora: ${mesa.getFecha()} / ${mesa.getHora()}. - Comision: ${mesa.getComision().mensajeComision()} - Modalidad: ${mesa.getModalidad().getNombre()}, Lugar: ${mesa.getModalidad().getLugar()}, Link para confirmar asistencia: www.turnodoc.com.ar/grila/id:${mesa.getId()}`
    }

    public getContenido(){
        return this.contenido;
    }

    public update(mesa: MesaExamen){
                // Primero, actualizamos el contenido con la información más reciente de la mesa de examen
        this.setContenido(mesa);

        const docentes = mesa.getComision().getVocales();
        docentes.push(mesa.getComision().getPresidente());

        docentes.forEach(docente => {
            // Obtenemos los medios preferidos del vocal
            const mediosPreferidos = docente.getMedios();

            // Verificamos si WhatsApp está entre los medios preferidos
            if (mediosPreferidos.includes(Medios.WhatsApp)) {
                // Si WhatsApp es un medio preferido, creamos una instancia de WhatsApp y enviamos el contenido
                const whatsapp = new WhatsApp();
                whatsapp.mandarContenido(docente, this.contenido);
            } if(mediosPreferidos.includes(Medios.Correo)){
                const correo = new Correo();
                correo.mandarContenido(docente, this.contenido);
            }if(mediosPreferidos.includes(Medios.Calendar)){
                const correo = new Calendar();
                correo.mandarContenido(docente, this.contenido);
            }
    });


        

    };
        

    }
