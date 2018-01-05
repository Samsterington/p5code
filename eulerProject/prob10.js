// Find the sum of all primes below two million 
// Currently uncomplete as the program is too slow. Look up prime sivs to speed up the computation. 

function prob10() {
    
    // This section creates an arrray of prime numbers up to and including x 
    
    let x = 2000000 ;
//    let prime = [2] ;
//    let count = 1 ;
    let notPrime ;
    
    let sum = 2 ;
    
    for(let i = 3 ; i < x ; i+=2) {
//        prime[count] = i ;
        notPrime = false ;
        for(let j = ceil(i/2) ; j > 1 ; j--) {
            if(i%j == 0) {
                notPrime = true ;
                break ;
            }
        }
        if(!notPrime) {
//            count = count + 1 ;
            sum = sum + i ;
        } else {
//            prime.splice(prime.length-1,1) ;
        }
    }
//    print(prime) ;
    
    // sum all elements in array prime 
    
//    let sum = 0 ;
//    
//    for(let i = 0 ; i < prime.length ; i++) {
//        sum = sum + prime[i] ;
//    }
    
    print(sum) ;
    
    
}