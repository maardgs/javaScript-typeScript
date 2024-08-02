let salarioBruto = 2000.00;
let adicionalNoturno = 500.00;
let horasExtras = 100.00
let descontos = 200.00

console.log(" ")
console.log("ArrowFunction");

let salarioLiquido = (num1,num2,num3,num4) => {return (num1 + num2 + (num3*5)) - num4 }; 

console.log("Salário Liquido: " + salarioLiquido(salarioBruto, adicionalNoturno, horasExtras, descontos).toFixed(2));


