let peca = 'amin';
let listaDePecas = ['abxo', 'abhn', 'avnm', 'aklm', 'asec'];
let amin = 101;

if(listaDePecas.length >= 10) {
    console.log('impossivel cadastrar - capacidade maxima atingida');
} else if(peca.length <= 3) {
    console.log('impossivel cadastrar - nome com menos de 3 caracteres');
} else if(amin <= 100) {
    console.log('impossivel cadastrar - peso inferior a 100g');
}
else {
    console.log('cadastro efetuado')
}