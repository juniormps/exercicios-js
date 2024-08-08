//08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota o novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). 
//Obs.: O primeiro jogo não conta como novo recorde do melhor. 
//Exemplo: String: “10 20 20 8 25 3 0 30 1” 
//Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)

function metricasPontuacao(listaString) {
    let pontuacoes = listaString.split(" ").map(Number);
    
    let maiorPontuacao = Math.max(...pontuacoes)
    let piorPontuacao = Math.min(...pontuacoes)

    let numRecordes = pontuacoes.filter(pontuacao => pontuacao == maiorPontuacao).length

    let pioresJogos = pontuacoes
        .map((pontuacao, indice) => pontuacao === piorPontuacao ? indice + 1 : -1)
        .filter(indice => indice !== -1);

    return [numRecordes, pioresJogos];
}


let pontuacoesFeitas = "10 20 20 8 25 3 0 30 1 30 0" 
console.log(metricasPontuacao(pontuacoesFeitas))




/* OUTRA SOLUÇÃO:

function metricasPontuacao(listaString) {
    let pontuacoes = listaString.split(" ").map(Number);

    let maiorPontuacao = pontuacoes[0];
    let piorPontuacao = pontuacoes[0];
    let recordes = 0;
    let piorJogo = 0;

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i];
            recordes++;
        }
        if (pontuacoes[i] < piorPontuacao) {
            piorPontuacao = pontuacoes[i];
            piorJogo = i + 1; // i + 1 para obter o número do jogo
        }
    }

    return [recordes, piorJogo];
}


let pontuacoesFeitas = "10 20 20 8 25 3 0 30 1" 
console.log(metricasPontuacao(pontuacoesFeitas))
*/