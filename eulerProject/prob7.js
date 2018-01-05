// What is the 10001st prime number 
// This works but is slow as heck. Easy fixes would be to get the number to increase by two each time skipping out the even numbers. 

function prob7() {
    
    let primeList = [2] ;
    let count = 1 ;
    let num = 3 ;
    
    while(primeList.length < 10001) {
        if(!isNotPrime(num)) {
            primeList.push(num)
        } 
        num++ ;
    }
    print(primeList[10000]) ;
    
    function isNotPrime(num) {
        let notPrime = false ;
        for(let j = num-1 ; j > 1 ; j--) {
            if(num%j == 0) {
                notPrime = true ;
                break ;
            }
        }
        return notPrime ;
    }
    
}