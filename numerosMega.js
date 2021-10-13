const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
const stream = fs.createWriteStream(caminho)
stream.setMaxListeners(0)
const numerosMega = [06, 10, 27, 28, 41, 52]

function gerarNumeros() {
    const max = 60
    const min = 1
    const fator = max - min
    const aleatorio = [
        parseInt(Math.random() * fator) + min,
        parseInt(Math.random() * fator) + min,
        parseInt(Math.random() * fator) + min,
        parseInt(Math.random() * fator) + min,
        parseInt(Math.random() * fator) + min,
        parseInt(Math.random() * fator) + min,
    ]
    return aleatorio
}

var i = 0;

while (true) {
    const totalAchados = []
    const gerar = gerarNumeros()
    var idx

    if (numerosMega.sort().every(function (value, index) { return value === gerar.sort()[index] })) {

        console.log(`Encontrei os numeros mega: ${gerar}`)
        break;
    } else {

        gerar.map(ele => {
            idx = numerosMega.indexOf(ele)
            if (idx != -1) {
                totalAchados.push(idx)
                idx = numerosMega.indexOf(gerar, idx + 1);
            }

        })
        if (totalAchados.length >= 5) {
            let contador = i
            stream.once('open', function (fd) {
                stream.write(`${contador}: ${gerar} Encontrado: ${totalAchados.length} \n`)
            })
        
        }
       
    }
    i++
}

