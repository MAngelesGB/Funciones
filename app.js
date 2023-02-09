//Funcion saludo
function greet()
{
    console.log("Hello"); 
}

greet(); // Llamada de la funcion

/*Estamos pasando la funcion greet como pararametro e 
invocando el nombre del argumento fn*/
function logGreeting(fn){
    fn()
}
logGreeting(greet); 

//function expresion. Asignar una funcion a una variable
let greetMe = function () {
    console.log("Hello from the function expression"); 
}
greetMe(); 

//Arrow functions
let mifunction  = ()=>{console.log("Hola Arrow")}
mifunction(); 

//Arrow functions con parametros
let saludo = (nombre, tratamiento)=>{
    console.log('Hola ' + tratamiento +' '+ nombre); 
}
saludo('Migel', 'sr.');  

//Arrow function con un parametro se puede omitir el parentesis
let cuadrado = numero => {
    return numero * numero; 
}
console.log(cuadrado(3)); 

let cuadrado2 = numero => numero * numero; // Se pueden omitir las llaves y el return si solo es una linea
console.log(cuadrado(3)); 

