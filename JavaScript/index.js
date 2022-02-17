const d = new Date ();
document.getElementById("demo").innerHTML="d";
console.log("data avui" + d);

//Operadors aritmètics
var a, b, c;
console.log("Declaració de variables");
console.log("a = "+a+"");
console.log("b = "+b+"");
console.log("c = "+c+"");
//assignació de valors
console.log("Assignació de valors");
a=0, b=10, c=20;
console.log("a = "+a+"");
console.log("b = "+b+"");
console.log("c = "+c+"");
//suma
console.log("Operador suma '+'");
a=b+c;
console.log("a = b + c = "+a+"");
//resta
console.log("Operador resta '-'");
a=b-c;
console.log("a = b - c = "+a+"");
//multiplicació
console.log("Operador multiplicació '*'");
a=b*c;
console.log("a = b * c = "+a+"");
//exponent
console.log("Operador multiplicació '*'");
a=b**c;
console.log("a = b * c = "+a+"");
//divisió
console.log("Operador divisió '/'");
a=b/c;
console.log("a = b / c = "+a+"");
//mòdul
console.log("Operador mòdul '%'");
a=b%c;
console.log("a = b % c = "+a+"");
//increment
console.log("Operador increment '++'");
b++;
console.log("El resultat de 'b++;' és "+b+"");
//decrement
console.log("Operador decrement '--'");
b--;
console.log("El resultat de 'b--;' és "+b+"");