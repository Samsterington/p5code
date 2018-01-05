// Adding up the digits of 2^1000 
// The difficulty with this seems to be in the way javascripts stores integers (to a maiumum of 15 places) 
// so the cheat way is just to calculate it on a large integer computer software and copy it in as a string 

// Have now completed in a decent way 

function prob16() {
    
// Cheat method

//    let num = 2**100 ;
//    let numString = '10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376'
//    let sum = 0 ;
//    
//    for(let i = 0 ; i < numString.length ; i++) {
//        let a = numString.charAt(i) ;
//        a = parseInt(a) ;
//        sum = sum + a ;
//        print(sum) ;
//    }
//    
//    print(sum) ;
    

// Doubling method (failed attempt)
   
//    (bigNum = []).length = 10000;
//    bigNum.fill(0) ;
//    bigNum[0] = 2 ;
//    let size = 1 ;
//    
//    for(let i = 2 ; i <= 1000 ; i++) {
//        let many = size ;
//        for(let j = many-1; j >= 0 ; j-- ) {
//            let digit = bigNum[j] ;
//            digit = digit*2 ;
//            if(digit < 9) {
//                bigNum[j] = digit ;
//            } else {
//                bigNum[j+1]++ ;
//                bigNum[j] = digit%10 ;
//                size++
//            }
//        }
//    }
//    
//    let sum = 0 ;
//    
//    for(let i = 0 ; i < bigNum.length ; i++) {
//        sum += bigNum[i] ;
//    }
//    
//    print(sum) ;
    
    
// Doubling method second attempt 
    
    let num = [2] ;
    
    for(let j = 1 ; j < 1000 ; j++) {
        for(let i = 0 ; i < num.length ; i++) {
            num[i] = num[i] * 2 ;
            if(num[i] > 9) {
                num[i] = num[i] - 10 ;
                if(i == 0) {
                    num.unshift(1) ;
                    i++ ;
                } else {
                    let its10 = true ;
                    let a = 1 ;
                    while(its10) {
                        num[i-a] = num[i-a] + 1 ;
                        if(num[i-a] == 10) {
                            num[i-a] = 0 ;
                            a++ ;
                            i++ ;
                        } else {
                            its10 = false ;
                        }
                    }
                }
            } 
        }
    }
    
    print(num) ;
    
    let sum = 0 ;
    
    for(let i = 0 ; i < num.length ; i++) {
        sum += num[i] ;
    }
    
    print(sum) ;
}
