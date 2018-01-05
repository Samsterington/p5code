// What is the largest prime factor of the number 600851475143

function prob3() {
    
    let num = 600851475143 ;
    
// This section creates an arrray of prime numbers up to and including x 
    
    let x = 10000 ;
    let prime = [2] ;
    let count = 1 ;
    let notPrime ;
    
    for(i = 3 ; i < x ; i++) {
        prime[count] = i ;
        notPrime = false ;
        for(j = i-1 ; j > 1 ; j--) {
            if(i%j == 0) {
                notPrime = true ;
            }
        }
        if(!notPrime) {
            count = count + 1
        }
    }
    
// Calculating prime factors
    
    let highest = 0 ; 
    let factor = [] ;
    
    for(i = 0 ; i < prime.length ; i++) {
        if(num%prime[i] == 0) {
            num = num/prime[i] ;
            factor.push(prime[i]) ;
            if(prime[i] > highest)  {
                highest = prime[i] ;
            }
            i = 0 ;
        }
    }
    
    print(highest) ;
    
// Check that the prime array reaches a high enough prime 
    
    let theSum = 1 ;
    
    for(i = 0 ; i < factor.length ; i++) {
        theSum = theSum * factor[i] ;
    }
    
    print(theSum) ;
    
}