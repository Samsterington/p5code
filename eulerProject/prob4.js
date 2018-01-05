// Find the largest palindromic number made from the product of two 3 digit numbers 

function prob4() {
    

// Check if a number is palindromic cool
    function isPalind(x) {

        let num = x ;
        let numString = String(num) ;
        let numReverse = '' ;
        let reverse ;

        for(let i = numString.length-1 ; i >= 0 ; i--) {
            let a = numString.charAt(i) ;
            numReverse = numReverse + a
        }
        reverse = parseInt(numReverse) ;

        if(num == reverse) {
            return true
        } else {
            return  false 
        }
        
    } 
    
// Check which values create multiply to palindromes and save the largest
    
    let highest = 0 ;
    let prod ;
    
    for(let i = 100 ; i < 1000 ; i++) {
        for(let j = 100 ; j < 1000 ; j++) {
            prod = i*j ;
            if(isPalind(prod)) {
                if(prod > highest) {
                    highest = prod ;
                }
            }
        }
    }
    print(highest) ;

}