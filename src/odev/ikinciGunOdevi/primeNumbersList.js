function primeNumbersList(){
    for(let i = 0; i<1000; i++){
        
        let counter = 0

        for(let j=2; j<i; j++){
            
            if(i % j == 0){
                counter += 1
                break
            }

            else
                counter == 0
        }

        if(counter == 0 & i > 1 )
            console.log(i + " Sayısı ASALDIR")
    }
}

primeNumbersList()