import { beforeEach, describe, expect, test } from '@jest/globals';
import MesaExamen from '../Classes/MesaExamen';
import { Modificado, Publicado, Finalizado, Borrado } from '../Classes/Patterns/States';
import Comision from '../Classes/Comision';
import {Modalidad, Presencial, Digital} from '../Classes/Modalidad'
import Docente from '../Classes/Docente';

describe('State Pattern Tests', () => {
  let mesaExamen: MesaExamen;
  let comision: Comision;
  let modalidad: Modalidad;

const doc1 =new Docente("hola@hola.com", "Juan", "Perez", "3794525252", "44555222")
const doc2 =new Docente("hola@asd.com", "Pedro", "Perez", "3794525252", "44555222")
const doc3 =new Docente("hola@asd.com", "Martin", "Perez", "3794525252", "44555222")

  beforeEach(() => {
    comision = new Comision(doc1, doc2, doc3); // Asumiendo que Comision puede ser instanciado sin argumentos o ajusta según tu implementación
    modalidad = new Presencial("Presencial", "Aula 14"); // Asumiendo que Modalidad puede ser instanciado sin argumentos o ajusta según tu implementación
    mesaExamen = new MesaExamen("Cálculo", comision, new Date(), "08:00", modalidad);
  });

  test('Initial State is Publicado', () => {
    expect(mesaExamen.getEstado().constructor.name).toBe('Publicado');
  });

  test('Change state to Modificado', () => {
    mesaExamen.setEstado(new Modificado(mesaExamen));
    expect(mesaExamen.getEstado().constructor.name).toBe('Modificado');
    expect(mesaExamen.getEstado().mensajeEstado()).toBe('La mesa ha sido modificada.');
  });

  test('Change state to Finalizado', () => {
    mesaExamen.setEstado(new Finalizado(mesaExamen));
    expect(mesaExamen.getEstado().constructor.name).toBe('Finalizado');
    expect(mesaExamen.getEstado().mensajeEstado()).toBe('La mesa ha sido finalizada.');
  });

  test('Change state to Borrado', () => {
    mesaExamen.setEstado(new Borrado(mesaExamen));
    expect(mesaExamen.getEstado().constructor.name).toBe('Borrado');
    expect(mesaExamen.getEstado().mensajeEstado()).toBe('La mesa ha sido borrada.');
  });

  test('State change invokes correct behavior', () => {
    mesaExamen.setEstado(new Publicado(mesaExamen));
    mesaExamen.getEstado().publicado();
    expect(mesaExamen.getEstado().constructor.name).toBe('Publicado');

    mesaExamen.getEstado().modificado();
    expect(mesaExamen.getEstado().constructor.name).toBe('Modificado');

    mesaExamen.getEstado().finalizado();
    expect(mesaExamen.getEstado().constructor.name).toBe('Finalizado');

    mesaExamen.getEstado().borrado();
    expect(mesaExamen.getEstado().constructor.name).toBe('Borrado');
  });
});