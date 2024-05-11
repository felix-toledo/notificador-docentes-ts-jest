export default abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected correo: string;
    protected numero: string;

    constructor(nombre: string, apellido: string, correo: string, numero: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.numero = numero;
    }
}
