"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
var persona = /** @class */ (function () {
    function persona(nombre, apellido, edad, dni, cumpleaños, colorfav, sexo, direcciones, mails, telefono, notas) {
        this._direcciones = [];
        this._mails = [];
        this._telefono = [];
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorfav = colorfav;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefono = telefono;
        this._notas = notas;
    }
    persona.dni = function (DNI) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(persona.prototype, "nombre", {
        //getters y setters 
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (apellido) {
            this._apellido = apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (dni) {
            this._dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "cumplea\u00F1os", {
        get: function () {
            return this._cumpleaños;
        },
        set: function (cumpleaños) {
            this._cumpleaños = cumpleaños;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "colorfav", {
        get: function () {
            return this._colorfav;
        },
        set: function (colorfav) {
            this._colorfav = colorfav;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        set: function (direcciones) {
            this._direcciones = direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (mails) {
            this._mails = mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "telefono", {
        get: function () {
            return this._telefono;
        },
        set: function (telefono) {
            this._telefono = telefono;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (notas) {
            this._notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    // Para obtener dirreciones, telefonos y correos 
    persona.prototype.addDirecciones = function (direcciones) {
        this._direcciones.push(direcciones);
    };
    persona.prototype.addTelefonos = function (telefono) {
        this._telefono.push(telefono);
    };
    persona.prototype.addMails = function (mails) {
        this._mails.push(mails);
    };
    return persona;
}());
exports.persona = persona;
