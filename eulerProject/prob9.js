// if a^2 + b^2 = c^2 and a + b + c = 1000 what are the values of a,b and c. 

function prob9() {
    
    // substitute and rearange to 2000a + 2000b - 2ab = 1000000
    
    let A ;
    let B ;
    
    for(let a = 1 ; a < 1000 ; a++) {
        for(let b = 1 ; b < 1000 ; b++) {
            let left = (2000*a) + (2000*b) - (2*a*b) ;
            if(left == 1000000) {
                A = a ;
                B = b ;
                break ;
            }
        }
    }
    let C = (1000 - A) - B ;
    
    print(A + 'A') ;
    print(B + 'B') ;
    print(C + 'C') ;
            
}