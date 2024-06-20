alert('Boas vindas ao jogo do número secreto!');

//criar uma variável para armazenar o conteúdo
// = é usado para atribuir; == é usado para igualar uma informação
let numeroSecreto = 29;

console.log(numeroSecreto); 
//inclua comandos console.log em diferentes partes do código para verificar o fluxo do programa, os valores das variáveis e outras informações relevantes durante a fase de desenvolvimento.
// mas retirar o console.log quando for compartilhar o programa, por conta de desempenho

//caixa de texto para coletar a informação do usuário
let chute = prompt('Escolha um número entre 1 e 30') ;

//condição
if(chute == numeroSecreto){
    //ambiente secreto para os devs :)
    alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto}!`);
}else{
    alert('Você errou!');
}