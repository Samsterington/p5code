// Find the sume of all the numbers that are multiples of 3 and five below 1000

function prob1() {
    
    let a = 0 ;
    for(i = 0 ; i < 1000 ; i++) {
        if((i%3) == 0 || (i%5) == 0) {
            a = a + i ;
        }
    }
    print(a) ;

// This adds the number twice if it is both a multiple of 3 and 5 (i.e. 15)
    let b = 0 ;
    for(i = 0 ; i < 1000 ; i++) {
        if((i%3) == 0) {
            b = b + i ;
        }
        if((i%4) == 0) {
            b = b + i ;
        }
    }
    print(b) ;
    
}