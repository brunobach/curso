function gerarNumerosEntre(min, max){
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min
        const aleatorio = [
            parseInt(Math.random() * fator) + min,
            parseInt(Math.random() * fator) + min,
            parseInt(Math.random() * fator) + min,
            parseInt(Math.random() * fator) + min,
            parseInt(Math.random() * fator) + min,
            parseInt(Math.random() * fator) + min,
        ]
        
        resolve(aleatorio)
    })
}
const numerosMega = [06, 10, 27, 28, 41, 52]

const gerar = gerarNumerosEntre(1, 60)

console.log(gerar.then())