const balas = [2, 2, 3, 7]


function balasIguais(bala) {
    const minMMC = Math.min(...bala)
    let countsAr = []
    

    for(let i = 0; i<5; i++){
        
        let ar = 0

        for(let j = 0; j < bala.length; j++){
          
            let diff = j - (minMMC - i)

            ar += Math.trunc(diff/5)
            ar += Math.trunc((diff%5)/2)
            ar += Math.trunc((diff%5)%2)
            countsAr.push(ar)
        }
    }


    console.log(Math.abs(Math.min(...countsAr)))
}


balasIguais(balas)
balasIguais([10,7,12])