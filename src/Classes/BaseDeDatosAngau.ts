import Directivo from './Directivo'

export default class BDD {
     private directivos: Array<Directivo>;

     constructor(){
          this.directivos = [];
     }

     public getDirectivos(usuario: string, contrasena: string): Directivo | null {
          return this.directivos.find(d => d.getUsuario() === usuario && d.getContrasena() === contrasena) || null;
     }

     public addDirectivo(directivo: Directivo): void {
          this.directivos.push(directivo);
     }
}
 