function obterCpfDigitado(){
    const cpf = document.querySelector("#cpf")
    return cpf.value
}

function separarDigitos(cpf){
    const digitosDoCpf = []
    for(let i = 0; i < cpf.length - 2; i++){
        digitosDoCpf.push(cpf.charAt(i))
    }
    return digitosDoCpf             
}

function calcularPrimeiroDigito(digitosDoCpf){
    multiplicador = 10
    const numerosMultiplicados = []

    for(let i in digitosDoCpf){
        numerosMultiplicados.push(digitosDoCpf[i] * multiplicador)
        multiplicador--
    }

    let primeiroDigito = numerosMultiplicados.reduce((acum, numero) => numero + acum) % 11

    primeiroDigito > 9 ? 0 : primeiroDigito
    return primeiroDigito
}

function calcularSegundoDigito(digitosDoCpf){
    //return segundoDigito
}

function agruparDigitos(digitosDoCpf){
    //return cpf calculado
}

function verificarCpf(cpfDigitado, cpfCalculado){
    //return verificacao
}

function exibirResultado(verificacao){
    //mostrar mensagem da verficiacao na div de resultado
}

(function(){
    const botaoValidar = document.querySelector("#validar")
    botaoValidar.addEventListener('click', function(e){
        e.preventDefault()
        const cpfDigitado = obterCpfDigitado()
        const digitosDoCpf = separarDigitos(cpfDigitado)

        const primeiroDigito = calcularPrimeiroDigito(digitosDoCpf)
        digitosDoCpf.push(primeiroDigito)

        const segundoDigito = calcularSegundoDigito(digitosDoCpf)
        digitosDoCpf(segundoDigito)
    
        const cpfCalculado = agruparDigitos(digitosDoCpf)
        const verificacao = verificarCpf(cpfDigitado, cpfCalculado)
        exibirResultado(verificacao)
    })
})()

