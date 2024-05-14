//-----------------**EJERCICIO 1**----------------------


// que son los arrays: los arrays son estructuras de datos que nos permiten almacenar múltiples valores del mismo tipo en una sola variable. Por ejemplo, un array de números enteros o un array de cadenas de texto.

// que son los objetos: los objetos en programación también pueden almacenar múltiples valores, pero a diferencia de los arrays, estos valores se almacenan como pares clave-valor. Es decir, cada valor está asociado a una clave única que nos permite acceder a él.

// Una diferencia importante es que los arrays utilizan índices numéricos para acceder a sus elementos, mientras que en los objetos utilizamos las claves para acceder a los valores asociados
   
   
// -------------------------*ejercicio 2 ***---------------------


  // propiedad lenght


 /* let numbers = [1, 2, 3, 4, 5];
 document.write(numbers.length);  */// Resultado en el navegador: 5

 // -------------funciones--------------------

    // //Funcion push():

    // let fruits = ['apple', 'banana'];
    // fruits.push('orange');
    // document.write(fruits); // Resultado en el navegador: ['apple', 'banana', 'orange'] */

    // //Funcion pop():


    // let colors = ['red', 'green', 'blue'];
    // let lastColor = colors.pop();
    // document.write(lastColor,"<br>"); // Resultado en el navegador: 'blue'
    // document.write(colors); // Resultado en el navegador: ['red', 'green'] */

    // //Funcion join():


    // let names = ['John', 'Jane', 'Tom'];
    // let joinedNames = names.join(', ');
    // document.write(joinedNames); // Resultado en el navegador: 'John, Jane, Tom' */

//    //------------** ejercicio 3*** ------------------ 

//    // Método push(): Agrega elementos al final del array


//  let numbers = [1, 2, 3, 4, 5];

// numbers.push(6);
// document.write("push(): " + numbers + "<br>"); // Resultado en el navegador: [1, 2, 3, 4, 5, 6] */

// // Método pop(): Elimina el último elemento del array y lo devuelve

//  let lastNumber = numbers.pop();
// document.write("pop(): " + lastNumber + "<br>"); // Resultado en el navegador: 6
// document.write(numbers + "<br>"); // Resultado en el navegador: [1, 2, 3, 4, 5]
 

// // Método slice(): Devuelve una copia de una parte del array.

// let slicedNumbers = numbers.slice(1, 3);
// document.write("slice(): " + slicedNumbers + "<br>"); // Resultado en el navegador: [2, 3] */

// // Método splice(): Cambia el contenido de un array eliminando elementos existentes o agregando nuevos elementos

// numbers.splice(2, 0, 10, 11);
// document.write("splice(): " + numbers + "<br>"); // Resultado en el navegador: [1, 2, 10, 11, 3, 4, 5]


// // Método reduce(): Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// document.write("reduce(): " + sum + "<br>"); // Resultado en el navegador: 36 */

// // Método indexOf(): Devuelve el primer índice en el que se encuentra un elemento dado dentro del array

// let index = numbers.indexOf(11);
// document.write("indexOf(): " + index + "<br>"); // Resultado en el navegador: 3 */

// // Método forEach(): Ejecuta una función dada una vez por cada elemento del array.

// numbers.forEach((number) => document.write(number * 2 + ", ")); // Resultado en el navegador: 2, 4, 20, 22, 6, 8, 10, */

// // Método map(): Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

// let doubledNumbers = numbers.map((number) => number * 2);
// document.write("<br>map(): " + doubledNumbers + "<br>"); // Resultado en el navegador: [2,4,20,22,6,8,10]  */

// // Método sort(): Ordena los elementos de un array localmente y devuelve el array ordenado.

// let sortedNumbers = numbers.sort((a, b) => a - b);
// document.write("sort(): " + sortedNumbers); // Resultado en el navegador: [1,2,3,4,6,8]
 


// //------* EJERCICIO 4----------------

// // Array de nombres de frutas.

// let frutas = ["Manzana", "Plátano", "Fresa", "Naranja", "Pera"];

// // Crear un elemento <ul> para la lista de frutas.

// let lista = document.createElement("ul");

// // Iterar sobre el array de frutas e imprimir cada una en un elemento <li>.

// frutas.forEach(function(fruta) {
//   let itemLista = document.createElement("li");
//   itemLista.appendChild(document.createTextNode(fruta));
//   lista.appendChild(itemLista);
// });

// // Agregar la lista al cuerpo del documento HTML.

// document.body.appendChild(lista);



// //-----------------**EJERCICIO 5*---------------------

// // Array inicial con 3 elementos.

// let miArray = ["Elemento 1", "Elemento 2", "Elemento 3"];

// // Agregar 2 elementos más al array.

// miArray.push("Elemento 4", "Elemento 5");

// // Crear un elemento <ul> para la lista de elementos.

// let lista = document.createElement("ul");

// // Iterar sobre el array e imprimir cada elemento en un elemento <li>.

// miArray.forEach(function(elemento) {
//   let itemLista = document.createElement("li");
//   itemLista.appendChild(document.createTextNode(elemento));
//   lista.appendChild(itemLista);
// });

// // Agregar la lista al cuerpo del documento HTML.

// document.body.appendChild(lista);

//--------------*EJERCICIO 6***----------

// // Arreglo dado.

// let numeros = [3, 5, 9, 10, 35, 42, 12, 22, 25];

// // Obtener el primer número.

// let primerNumero = numeros[0];

// // Obtener el último número.

// let ultimoNumero = numeros[numeros.length - 1];

// // Obtener el número del centro.

// let indiceDelCentro = Math.floor(numeros.length / 2);
// let numeroDelCentro = numeros[indiceDelCentro];

// // Crear un elemento <p> para mostrar los resultados.

// let resultado = document.createElement("p");
// resultado.textContent = `El primer número es ${primerNumero}, el último es ${ultimoNumero} y el del centro es ${numeroDelCentro}.`;

// document.body.appendChild(resultado);


// // Agregar el resultado al cuerpo del documento HTML.

// document.body.appendChild(resultado);  

// //-------------**EJERCICIO 7 ***-----------------


// // Arreglo dado
// let numeros = [3, 5, 9, 10, 35, 42, 12, 22, 25];


// let numerosPares = numeros.filter(numero => numero % 2 === 0);
// let numerosImpares = numeros.filter(numero => numero % 2 !== 0);

// let resultado = document.createElement("p");
// resultado.textContent = `Números pares: ${numerosPares.join(", ")}. Total: ${numerosPares.length}.
// Números impares: ${numerosImpares.join(", ")}. Total: ${numerosImpares.length}.`;

// document.body.appendChild(resultado);



// //------------------*EJERCICIO 8 ***------------------

// // Arreglo dado

// let elementos = ["tomate", "banano", "manzana", "pera", "cebolla", "papa", "fresas", "Ajo", "Sandía"];

// let clasificacion = {
//   frutas: [],
//   verduras: []
// };

// elementos.forEach(function(elemento, index) {
//     if (["tomate", "banano", "manzana", "pera", "fresas", "Sandía"].includes(elemento.toLowerCase())) {
//       clasificacion.frutas.push({ nombre: elemento, posicion: index });
//     } else {
//       clasificacion.verduras.push({ nombre: elemento, posicion: index });
//     }
//   });
  
//   let resultado = document.createElement("p");
//   resultado.textContent = `Frutas: ${clasificacion.frutas.map(fruta => `${fruta.nombre} (posición ${fruta.posicion})`).join(", ")}. 
//   Verduras: ${clasificacion.verduras.map(verdura => `${verdura.nombre} (posición ${verdura.posicion})`).join(", ")}.`;
  
//   document.body.appendChild(resultado);

// //--------------------*EJERCICIO 9***

// const arreglo = [29, 5, 40, 10, 35, 42, 12, 22, 25, 1, 3];


// const arregloOrdenado = arreglo.sort((a, b) => a - b);


// const listaOrdenada = document.createElement('ol');
// document.body.appendChild(listaOrdenada);


// arregloOrdenado.forEach(elemento => {
//     const itemLista = document.createElement('li');
//     itemLista.textContent = elemento;
//     listaOrdenada.appendChild(itemLista);
// }); 


// //---------------**EJERCICIO 10*-----------------

// // Arreglo original.

// const arreglo = [29, 5, 40, 10, 35, 42, 12, 22, 25, 1, 3];


// const arregloOrdenadoDescendente = arreglo.sort((a, b) => b - a);


// const listaOrdenadaDescendente = document.createElement('ol');
// document.body.appendChild(listaOrdenadaDescendente);


// arregloOrdenadoDescendente.forEach(elemento => {
//     const itemLista = document.createElement('li');
//     itemLista.textContent = elemento;
//     listaOrdenadaDescendente.appendChild(itemLista);

//   });
 


//  //------------**EJERCICIO 11*-------------------
 

// const arreglo = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];

// for (let i = arreglo.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arreglo[i], arreglo[j]] = [arreglo[j], arreglo[i]];
// }

// const listaDesordenada = document.createElement('ul');
// document.body.appendChild(listaDesordenada);

// arreglo.forEach(elemento => {
//     const itemLista = document.createElement('li');
//     itemLista.textContent = elemento;
//     listaDesordenada.appendChild(itemLista);
// });


// //--------------*EJERCICIO 12*-----------------


// function mostrarTablaMultiplicar() {
//   const arreglo1 = [3, 5, 9, 10, 35, 42, 12, 22, 25];
//   const arreglo2 = [9, 5, 33, 12, 7, 20, 22, 3, 8];

//   let sumaTotalArreglo1 = 0;
//   let sumaTotalArreglo2 = 0;

//   let tablaMultiplicar = "";

//   tablaMultiplicar += "<h2>Tabla de multiplicar:</h2>";
//   tablaMultiplicar += "<table border='1'>";
//   tablaMultiplicar += "<tr><th>A</th><th>B</th><th>Resultado</th></tr>";

//   for (let i = 0; i < arreglo1.length; i++) {
//       const suma = arreglo1[i] + arreglo2[i];
//       sumaTotalArreglo1 += arreglo1[i];
//       sumaTotalArreglo2 += arreglo2[i];

//       tablaMultiplicar += "<tr>";
//       tablaMultiplicar += <td>${arreglo1[i]}</td>;
//       tablaMultiplicar += <td>${arreglo2[i]}</td>;
//       tablaMultiplicar += <td>${suma}</td>;
//       tablaMultiplicar += "</tr>";
//   }

//   tablaMultiplicar += "<tr>";
//   tablaMultiplicar += <td colspan='2'><strong>Suma total arreglo 1:</strong></td>;
//   tablaMultiplicar += <td>${sumaTotalArreglo1}</td>;
//   tablaMultiplicar += "</tr>";
//   tablaMultiplicar += "<tr>";
//   tablaMultiplicar += <td colspan='2'><strong>Suma total arreglo 2:</strong></td>;
//   tablaMultiplicar += <td>${sumaTotalArreglo2}</td>;
//   tablaMultiplicar += "</tr>";
//   tablaMultiplicar += "</table>";

//   document.body.innerHTML = tablaMultiplicar;
// }

// mostrarTablaMultiplicar();
 