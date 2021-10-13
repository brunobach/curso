function potencia(base, exp){
    return Math.pow(base, exp)
}

function somar(primeiro){
    return segundo => 
    terceiro => 
    primeiro + segundo + terceiro
}

function sum(val, val2){
    return val + val2
}
function mult(val, val2){
    return val * val2
}

function calcular(primeiro){
    return segundo => (fn) => fn(primeiro, segundo)
}



const result = calcular(5)(2)(potencia)

console.log(result);