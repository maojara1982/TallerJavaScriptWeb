
/* a y b son los parámetros de entrada.
  La función debe devolver la suma de los parámetros de entrada
  Debes generar el código para que la función haga lo solicitado.
 */
const suma = (a, b) =>  a + b;
console.log(suma(20, 77)); 

/* Devuelve "true" si "x" e "y" son iguales
De lo contrario, devuelve "false"
Debes generar el código para que la función haga lo solicitado.*/
const sonIguales = (x, y) =>  x === y;  
  console.log(sonIguales(6, 9)); 
  console.log(sonIguales(8, 8)); 

  /* Devuelve "true" si las dos strings tienen la misma longitud 
  De lo contrario, devuelve "false"*/
const tienenMismaLongitud = (str1, str2) => str1.length === str2.length;
console.log(tienenMismaLongitud("Jose", "alto")); 
console.log(tienenMismaLongitud("loco", "maniatico")); 

/*
 la función recibe como parámetro de entrada un número entero.
 Devuelve como resultado una cadena de texto que indica si el
 número es positivo o negativo.
 Si el número es positivo, devolver ---> "Es positivo"
 Si el número es negativo, devolver ---> "Es negativo"
 Si el número es 0, devuelve false */
const esPositivo = (numero) => {
    if (numero > 0) { return "Es positivo";
    } else if (numero < 0) { return "Es negativo";
    } else {return false;
    }
  };
  console.log(esPositivo(8));
  console.log(esPositivo(-2));
  console.log(esPositivo (0));

/*La función recibe un color. Devolver el string correspondiente:
En caso que el color recibido sea "blue", devuelve --> "This is blue"
En caso que el color recibido sea "red", devuelve --> "This is red"
En caso que el color recibido sea "green", devuelve --> "This is green"
En caso que el color recibido sea "orange", devuelve --> "This is orange"
Caso default: devuelve --> "Color not found"
Usar el statement Switch.*/
const colors = (color) => {
    switch (color) {
      case "Blue":
        return "This is Blue";
      case "Red":
        return "This is Red";
      case "Green":
        return "This is Green";
      case "Orange":
        return "This is Orange";
      default:
        return "Color not found";
    }
  };
  console.log(colors("Blue")); 
  console.log(colors("Red")); 
  console.log(colors("Green")); 
  console.log(colors("Orange")); 
  console.log(colors("Black")); 

/*Si "numero" es divisible entre 3, devuelve "fizz"
Si "numero" es divisible entre 5, devuelve "buzz"
Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
De lo contrario, devuelve el numero*/
const fizzBuzz = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return "fizzbuzz";
    } else if (numero % 3 === 0) {
      return "fizz";
    } else if (numero % 5 === 0) {
      return "buzz";
    } else {
      return numero;
    }
  };
  console.log(fizzBuzz(6)); 
  console.log(fizzBuzz(10)); 
  console.log(fizzBuzz(30)); 
  console.log(fizzBuzz(4)); 

/* La función recibe como parámetro de entrada un arreglo.
 La función debe regresar el primer elemento del arreglo */
const nums = [5, 8, 12 , 3, 17];
const primerNum = (nums) =>  nums[0];
console.log(`El primer numero es: ${primerNum(nums)}`);

console.log("*");
console.log("Ejercicio 08 - agregar al final");

/* La función recibe dos parámetros de entrada, un arreglo y un elemento
 * Se debe añadir el elemento al final del arreglo y luego regresar el arreglo */

const num = [5, 8, 12 , 3, 17];
console.log(`Array : ${num}`);

const agregar = (num, elemento) => {
  num.push(elemento);
  return num;
};
let nuevo = 33;
let nuevoArray = agregar(num, nuevo);

console.log(`Array modificado: ${nuevoArray}`);

/*Crea un nuevo objeto con las propiedades coincidiendo con los argumentos
que se pasan a la función.  Devuelve el objeto */
const nuevoUsuario = (nombre, correo, password) => {
    const usuario = {
      nombre: nombre,
      correo:correo,
      password: password,
    };
    return usuario;
  };  
  const usuario1 = nuevoUsuario(
    "Jose",
    "jmmore@hotmail.com",
    "3174390000"
  );
  console.log(usuario1);

/*Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
Devuelve "true" si coinciden  De lo contrario, devuelve "false" */
const verificarPassword = (usuario, password) => {
    return usuario.password === password;
  };
  console.log(verificarPassword(usuario1, "3174390000")); 
  console.log(verificarPassword(usuario1, "c123456789")); 

/*Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
Devuelve el objeto*/
const actualizarPassword = (usuario, nuevaPassword) => {
    usuario.password = nuevaPassword;
    return usuario;
  };
  
  console.log(usuario1); 
  actualizarPassword(usuario1, "246810");
  console.log(usuario1); 

/*"usuario" tiene una propiedad llamada "amigos" que es un array
Agrega "nuevoAmigo" al final de ese array
Devuelve el objeto "usuario"*/
const agregarAmigo = (usuario, nuevoAmigo) => {
    usuario.amigos.push(nuevoAmigo);
    return usuario;
  };
  const usuario2 = {
    nombre: "Jose",
    email: "h2oterminadoslitograficos@gmail.com",
    password: "36912",
    amigos: ["Lucas", "Bairon"],
  };
  
  console.log(usuario2); 
  agregarAmigo(usuario2, "Santiago");
  console.log(usuario2); 

/*"usuarios" es un array de objetos "usuario"
Cada objeto "usuario" tiene la propiedad "esPremium"
Define cada propiedad "esPremium" de cada objeto como "true"
Devuelve el array de usuarios*/

const pasarUsuarioAPremium = (usuarios) => {
    for (let i = 0; i < usuarios.length; i++) {
      usuarios[i].esPremium = true;
    }
    return usuarios;
  };
  
  const listaUsuarios = [
    { nombre: "Hector", esPremium: false },
    { nombre: "Teo", esPremium: false },
    { nombre: "Aristi", esPremium: false },
  ];
  
  console.log(listaUsuarios); 
  pasarUsuarioAPremium(listaUsuarios);
  console.log(listaUsuarios); 

/*"usuario" tiene una propiedad llamada "posts" que es un array
"posts" es un array de objetos "post"
Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
Suma todos los likes de todos los objetos "post"
Devuelve la suma*/

const sumarLikesDeUsuario = (usuario) => {
    let sumaLikes = 0;
  
    for (const post of usuario.posts) {
      sumaLikes += post.likes;
    }
  
    return sumaLikes;
  };
  
  const usuario3 = {
    nombre: "Mauro",
    posts: [{ likes: 230 }, { likes: 510 }, { likes: 100 }],
  };
  
  const totalLikes = sumarLikesDeUsuario(usuario3);
  console.log(`Likes totales de ${usuario3.nombre} : ${totalLikes}`);

/*Crea el constructor de la clase "Persona"
Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
Debe tener un método llamado "detalle" que nos devuelve un objeto con
las propiedades de la persona y sus valores.*/

class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
  
    detalle() {
      return {
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio,
      };
    }
  }
  
  const persona1 = new Persona("Diana", "Cepeda", 35, " Calle 46 # 42 - 55");
  const detallesPersona1 = persona1.detalle();
  console.log(detallesPersona1);

/*Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
Devolver la nueva persona creada.*/
const crearInstanciaPersona = (nombre, apellido, edad, dir) => {
    return new Persona(nombre, apellido, edad, dir);
  };
  
  const nuevaPersona = crearInstanciaPersona("Juan", "Perez", 22, "Saavedra 123");
  const detallesNuevaPersona = nuevaPersona.detalle();
  console.log(detallesNuevaPersona);

  // Suma todos los números enteros (int/integers) de un array ("numeros")
// Pasa el resultado a `cb`
// No es necesario devolver nada
const sumarArray = (numeros, cb) => {
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    cb(suma);
  };
  
  const numeros = [3, 6, 9, 12, 15];
  const callback = (resul) => {
    console.log(`La suma es: ${resul}`);
  };
  sumarArray(numeros, callback);

/*Itera sobre la matriz "array" y pasa los valores a cb uno por uno
Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
no tienes que devolver nada*/

const copiarEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    
    cb(array[i]);
  }
};

const miArray = [5, 10, 15, 20, 25];
const imprimirDoble = (num) => {
  console.log(num * 2);
};
copiarEach(miArray, imprimirDoble);

/*Vamos a recibir una función (cb) que realiza una operación matemática junto con dos números.
Devolver la función pasándole como argumentos los números recibidos.*/
const operacionMatematica = (n1, n2, cb) => {
    return cb(n1, n2);
  };
  
  const suma2 = (a, b) => a + b;
  const resta = (a, b) => a - b;
  const multiplicacion = (a, b) => a * b;
  const division = (a, b) => a / b;
  
  const resultadoSuma = operacionMatematica(10, 5, suma2);
  console.log(resultadoSuma); 
  
  const resultadoResta = operacionMatematica(5, 3, resta);
  console.log(resultadoResta); 

  const resultadoMultiplicacion = operacionMatematica(9, 9, multiplicacion);
  console.log(resultadoMultiplicacion); 
  
  const resultadoDivision = operacionMatematica(9, 3, division);
  console.log(resultadoDivision); 

/*Filtrar todos los elementos del array que comiencen con la letra "a".
Devolver un nuevo array con los elementos que cumplen la condición.*/
function filter(array) {
    const filtraArray = array.filter((element) => element.startsWith("a"));
    return filtraArray;
  }
  const palabras = [
    "Perro",
    "gato",
    "ardilla",
    "aguila",
    "avispa",
    "serpiente",
    "tejon",
  ];
  
  const palabrasConA = filter(palabras);
  console.log(`Las palabras con a son: ${palabrasConA}.`);
  
  


  

  
  
