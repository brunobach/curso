const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'arquivo.txt')

function lerArquivo(){
    return new Promise(resolve => {  
           fs.readFile(caminho, function(_,conteudo){
            resolve(conteudo.toString())
           })
    })
}

lerArquivo().then(dados => console.log(dados))