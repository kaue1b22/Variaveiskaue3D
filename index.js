const prompt = require('prompt-sync');
const entrada = prompt();

let anoAtual = 2024;
const nomeCompleto = "kaue henrique";
let idade = 16;
const cursoFaculdade = "TI";
const cidadeAtual = "são josé dos pinhais";

console.log (`ola eu sou o ${nomeCompleto} eu tenho ${idade} anos quero ano que vem estar cursando ${cursoFaculdade} e moro em ${cidadeAtual}`);

anoAtual = 2025;

console.log (anoAtual)

idade = 17;

console.log(`ola sou ${nomeCompleto} eu tenho ${idade} anos e estou cursando ${cursoFaculdade} e moro em ${cidadeAtual}`)

//agencia de viagens

var nomeComprador = entrada("qual é seu nome?")
var cpfComprador = entrada("qual é seu cpf?");
var idadeComprador = entrada("qual sua idade?");
const ListaDeDestinos = new Array(
  "inazuma",
  "sumero",
  "fontaine",
"natlan",
"lyue",
);

console.log(`ola ${nomeComprador} do cpf ${cpfComprador} de idade ${idadeComprador} esta confirmada sua viagem para ${ListaDeDestinos} agredecemos a sua preferencia pela agencia de viagens paimon air lines`);

console.log(ListaDeDestinos[1]);
console.log(`senhor ${nomeComprador} adicionamos mais um destino a sua viagem`);
ListaDeDestinos.push("ghotam city");

if (idadeComprador<18){
  console.log(`infelizmente não podemos lhe vender uma passagem pois o senhor/a é menor de idade`)
};

if (idadeComprador>=18){
  console.log(`parabens nós pudemos lhe vender uma passagem, estes são nossos destinos ${ListaDeDestinos}`) 
};