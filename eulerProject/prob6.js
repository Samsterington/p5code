// Find the difference between the sum of the squares and the square of the sum of all numbers between 1 and 100

function prob6() {
    
    let sumS = 0 ;
    let sSum = 0 ;
    
    for(i = 1 ; i <= 100 ; i++) {
        sumS = sumS + (i^2) ;
        sSum = sSum + i ;
    }
    
    sSum = sSum*sSum ; // Why does sSum^2 not work here 
    let diff = sSum - sumS ;
    print(diff) ;

}