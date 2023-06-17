"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var direccion_1 = require("./direccion");
//Creamos las constantes de la primera persona
//direccion primera persona 
var direccionJose = new direccion_1.direccion("Calle Manuel de Falla", 13, 3, "B", 46015, "Valencia", "Valencia");
//mail primera persona
var mailJose = new mail_1.mail("Personal", "jose2705@gmail.com");
//telefono primera persona
var telefonoJose = new telefono_1.telefono("Móvil", 923678909);
//registro completo primera persona
var primerapersona = new persona_1.persona("José", "Barrios", 23, "23458745Y", new Date(27, 1, 2000), "Verde", "Masculino", [direccionJose], [mailJose], [telefonoJose], "Vive con su madre");
//direccion segunda persona
var direccionJuanita = new direccion_1.direccion("Calle Cieza", 3, 2, "B", 46014, "Valencia", "Valencia");
//mail segunda persona
var mailJuanita = new mail_1.mail("Personal", "juanitagarcia@gmail.com");
//telefono segunda persona
var telefonoJuanita = new telefono_1.telefono("Móvil", 671204567);
//datos completos segunda persona
var segundapersona = new persona_1.persona("Juanita", "Garcia", 40, "45620984N", new Date(20, 4, 1993), "Rosa", "Femenino", [direccionJuanita], [mailJuanita], [telefonoJuanita], "Debe mensualidad");
//dirección tercera persona 
var direccionMariana = new direccion_1.direccion("Angel Guimera", 12, 3, "C", 46016, "Valencia", "Valencia");
//telefono tercera persona
var telefonoMariana = new telefono_1.telefono("Móvil", 923467107);
//mail tercera persona
var mailMariana = new mail_1.mail("Personal", "mariana89@gmail.com");
//datos completos tercera persona
var tercerapersona = new persona_1.persona("Mariana", "Villegas", 19, "345927550Y", new Date(27, 11, 2003), "Lila", "Femenino", [direccionMariana], [mailMariana], [telefonoMariana], "Debe mensualidad");
//registros sin editar
console.log(primerapersona);
console.log(segundapersona);
console.log(tercerapersona);
var agenda = [primerapersona, segundapersona, tercerapersona];
var DNI = "123456789N";
var nuevosDatos = agenda.find(function (persona) { return persona.dni === DNI; });
if (nuevosDatos) {
    //modificamos los datos de la primera persona
    var direccionJose2 = new direccion_1.direccion("Calle El Perico", 10, 5, "E", 46006, "Valencia", "Valencia");
    var telefonoJose2 = new telefono_1.telefono("Móvil", 923507712);
    var mailJose2 = new mail_1.mail("Personal", "jose64lopez@gmail.com");
    nuevosDatos.addDirecciones(direccionJose2);
    nuevosDatos.addTelefonos(telefonoJose2);
    nuevosDatos.addMails(mailJose2);
    console.log("Datos modificados", nuevosDatos);
}
else {
    console.log("Persona no encontrada");
}
