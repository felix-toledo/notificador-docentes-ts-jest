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
    modalidad = new Presencial("Aula 14"); // Asumiendo que Modalidad puede ser instanciado sin argumentos o ajusta según tu implementación
    mesaExamen = new MesaExamen("Cálculo", comision, "15/05/2023", "08:00", modalidad);
  });

  test('Initial State is Publicado', () => {
    expect(mesaExamen.getEstado().getNombre()).toBe('Publicado');
  });

  test('Change state to Modificado', () => {
    mesaExamen.getEstado().modificado();
    expect(mesaExamen.getEstado().getNombre()).toBe('Modificado');
    expect(mesaExamen.getEstado().mensajeEstado()).toBe('La mesa ha sido modificada.');
  });

  test('Change state to Finalizado', () => {
    mesaExamen.getEstado().finalizado();
    expect(mesaExamen.getEstado().getNombre()).toBe('Finalizado');
    expect(mesaExamen.getEstado().mensajeEstado()).toBe('La mesa ha sido finalizada.');
  });

  test('Change state to Borrado', () => {
    mesaExamen.getEstado().borrado();
    expect(mesaExamen.getEstado().getNombre()).toBe('Borrado');
    expect(mesaExamen.getEstado().mensajeEstado()).toBe('La mesa ha sido borrada.');
  });

  test('State change invokes correct behavior', () => {
    mesaExamen.getEstado().publicado();
    expect(mesaExamen.getEstado().getNombre()).toBe('Publicado');

    mesaExamen.getEstado().modificado();
    expect(mesaExamen.getEstado().getNombre()).toBe('Modificado');

    mesaExamen.getEstado().finalizado();
    expect(mesaExamen.getEstado().getNombre()).toBe('Finalizado');

    mesaExamen.getEstado().borrado();
    expect(mesaExamen.getEstado().getNombre()).toBe('Borrado');
  });
});