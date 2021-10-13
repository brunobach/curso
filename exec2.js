const somar = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        
        total += n
    }
    return total
}

console.log(somar(1,2,3,4))