export class telefono {
    private _tipo: string;
    private _telefono: number;

    constructor ( tipo:string, telefono: number){
        this._tipo = tipo;
        this._telefono = telefono;
    }

    public get tipo (): string {
        return this._tipo 
    }

    public get telefono () : number {
        return this._telefono
    }
}