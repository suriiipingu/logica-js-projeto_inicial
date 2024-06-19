alert('Boas vindas ao jogo do número secreto!');

//criar uma variável para armazenar o conteúdo
// = é usado para atribuir; == é usado para igualar uma informação
let numeroSecreto = 29;

//caixa de texto para coletar a informação do usuário
let chute = prompt('Escolha um número entre 1 e 30') ;

//condição
if(chute == numeroSecreto){
    //ambiente secreto para os devs :)
    console.log('Isso ai! Você descobriu o número secreto!');
}else{

}