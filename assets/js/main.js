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
    let multiplicador = 10
    const numerosMultiplicados = []
    
    for(let i in digitosDoCpf){
        numerosMultiplicados.push(digitosDoCpf[i] * multiplicador)
        multiplicador--
    }

    let primeiroDigito = numerosMultiplicados.reduce((acum, numero) => numero + acum)
    primeiroDigito = 11 - (primeiroDigito % 11)

    primeiroDigito > 9 ? 0 : primeiroDigito
    return primeiroDigito
}

function calcularSegundoDigito(digitosDoCpf){
    let multiplicador = 11
    const numerosMultiplicados = []

    for(let i in digitosDoCpf){
        numerosMultiplicados.push(digitosDoCpf[i] * multiplicador)
        multiplicador--
    }

    let segundoDigito = numerosMultiplicados.reduce((acum, numero) => numero + acum)
    segundoDigito = 11 - (segundoDigito % 11)

    segundoDigito > 9 ? 0 : segundoDigito
    return segundoDigito
}

function agruparDigitos(digitosDoCpf){
    let cpfCalculado = ""
    for(let i in digitosDoCpf){
        cpfCalculado = cpfCalculado.concat(digitosDoCpf[i])
    }
    return cpfCalculado
}

function verificarCpf(cpfDigitado, cpfCalculado){
    return cpfDigitado == cpfCalculado ? true : false
}

function exibirResultado(verificacao){

    if(verificacao){
        
    }
    else{
        
    }
}

(function(){
    const botaoValidar = document.querySelector("#validar")
    botaoValidar.addEventListener('click', function(e){
        e.preventDefault()
        const cpfDigitado = obterCpfDigitado()
        const digitosDoCpf = separarDigitos(cpfDigitado)
        
        const primeiroDigito = calcularPrimeiroDigito(digitosDoCpf)
        console.log(primeiroDigito)
        digitosDoCpf.push(primeiroDigito)

        const segundoDigito = calcularSegundoDigito(digitosDoCpf)
        digitosDoCpf.push(segundoDigito)
        console.log(segundoDigito)
        
        const cpfCalculado = agruparDigitos(digitosDoCpf)
        const verificacao = verificarCpf(cpfDigitado, cpfCalculado)
        exibirResultado(verificacao)
    })
})()
