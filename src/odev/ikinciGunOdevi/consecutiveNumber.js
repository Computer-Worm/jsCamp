function consecutiveNumber(nu1,nu2){
    let n1 = []
    let n2 = []

    let s1 = 0
    let s2 = 0

    for(let i=1; i<nu1; i++){
        if(nu1 % i == 0){
            n1.push(i)
            s1 += i
        }
    }

    for(let i=1; i<nu2; i++){
        if(nu2 % i == 0){
            n2.push(i)
            s2 += i
        }
    }

    if(s1 == nu2 & s2 == nu1){
        console.log(n1 + " = " +s1)
        console.log(n2 + " = " +s2)
        console.log("Girmiş olduğunuz sayılar ARKADAŞ SAYILARDIR!")
    }
    else{
        console.log(n1 + " = " +s1)
        console.log(n2 + " = " +s2)
        console.log("Girmiş olduğunuz sayılar arkadaş sayı değildir!")
    }
}

consecutiveNumber(220,284)