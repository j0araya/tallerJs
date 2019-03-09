# tallerJs (Contenido)

Taller de javascript básico ([gh-pages](https://j0araya.github.io/tallerJs/)).

## Diagrama De flujo [Link](https://concepto.de/diagrama-de-flujo/)

## Variables [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_Types)


- let
- var 
- const 

## int

```javascript			
var counter = 1;
```

## string

```javascript
var title = 'Texto de lo que sea :)';
```

## boolean

```javascript
var siOnovar = true; 
```

## null

```javascript
var response = null;
```

## undefined

```javascript
var variableSinDefinir = undefined;
```

## object

```javascript
var persona = { name: 'nombre', lastname: 'apellido', id: 345 };
```

## array

```javascript
var productos = [persona, { name: 'otronombre', lastname: 'otroapellido', id: 346 }] 
```
persona es un objeto por lo que la lista tendra dos personas objetos persona.

## copia por referencia

```javascript
var persona2 = persona;
var lista2 = lista;
```

La copia por referencia crea una copia de los valores, por lo que cada modificación de alguno de los datos cambiara para ambas vriables.

## copia por valor

```javascript
var persona2 = { ... persona };  
```
Operador iterador(...) [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Sintaxis_Spread)

```javascript
var persona2 = Object.assing({}, persona);
```

## Logica [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_de_flujo_y_manejo_de_errores)

```javascript
if (condicionEsVerdadera) {
    // hace esto
} else if (estaSiEsVerdadera) {
    // sino haz esto
} else if (estaSiQueSiEsVerdadera) {
    //sino esto
} else {
    // si ningun caso es verdadero hará esto
}
```

EJ:

```javascript
var counter = 5;

if (counter === 3) { // es igual a 3?
    // hace esto
} else if (counter !== 4) { es distinto de 4? 
    // sino haz esto
} else if (counter === 8) { // es igual a 8?
    //sino esto
} else {
    // si ningun caso es verdadero hará esto // entrara acá. ningun caso anterior cumple la condición.
}
```

// Algunas condiciones falsa

```javascript
if (0) {  }
if ('') {  }
if (undefined) {  }
if (null) {  }
if (NaN) {  }
if (false) {  }
if (!true) {  }
if (!6) {  }
if (!'cadena no vacia') {  }
```

// Algunas condiciones verdaderas

```javascript
if (4) { }
if ('cadena de caracteres no vacia')  { }
if ({}) { } // objeto vacio es verdadero independiente de no tener datos (atributos)
if (true) { }
if (!false)  { }
if (!undefined) { }
if (!null) { }
if (!0) { }
```

## Switch

```javascript
switch (variableOCondicionAEvaluar) {
  case (esEsteResultado):
    // hace algo
    break;
  case (oEsEsteResultado):
    // hace algo
    break;
  case (oEsEsteResultado):
    // hace algo
    break;
  default:
    // Si no entra a ningun caso
    break;
}
```

EJ:	

```javascript
var counter = 5;

switch (counter) {
  case (1): // no es este caso
    // hace algo
    break;
  case (3): // no es este caso
    // hace algo
    break;
  case (5): // si es este caso
    // hace algo
    break;
  default:
    // Si no entra a ningun caso // no entra aca por los break;
    break;
}
```

## Ciclos [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)

## while

```javascript
while(condicionEsVerdadera) { // mientras sea verdadera la condicion;
  // hace esto
}
```

EJ:

```javascript
var counter = 0;
while(counter < 10) { // mientras sea verdadera la condicion;
  // hace esto
  counter = counter +1; // tambien se puede escribir counter += 1;
}
```

## for 

```javascript
for (valorInicial; condicionEsVerdadera; incrementoValorInicial){
  //hace algo tantas veces la condicion se cumpla
}
```

EJ:

```javascript
var persona1 = { id: 6, name: 'nombre1' }
var persona2 = { id: 7 name: 'nombre2' }
var persona3 = { id: 8, name: 'nombre3' }
var lista = [person1, persona2, { id: 9, name: 'nomber4' }, persona3]; // se puede hacer esto la lista tiene 4 objetos.

for (let index = 0; index < lista.length; index++) {
  var item = lista[index];  // se accede a la lista en la posicion index. recordar que el primer elemento de un arreglo/lista es el 0;
  // hace algo.
}
```

## Funciones [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones)

```javascript
const nombreDeLaFuncion = function(valorEntrada1, valorEntrada2, valoreEntrada3) { //puede tener la cantidad de valores de entrada que se necesite.
  //hace algo;
  return; // termina la función y retorna un valor, si no tiene valor retorna undefined.
  console.log('ola ke ase') // este codigo no se ejecuta.
}
```

EJ:

```javascript
const suma = function(valor1, valor2) {
  if (valor1 === undefined || valor2 === undefined) {
    return; // la función  si no recibe el valor1 O el valor 2 retorna.
  }
  if (typeof valor1  !== 'number' || typeof valor2 !== 'number') {
    return; // si los tipos de variables de los valores de entrada no son sumeros retorna la funcion.
  }
  return valor1 + valor2; // si ambos valores existen retorna la suma.
}
```

Arrow Function [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions)

```javascript
const nombreFuncion = (valorDeEntrada, otroValorDeEntrada) => {
  return; // lo mismo que la funcion anterior.
  console.log('ola ke ase') // este codigo no se ejecuta.
}
```

EJ: 

```javascript
const suma = (valor1, valor2) => {
  if (valor1 === undefined || valor2 === undefined) {
    return; // la función  si no recibe el valor1 O el valor 2 retorna.
  }
  if (typeof valor1  !== 'number' || typeof valor2 !== 'number') {
    return; // si los tipos de variables de los valores de entrada no son sumeros retorna la funcion.
  }
  return valor1 + valor2;
}
```


## Tabla de verdad 

Video explicativo tablas de verdad [Link](https://www.youtube.com/watch?v=XbfuubPSHWY)

Comparaciones [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Equality_comparisons_and_sameness)

Operadores logicos [Link](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_l%C3%B3gicos)

## or ||

```javascript
var lista = [];
var lista2 = [persona, persona2, persona3]

var counter = 0;
var counte2 = 10;

var mascota1 = { id: 2, name: 'chimuelo' }
var mascota2 = { id: 3, name: 'alan', lastname: 'brito' }

condicion1 || condicion2

true || true -> esto es true
false || true -> esto es true
true || false -> esto es true
false || false -> esto es false
false || false || false || false || false || true -> esto es true
```

EJ:

```javascript
lista.length || lista2.length 
0 || 3 
```
Esto es lo que evalua la linea anterior. el largo de la lista 1 que no tiene elementos(lenght va a ser 0) y el largo de la lista 2 que tiene 3 elementos. esto sera verdadero aunque recordar que el valor 0 se evalua como false
      
## and && 

```javascript
true && true = true -> esto es true
false && true -> esto es false
true && false -> esto es false
false && false -> esto es false
true && !false && true -> esto es true
true && true && true && true && true && false -> esto es false
```


