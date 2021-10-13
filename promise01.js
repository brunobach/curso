const esperarPor = tempo => 
    new Promise(
        resolve => setTimeout(() => {
            console.log('Executando promise')
            resolve('Vish')
        }, tempo)
    )

esperarPor(2000)
        .then(texto => console.log(texto))