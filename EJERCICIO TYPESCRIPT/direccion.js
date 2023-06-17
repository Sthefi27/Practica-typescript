"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
var direccion = /** @class */ (function () {
    function direccion(calle, numero, piso, letra, codigopostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigopostal = codigopostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Object.defineProperty(direccion.prototype, "calle", {
        get: function () {
            return this._calle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "codigopostal", {
        get: function () {
            return this._codigopostal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        enumerable: false,
        configurable: true
    });
    return direccion;
}());
exports.direccion = direccion;
