function perfectNumber(){
    for(let i=1; i<1000; i++){

        let numbers = []
        let value = 0

        for(let j=1; j<i; j++){
            if(i % j == 0){
                numbers.push(j)
                value += j

                if(value == i){
                    console.log(numbers + " = " + i)
                }
            }
        }
    }
}

perfectNumber()