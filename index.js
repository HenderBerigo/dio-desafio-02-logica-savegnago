console.log("Desafio de Lógica 02 - DIO");
console.log("Calculadora de Partidas Rankeadas");

function calcularPartidasRankeadas(vitorias, derrotas){
let saldoVitorias = vitorias - derrotas;

let nivel;
if(saldoVitorias < 10){
  nivel = "Ferro"
  } else if(saldoVitorias <= 20){
  nivel = "Bronze"
  } else if(saldoVitorias <= 50){
  nivel = "Prata"
  } else if(saldoVitorias <= 80){
  nivel = "Ouro"
  } else if(saldoVitorias <= 90){
  nivel = "Diamante"
  } else if(saldoVitorias <= 100){
  nivel = "Lendário"
  } else if(saldoVitorias >= 101){
  nivel = "Imortal"
  } else {
  nivel = "Indefinido";
}
console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`);
}

calcularPartidasRankeadas(195, 12);