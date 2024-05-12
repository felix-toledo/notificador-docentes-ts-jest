import Directivo from "../Directivo"


export default interface IVisitor {
     accept(directivo: Directivo): void;
}
 