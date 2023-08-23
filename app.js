alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let palpite;
let tentativas = 1;

// enquanto palpite não for igual ao número secreto
while (palpite != numeroSecreto){
    palpite = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se palpite for igual ao número secreto
    if (palpite == numeroSecreto){
        break;
    } else {
        if (palpite > numeroSecreto) {
            alert(`O número secreto é menor que ${palpite}`);
        } else {
            alert(`O número secreto é maior que ${palpite}`);
        }
        // adiciona mais 1 tentativa
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns!!! Você acertou. O número secreto era: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);