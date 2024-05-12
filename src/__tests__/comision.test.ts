import { describe, expect, test } from '@jest/globals';
import Directivo from '../Classes/Directivo';
import CreadorDocenteVisitor from '../Classes/Patterns/CreadorDocenteVisitor';
import BDD from '../Classes/BaseDeDatosAngau';
import Comision from '../Classes/Comision';

describe('Comision Test with Visitor Pattern', () => {
  test('Create Comision with Directivo and Docentes', () => {
    // Create Directivo
    const directivo = new Directivo("director@mail.com", "securePass", "Juan", "Perez", "1234567890", "43888444");

    // Create Docente visitors
    const visitorPresidente = new CreadorDocenteVisitor("Ana", "Gomez", "ana@mail.com", "0987654321", "44555222");
    const visitorVocal1 = new CreadorDocenteVisitor("Luis", "Martinez", "luis@mail.com", "1122334455", "55667788");
    const visitorVocal2 = new CreadorDocenteVisitor("Maria", "Lopez", "maria@mail.com", "2233445566", "66778899");

    // Simulate visiting Directivo
    directivo.accept(visitorPresidente);
    directivo.accept(visitorVocal1);
    directivo.accept(visitorVocal2);

    // Retrieve instances of Docentes
    const bdd = BDD.getInstance();
    const presidente = bdd.getDocentes()[0];
    const vocal1 = bdd.getDocentes()[1];
    const vocal2 = bdd.getDocentes()[2];

    // Create Comision
    const comision = new Comision(presidente, vocal1, vocal2);

    // Assertions
    expect(comision.getPresidente()).toBe(presidente);
    expect(comision.getVocales()).toEqual([vocal1, vocal2]);
    expect(comision.getPresidenteConfirma()).toBe(false);
    expect(comision.getVocalesConfirman()).toEqual([false, false]);
  });
});