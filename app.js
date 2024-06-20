alert('Boas vindas ao jogo do número secreto!');

//criar uma variável para armazenar o conteúdo
// = é usado para atribuir; == é usado para igualar uma informação
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto); //ambiente secreto para os devs :)
//inclua comandos console.log em diferentes partes do código para verificar o fluxo do programa, os valores das variáveis e outras informações relevantes durante a fase de desenvolvimento.
// mas retirar o console.log quando for compartilhar o programa, por conta de desempenho

//caixa de texto para coletar a informação do usuário
let chute;
let tentativas = 1;


//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    
    //condição
    if(chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);



