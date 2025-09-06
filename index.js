
const soma = (a, b) => a + b;
const subtrai = (a, b) => a - b;
const multiplica = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Divisão por zero não é permitida";


function mostraResultado(num1, num2) {
    console.log(`Soma entre ${num1} e ${num2}:`, soma(num1, num2));
    console.log(`Subtração entre ${num1} e ${num2}:`, subtrai(num1, num2));
    console.log(`Multiplicação entre ${num1} e ${num2}:`, multiplica(num1, num2));
    console.log(`Divisão entre ${num1} e ${num2}:`, divide(num1, num2));
    console.log("\nPressione qualquer tecla para sair...");
}

mostraResultado(10, 5);

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on("data", process.exit.bind(process, 0));
