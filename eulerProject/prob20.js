// Work out the sum of the digits of 100! 

function prob20() {
    
    let save = [1] ;
    let end ;
    
    for(let i = 2 ; i <= 100 ; i++) {
        for(let j = 0 ; j < save.length ; j++) {
            save[j] = save[j]*i ;
        }
        for(let j = save.length-1 ; j >= 0 ; j--) {
            let x = true ;
            let carry = 0 ;
            while(x) {
                if(save[j] > 9) {
                    save[j] -= 10 ;
                    carry++ ;
                } else {
                    x = false ;
                }
            }
            if(j == 0) {
                end = carry ;
            } else {
                save[j-1] += carry ;
            }
        }
        save.unshift(end) ;
    }
    
    
    let sum = 0 ;
    for(let i = 0 ; i < save.length ; i++) {
        sum += save[i] ;
    }
    
    print(sum) ;
}