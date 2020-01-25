const express = require ('express') //importação fw express
const app = express() //utilização do express pelo aplicativo
const path = require('path') //importação do path para publicação posterior do projeto

const convert = require('./lib/convert') //importação do convertjs

app.set('view engine', 'ejs') //setando o ejs como a engine para o controle do layout
app.set('views', path.join(__dirname, 'views')) //setando o aplicativo para posterior publicação no zeit
app.use(express.static(path.join(__dirname, 'public'))) //setando a pasta public para receber os arquivos do projeto

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cotacao', (req, res) => {
    const {cotacao, quantidade} = req.query
    if (cotacao && quantidade){
        const conversao = convert.convert(cotacao, quantidade)
        res.render('cotacao', {
            error: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao)
        })
    }else{
        res.render('cotacao', {
            error: 'Valores inválidos!'
        })

    }
})

app.listen(3000, err => {
    if (err){
        console.log('Não foi possível iniciar!')
    }else{
        console.log('Convert My Money iniciado com sucesso!')
    }
})