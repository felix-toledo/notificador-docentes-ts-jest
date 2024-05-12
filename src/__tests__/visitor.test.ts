import { describe, expect, test } from '@jest/globals';
import Directivo from '../Classes/Directivo';
import CreadorDocenteVisitor from '../Classes/Patterns/CreadorDocenteVisitor';
import BDD from '../Classes/BaseDeDatosAngau';

describe('Visitor Pattern Test', () => {
  test('Directivo crea un docente', () => {
    const directivo = new Directivo("director@mail.com", "securePass", "Juan", "Perez", "1234567890", "43888444");
    const visitor = new CreadorDocenteVisitor("Ana", "Gomez", "ana@mail.com", "0987654321", "44555222");

    // Simulate visiting Directivo
    directivo.accept(visitor);

    // Retrieve instance of BDD to check if Docente was added
    const bdd = BDD.getInstance();
    const docente = bdd.getDocentes()[0];

    expect(docente).toBeDefined();
    expect(docente.getNombre()).toBe("Ana");
    expect(docente.getApellido()).toBe("Gomez");
    expect(docente.getCorreo()).toBe("ana@mail.com");
    expect(docente.getNumero()).toBe("0987654321");
  });
});