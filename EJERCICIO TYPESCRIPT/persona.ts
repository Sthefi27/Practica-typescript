import { direccion } from "./direccion";
import { mail } from "./mail";
import { telefono } from "./telefono";
export class persona {
    static dni(DNI: string): unknown {
        throw new Error("Method not implemented.");
    }

    private _nombre : string;
    private _apellido : string;
    private _edad : number;
    private _dni :string;
    private _cumpleaños: Date;
    private _colorfav : string;
    private _sexo : string ;
    private _direcciones : direccion [] = [];
    private _mails :mail [] = [];
    private _telefono : telefono [] = [];
    private _notas : string;

    constructor (
        nombre:string,
        apellido :string,
        edad : number,
        dni : string,
        cumpleaños : Date,
        colorfav : string,
        sexo : string,
        direcciones : direccion [],
        mails : mail[],
        telefono : telefono[],
        notas : string
        ) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._edad = edad;
            this._dni = dni;
            this._cumpleaños = cumpleaños ;
            this._colorfav = colorfav;
            this._sexo = sexo
            this._direcciones = direcciones;
            this._mails = mails;
            this._telefono = telefono ;
            this._notas = notas;
    }
    //getters y setters 
    public get nombre (): string {
        return this._nombre
    }
    public set nombre (nombre:string) {
        this._nombre = nombre
    }
    public get apellido () : string {
        return this._apellido
    }
    public set apellido(apellido: string) {
        this._apellido = apellido
    }
    public get edad () :number{
        return this._edad
    }
    public set edad (edad : number){
        this._edad = edad
    }
    public get dni () : string {
        return this._dni
    }
    public set dni (dni:string) {
        this._dni = dni
    }
    public get cumpleaños(): Date {
        return this._cumpleaños
    }
    public set cumpleaños (cumpleaños:Date) {
        this._cumpleaños = cumpleaños
    }
    public get colorfav (): string {
        return this._colorfav
    }
    public set colorfav (colorfav:string) {
        this._colorfav = colorfav
    }
    public get sexo () : string {
        return this._sexo
    }
    public set sexo (sexo: string) {
        this._sexo = sexo
    }
    public get direcciones (): direccion [] {
        return this._direcciones
    }
    public set direcciones (direcciones : direccion[]) {
        this._direcciones = direcciones
    }
    public get mails () : mail[]{
        return this._mails
    }
    public set mails (mails : mail[]) {
        this._mails = mails
    }
    public get telefono (): telefono[] {
        return this._telefono
    }
    public set telefono (telefono:telefono[]) {
        this._telefono = telefono
    }
    public get notas (): string {
        return this._notas
    }
    public set notas (notas: string) {
        this._notas = notas
    }

    // Para obtener dirreciones, telefonos y correos 

    addDirecciones (direcciones: direccion): void {
        this._direcciones.push (direcciones) 
    }
    addTelefonos (telefono : telefono) : void {
        this._telefono.push (telefono)
    }
    addMails (mails : mail): void {
        this._mails.push (mails)
    }

    

     
    

   




}