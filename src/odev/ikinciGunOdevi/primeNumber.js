function primeNumber(...numbers){
    for(let i = 0; i<numbers.length; i++){
        
        let counter = 0

        for(let j=2; j<numbers[i]; j++){
            
            if(numbers[i] % j == 0){
                counter += 1
                break
            }

            else
                counter == 0
        }

        if(counter == 0 & numbers[i] > 1 )
            console.log(numbers[i] + " Sayısı ASALDIR")
    }
}

primeNumber(0,1,5,8,12,17,-45,-242)