
let palestrantes = (`prof Richard e prof Marcelo`)
let participantes = []
let dataHoje = `2021-09-21`
let dataEvento = `2021-10-05`
let idadeAluno = 20
let nomeAluno = `Henrique`
let cadastroCompleto = true
let totalVagas = 100

if (idadeAluno < 18) {
    console.log(`Desculpa, evento exclusivo para maiores de 18 anos`)
    cadastroCompleto = false
}

if (dataHoje > dataEvento) {
    console.log(`Data invalida`)
    cadastroCompleto = false
}

if (nomeAluno.length < 4) {
    console.log(`Nome invalido`)
    cadastroCompleto = false
}

if (!cadastroCompleto) {
    console.log(`Oh oh, aconteceu um erro, verifique as informações acima`)
} else {
    participantes.push(nomeAluno)
    console.log(`Cadastro completo`)
    console.log(`Bem vindo a imersao Front End,`, nomeAluno)
    console.log(`Apresentando nossos palestrantes,`, palestrantes)
}
    for (let i = 0; i < participantes.length; i++) {
        console.log('Apresentando os participantes')
}  
    for (let i = 0; i < participantes.length; i++) {
        console.log(participantes[i])
}