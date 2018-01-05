// What is the smallest number divisible by all numbers from 1 to 20. (This could definitely be better, pretty slap dash)

function prob5() {
    
    let a = 0 ;
    let num = 2520 ;
    
    while(a != 20) {
        a = 0 ;
        for(let j = 20 ; j > 0 ; j--) {
            if(num%j != 0) {
                break ;
            } else {
                a++ ;
            }
        }
        num++ ;
    }
    print(num-1) ;
}