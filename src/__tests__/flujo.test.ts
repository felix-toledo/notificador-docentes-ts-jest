import MesaExamen from '../Classes/MesaExamen';
import Comision from '../Classes/Comision';
import Docente from '../Classes/Docente';
import { Medios } from '../Classes/Medios';
import { Publicado } from '../Classes/Patterns/States';
import { Digital, Presencial } from '../Classes/Modalidad';
import { Notificador } from '../Classes/Patterns/Observer';
import { beforeEach, describe, expect, test } from '@jest/globals';
import Usuario from '../Classes/Usuario';
import Sesion from '../Classes/Sesion';
import CreadorDocenteVisitor from '../Classes/Patterns/CreadorDocenteVisitor';
import BDD from '../Classes/BaseDeDatosAngau';

describe('TODO', () => {
     const usuario = new Usuario();
     usuario.registrarseEnBD("felix@gmail.com", "pass123", "Felix", "Toledo", "3794636393", "33222111");
     const directivo = usuario.iniciarSesion("felix@gmail.com", "pass123");

     // Create Docente visitors
    const visitorPresidente = new CreadorDocenteVisitor("Ana", "Gomez", "ana@mail.com", "0987654321", "44555222");
    const visitorVocal1 = new CreadorDocenteVisitor("Luis", "Martinez", "luis@mail.com", "1122334455", "55667788");
    const visitorVocal2 = new CreadorDocenteVisitor("Maria", "Lopez", "maria@mail.com", "2233445566", "66778899");

    // Simulate visiting Directivo
    directivo?.accept(visitorPresidente);
    directivo?.accept(visitorVocal1);
    directivo?.accept(visitorVocal2);

    // Retrieve instances of Docentes
    const bdd = BDD.getInstance();
    const presidente = bdd.getDocentes()[0];
    const vocal1 = bdd.getDocentes()[1];
    const vocal2 = bdd.getDocentes()[2];

    presidente.addMedio(Medios.WhatsApp);
    presidente.addMedio(Medios.Correo);
    vocal1.addMedio(Medios.Correo);
    vocal2.addMedio(Medios.Calendar);
     
     //Estas dos cosas las hace el directivo.    
     const comision = new Comision(presidente, vocal1, vocal2);
     const modalidad = new Digital("link.com")

    const mesaExamen = new MesaExamen("Matemáticas", comision, "15/05/2023", "09:00", modalidad);

  test('TODO', () => {

  });
});