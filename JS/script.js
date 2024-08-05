const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está participando de um projeto que visa fortalecer parcerias entre agricultores locais, mercados e escolas. Qual a primeira coisa que você faria para ajudar nesse projeto?",
        alternativas: [
            {
                texto: "Organizaria uma reunião com todos os envolvidos para entender suas necessidades e expectativas.",
                afirmacao: "Iniciou com uma abordagem colaborativa, promovendo diálogo entre todas as partes."
            },
            {
                texto: "Pesquisaria sobre iniciativas semelhantes em outras regiões para obter inspiração e aplicar no projeto.",
                afirmacao: "Buscou inspiração em outras iniciativas bem-sucedidas para guiar o projeto."
            }
        ]
    },
    {
        enunciado: "Durante a reunião inicial, foi decidido que as escolas receberiam alimentos frescos diretamente dos agricultores. Como você contribuiria para que essa iniciativa seja bem-sucedida?",
        alternativas: [
            {
                texto: "Criaria um cronograma de entregas alinhado com o calendário escolar e a colheita dos agricultores.",
                afirmacao: "Planejou cuidadosamente as entregas para garantir a frescura dos alimentos e a satisfação das escolas."
            },
            {
                texto: "Organizaria cursos nas escolas para educar os alunos sobre a importância de consumir alimentos locais e frescos.",
                afirmacao: "Promoveu a educação alimentar entre os alunos, fortalecendo a conexão com os agricultores."
            }
        ]
    },
    {
        enunciado: "Uma vez que o projeto está em andamento, você percebe que alguns mercados estão relutantes em participar. Como você abordaria essa situação?",
        alternativas: [
            {
                texto: "Ofereceria incentivos fiscais ou subsídios para atrair a participação dos mercados.",
                afirmacao: "Utilizou estratégias financeiras para tornar a parceria mais atraente para os mercados."
            },
            {
                texto: "Realizaria campanhas de marketing para mostrar aos mercados os benefícios de se envolver com a comunidade local.",
                afirmacao: "Utilizou marketing para destacar as vantagens de apoiar os agricultores e as escolas."
            }
        ]
    },
    {
        enunciado: "Ao visitar uma das escolas, você nota que os alunos não estão muito interessados nos alimentos frescos. O que você faria para mudar essa situação?",
        alternativas: [
            {
                texto: "Introduziria programas de culinária nas escolas para que os alunos aprendam a preparar e apreciar os alimentos locais.",
                afirmacao: "Envolveu os alunos ativamente, ensinando-os a cozinhar e valorizar os alimentos frescos."
            },
            {
                texto: "Organizaria visitas aos campos dos agricultores para que os alunos conheçam de onde vem a comida.",
                afirmacao: "Criou uma conexão direta entre os alunos e os agricultores, aumentando o interesse pelos alimentos locais."
            }
        ]
    },
    {
        enunciado: "Você recebe avaliações de que alguns agricultores estão enfrentando dificuldades para atender às demandas dos mercados e escolas. Como você resolveria isso?",
        alternativas: [
            {
                texto: "Organizaria um sistema de cooperativas entre os agricultores para facilitar a produção e distribuição.",
                afirmacao: "Promoveu a cooperação entre os agricultores, aumentando a eficiência e a capacidade de atendimento."
            },
            {
                texto: "Buscaria apoio de instituições governamentais e ONGs para fornecer recursos e treinamento aos agricultores.",
                afirmacao: "Mobilizou recursos externos para fortalecer a capacidade dos agricultores locais."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu comportamento foi :";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
