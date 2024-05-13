import Directivo from './Directivo'

export default class Sesion {
     private directivo: Directivo;
     constructor (directivo: Directivo){
          this.directivo = directivo;
     }

     public getDirectivo(){
          return this.directivo;
     }
}