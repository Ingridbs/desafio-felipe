// Declaração das variáveis
let nomeHeroi = "DIO";
let xpHeroi = 10002;

// Função para determinar a categoria do herói baseado na experiência
function determinarCategoria(xp) {
    if (xp <= 1000) {
        return "Ferro";} 
    else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";} 
    else if (xp >= 2001 && xp <= 5000) {
        return "Prata";}
    else if (xp >= 5001 && xp <= 8000) {
        return "Ouro";}
    else if (xp >= 8001 && xp <= 9000) {
        return "Ascedente";}
    else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";}
    else   {
        return "Radiante";}
    
    }

// Chamada da função e exibição da categoria
let categoria = determinarCategoria(xpHeroi);
console.log(`O herói ${nomeHeroi} possui a categoria: ${categoria}`);

// Exemplo de laço de repetição para mostrar a progressão do herói
for (let i = 0; i <= xpHeroi; i += 1000) {
    let categoriaAtual = determinarCategoria(i);
    console.log(`Seu XP atual é ${i} XP e a categoria do herói é: ${categoriaAtual}`);
}
