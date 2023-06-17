export class mail {
    private _tipo:string;
    private _direccion:string;

    constructor (tipo:string, direccion:string) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
       public get tipo(): string {
        return this._tipo
    }
    public get direccion () : string {
        return this._direccion
    }


}