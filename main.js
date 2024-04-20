


class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  
  obtDetalles() {
    console.log(`NOMBRE: ${this.nombre}, EDAD: ${this.edad} GÉNERO: ${this.genero}`) 
  }
}

let nuevaPersona = new Persona('Kavo', 35, 'hombre')
nuevaPersona.obtDetalles()




class Estudiante extends Persona {
  constructor (nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero) 
    this.curso = curso;
    this.grupo = grupo;
  }

  registrar(){
    this.obtDetalles()
    console.log('CURSO: ' + this.curso + ', GRUPO: ' + this.grupo)
  }
}

let nuevoEstudiante = new Estudiante ('Pepe', 30, 'hombre', 'primero', 'B')
nuevoEstudiante.registrar()



class Profesor extends Persona {
 constructor(nombre, edad, genero, asignatura, nivel) {
  super(nombre, edad, genero)
  this.asignatura = asignatura;
  this.nivel = nivel;
 }
 asignar(){
  this.obtDetalles()
  console.log(this.asignatura + ' ' + this.nivel) 
 }
}
let nuevoProfesor = new Profesor('Juana', 19, 'mujer', 'matemáticas', 'avanzado')
nuevoProfesor.asignar()