import IVisitor from "./IVisitor"


export default interface IElemento {
     accept(ivisitor: IVisitor): void;
}
 