const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultdo = document.querySelector("texto-resultado");

const perguntas = [
    {
    enunciado: "Qual é uma prática benéfica para promover o bem-estar físico e mental tanto em humanos quanto em animais de estimação?",
    alternativas: [
       {
        texto:"Passeios diários ao ar livre",
        afirmacao:"O exercício regular é crucial para manter a saúde cardiovascular e a agilidade física em humanos e animais"
    },
   {
    texto:"Assistir televisão juntos",
    afirmacao:"Interagir e brincar com animais de estimação pode reduzir os níveis de estresse e promover uma sensação de calma e felicidade tanto para as pessoas quanto para os animais"
  }
    ]
}
];

let atual = 0;
let perguntaAtual;
let historiafinal = "",

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);

    }
        
    }

    mostraPergunta();
    
