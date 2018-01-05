// Add up all the letters used in writing out the numbers one to one thousand

function prob17() {
    
    let num = [0,0,0,0] ;
    let its10 = false
    let sum = 0 ;
    
    // Counting in an array
    for(let i = 1 ; i <= 1000 ; i++) {
        let end = num.length - 1 ;
        num[end] = num[end] + 1 ;
        if(num[end] == 10) {
            num[end] = 0 ;
            its10 = true ;
            let a = 1 ;
            while(its10) {
                num[end-a] = num[end-a] + 1 ;
                if(num[end-a] != 10) {
                    its10 = false ;
                } else {
                    num[end-a] = 0 ;
                }
                a++ ;
            }
        }
        
// This area below is where code can be placed to count the letters for each number 
        
        // One thousand, hundred, and
        if(num[0] != 0) {
            sum = sum + 11 ;
        }
        if(num[1] != 0) {
            sum = sum + 7 ;
            if(num[2] != 0 || num[3] != 0) {
                sum = sum + 3 ;
            }
        }

// Arrays of number lettering length       
        let numList =    [0,3,3,5,4,4,3,5,5,4] ;
        let numListAlt = [3,6,6,8,8,7,7,9,8,8] ;
        // Add twenty thirty fourty and so on
        let list ;
        
        for(let j = 1; j < 4; j++) {
            if(j == 2 && list[2] == 1) {
                list = numListAlt ;
                sum = sum + numListAlt[num[2]]
                break ;
            } else {
                list = numList ;
            }
            sum = sum + list[num[j]] ;
        }
    }
    
    print(sum) ;
}