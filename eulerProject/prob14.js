// Which number under 1000000 has the longest collatz sequence. 
// First attempt: Brute force 

function prob14() {
    
    function colSeqLength(num) {
        let count = 1 ;
        while(num != 1) {
            if(num%2 == 0) {
                num = num/2 ;
            } else {
                num = num*3 + 1 ;
            }
            count++ ;
        }
        return count ;
    }
    
    let answer ;
    let largeChain = 0 ;
    for(let i = 1 ; i <= 1000000 ; i++) {
        let a = colSeqLength(i) ;
        if(a > largeChain) {
            answer = i ;
            largeChain = a ;
        }
    }
    
    print(answer) ;
    
    
}