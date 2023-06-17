import { persona } from "./persona";
import { mail } from "./mail";
import { telefono } from "./telefono";
import { direccion } from "./direccion";

//Creamos las constantes de la primera persona

//direccion primera persona 

const direccionJose = new direccion (
    "Calle Manuel de Falla",
    13,
    3,
    "B",
    46015,
    "Valencia",
    "Valencia"
)
//mail primera persona
const mailJose = new mail (
    "Personal",
    "jose2705@gmail.com"
)
//telefono primera persona
const telefonoJose = new telefono (
    "Móvil",
    923678909
)
//registro completo primera persona
const primerapersona = new persona (
    "José",
    "Barrios",
    23,
    "23458745Y",
    new Date(27,1,2000),
    "Verde",
    "Masculino",
    [direccionJose],
    [mailJose],
    [telefonoJose],
    "Vive con su madre"
);
//direccion segunda persona
const direccionJuanita = new direccion (
    "Calle Cieza",
    3,
    2,
    "B",
    46014,
    "Valencia",
    "Valencia"
)

//mail segunda persona
const mailJuanita = new mail (
    "Personal",
    "juanitagarcia@gmail.com"
)
//telefono segunda persona
const telefonoJuanita = new telefono (
    "Móvil",
    671204567
)
//datos completos segunda persona
const segundapersona = new persona (
    "Juanita",
    "Garcia",
    40,
    "45620984N",
    new Date (20,4,1993),
    "Rosa",
    "Femenino",
    [direccionJuanita],
    [mailJuanita],
    [telefonoJuanita],
    "Debe mensualidad"
);

//dirección tercera persona 
const direccionMariana = new direccion (
    "Angel Guimera",
    12,
    3,
    "C",
    46016,
    "Valencia",
    "Valencia"
)
//telefono tercera persona
const telefonoMariana = new telefono (
    "Móvil",
    923467107
)
//mail tercera persona
const mailMariana = new mail (
    "Personal",
    "mariana89@gmail.com"
)
//datos completos tercera persona
const tercerapersona = new persona (
    "Mariana",
    "Villegas",
    19,
    "345927550Y",
    new Date (27,11,2003),
    "Lila",
    "Femenino",
    [direccionMariana],
    [mailMariana],
    [telefonoMariana],
    "Debe mensualidad"
);
//registros sin editar
console.log(primerapersona);
console.log(segundapersona);
console.log(tercerapersona);

const agenda: persona[] = [primerapersona, segundapersona,tercerapersona];
const DNI = "123456789N";
const nuevosDatos= agenda.find(persona => persona.dni === DNI);

if (nuevosDatos) {

//modificamos los datos de la primera persona

const direccionJose2 = new direccion(
    "Calle El Perico",
    10,
    5,
    "E",
    46006,
    "Valencia",
    "Valencia"
);
const telefonoJose2 = new telefono (
    "Móvil",
    923507712
);
const mailJose2 = new mail (
    "Personal",
    "jose64lopez@gmail.com"
);
nuevosDatos.addDirecciones(direccionJose2);
nuevosDatos.addTelefonos(telefonoJose2);
nuevosDatos.addMails(mailJose2);

console.log ("Datos modificados", nuevosDatos);
} 
else {
    console.log ("Persona no encontrada");

}

