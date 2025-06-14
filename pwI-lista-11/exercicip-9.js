// 9. Desconto para maiores de idade
let idade2 = Number(prompt("Digite sua idade:"));
let valor = Number(prompt("Digite o valor:"));
if (idade2 >= 18) {
    console.log("Valor com desconto:", valor * 0.9);
} else {
    console.log("Sem desconto:", valor);
}
