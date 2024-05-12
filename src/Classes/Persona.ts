export default abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected correo: string;
    protected numero: string;
    protected dni: string;

    constructor(nombre: string, apellido: string, correo: string, numero: string, dni: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.numero = numero;
        this.dni = dni;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getCorreo(): string {
        return this.correo;
    }

    public getDni(): string {
        return this.dni;
    }

    public setCorreo(correo: string): void {
        this.correo = correo;
    }

    public getNumero(): string {
        return this.numero;
    }

    public setNumero(numero: string): void {
        this.numero = numero;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }
}
