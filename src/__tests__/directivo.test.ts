
import {describe, expect, test} from '@jest/globals';
import Usuario from '../Classes/Usuario'


describe('Directivo se registra, inicia sesión, y crea una comisión y una mesa.', () => {
  const usuario = new Usuario();
  usuario.registrarseEnBD("felix@gmail.com", "pass123", "Felix", "Toledo", "3794636393", "33222111");
  usuario.iniciarSesion("felix@gmail.com", "pass123");
  
  test('Directivo inició sesión', () => {
    expect(usuario.usuarioIniciado()).toBe(true);
  });


  
});