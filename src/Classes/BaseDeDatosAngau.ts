import Directivo from './Directivo';
import Docente from './Docente';
import MesaExamen from './MesaExamen';

export default class BDD {
    private static instance: BDD;
    private directivos: Array<Directivo>;
    private docentes: Array<Docente>;
    private mesas: Array<MesaExamen>;

    private constructor() {
        this.directivos = [];
        this.docentes = [];
        this.mesas = [];
    }

    public static getInstance(): BDD {
        if (!BDD.instance) {
            BDD.instance = new BDD();
        }
        return BDD.instance;
    }

    public getDirectivo(usuario: string, contrasena: string): Directivo | null {
        return this.directivos.find(d => d.getUsuario() === usuario && d.getContrasena() === contrasena) || null;
    }

    public addDirectivo(directivo: Directivo): void {
        this.directivos.push(directivo);
    }

    public addDocente(docente: Docente): void {
        this.docentes.push(docente);
    }
    
    public getDocentes(): Array<Docente> {
        return this.docentes;
    }

    public getDocente(){
    
    }
    
    // Añadir MesaExamen a la base de datos
public addMesa(mesa: MesaExamen): void {
    this.mesas.push(mesa);
}

public getMesas(): Array<MesaExamen>{
    return this.mesas;
}

// Obtener MesaExamen de la base de datos
public getMesa(id: number): MesaExamen {
    return this.mesas.find(m => m.getId() === id) ;
}

// Eliminar MesaExamen de la base de datos
public removeMesa(id: number): void {
    this.mesas = this.mesas.filter(m => m.getId() !== id);
}


    //addMesa
    //getMesa
}