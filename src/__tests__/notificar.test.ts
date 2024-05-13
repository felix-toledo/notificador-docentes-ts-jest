import MesaExamen from '../Classes/MesaExamen';
import Comision from '../Classes/Comision';
import Docente from '../Classes/Docente';
import { Medios } from '../Classes/Medios';
import { Publicado } from '../Classes/Patterns/States';
import { Presencial } from '../Classes/Modalidad';
import { Notificador } from '../Classes/Patterns/Observer';
import { beforeEach, describe, expect, test } from '@jest/globals';

describe('MesaExamen State Update Notification Test', () => {
  test('should notify all docentes in the comision with their preferred medios', () => {
    // Setup
    const presidente = new Docente("presidente@mail.com", "Ana", "Gomez", "1234567890", "44555222");
    presidente.addMedio(Medios.Correo);
    const vocal1 = new Docente("vocal1@mail.com", "Luis", "Martinez", "0987654321", "55667788");
    vocal1.addMedio(Medios.WhatsApp);
    const vocal2 = new Docente("vocal2@mail.com", "Maria", "Lopez", "1122334455", "66778899");
    vocal2.addMedio(Medios.Calendar);

    const comision = new Comision(presidente, vocal1, vocal2);
    
    //ignorar en diagrama
    const fechaExamen = new Date();

    const modalidad = new Presencial("Aula 101");
    const mesaExamen = new MesaExamen("Matemáticas", comision, "15/05/2023", "09:00", modalidad);

    mesaExamen.getEstado().modificado();
  });
});