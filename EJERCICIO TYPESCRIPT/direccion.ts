export class direccion {
    private _calle:string;
    private _numero:number;
    private _piso:number;
    private _letra:string; 
    private _codigopostal:number;
    private _poblacion:string;
    private _provincia:string;
 

    constructor( calle:string, numero:number, piso:number, letra:string, codigopostal:number, poblacion:string, provincia:string){
       
        

            this._calle=calle;
            this._numero=numero;
            this._piso= piso;
            this._letra= letra;
            this._codigopostal= codigopostal;
            this._poblacion= poblacion;
            this._provincia= provincia;
    }
        public get calle() :string {
        return this._calle
    }
        public get numero(): number {
            return this._numero
    }
        public get piso(): number {
            return this._piso
    }
        public get letra():string {
            return this._letra
    }
        public get codigopostal(): number {
            return this._codigopostal
    }
        public get poblacion () :string {
            return this._poblacion
    }
        public get provincia(): string {
            return this._provincia
    }
    
        
}
