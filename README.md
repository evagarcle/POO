# Sistema de Gestión de Personas

Este código consiste en una implementación básica de un sistema de gestión de personas en JavaScript, que incluye clases para representar personas, estudiantes y profesores, con métodos para obtener detalles específicos de cada tipo de persona.

## Clases

### Persona

La clase `Persona` representa a una persona genérica con atributos como nombre, edad y género. Contiene un constructor para inicializar estos atributos y un método `obtDetalles()` para imprimir los detalles de la persona.

### Estudiante

La clase `Estudiante` extiende de la clase `Persona` e incluye atributos adicionales como curso y grupo. Además de heredar el constructor y el método `obtDetalles()` de la clase `Persona`, tiene un método adicional `registrar()` que muestra los detalles del estudiante junto con su curso y grupo.

### Profesor

La clase `Profesor` también extiende de la clase `Persona` e incluye atributos específicos como asignatura y nivel de enseñanza. Al igual que las otras clases, hereda el constructor y el método `obtDetalles()` de `Persona`, y agrega el método `asignar()` para mostrar la asignatura y el nivel del profesor.

## Uso del código

El código incluye ejemplos de cómo crear instancias de cada clase y llamar a los métodos correspondientes:

```javascript
let nuevaPersona = new Persona('Kavo', 35, 'hombre');
nuevaPersona.obtDetalles();

let nuevoEstudiante = new Estudiante('Pepe', 30, 'hombre', 'primero', 'B');
nuevoEstudiante.registrar();

let nuevoProfesor = new Profesor('Juana', 19, 'mujer', 'matemáticas', 'avanzado');
nuevoProfesor.asignar();