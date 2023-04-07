//alert('testando a js')
//calcular media = nota1 + nota2 + nota3
//classificação:
// media menor que 5, reprovado
// media menor que 5 e menor que 7, recuperação
// media maior que 7, aprovado

/*
var nota1 = 2;
var nota2 = 8;
var nota3 = 10;
var media = (nota1 + nota2 + nota3) / 3;

console.log(media);
if (media < 5) {
    console.log('Reprovado');
} else if(media >= 5 && media <=7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}
*/


//  (IMC)
const peso = 125;
const altura = 1.75;
const imc = peso / (altura * altura);

console.log(imc);
if (imc < 18.5 ) {
    console.log('Abaixo do peso')
} else if (imc > 18.5 && imc < 25) {
    console.log('Peso normal')  
} else if (imc > 25 && imc <= 30) {
    console.log(' Acima do peso')
}else if (imc > 30 && imc < 40){
    console.log('Obesidade')
}else {
    console.log('Obesidade grave')
};

