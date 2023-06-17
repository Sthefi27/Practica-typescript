"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = void 0;
var telefono = /** @class */ (function () {
    function telefono(tipo, telefono) {
        this._tipo = tipo;
        this._telefono = telefono;
    }
    Object.defineProperty(telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(telefono.prototype, "telefono", {
        get: function () {
            return this._telefono;
        },
        enumerable: false,
        configurable: true
    });
    return telefono;
}());
exports.telefono = telefono;
