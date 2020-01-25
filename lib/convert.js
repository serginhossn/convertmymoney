const convert = (cotacao, quantidade) => {
    return cotacao * quantidade
}

const toMoney = valor => {
    return parseFloat(valor).toFixed(2) //converte o resultado para um Float e fixa o valor retornado em duas casas após a vírgula
}

module.exports = {
    convert,
    toMoney
}