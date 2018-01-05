// Find the route that has the largest sum through a number pyramid 

function prob18() {
    
//    Brute forcing it
    
    let pyramid = '75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23' ; 
    
    
    // Organise data into multiple arrays
    let rows = [] ;
    let count = 0 ;
    let start = 0 ;
    
    for(let i = 0; i < 15; i++) {
        rows[i] = [] ;
        count++ ;
        let now = start ;
        for(let j = 0 ; j < count ; j++) {
            let temp = pyramid.slice((now+j)*3,((now+j)*3)+2) ;
            rows[i][j] = parseInt(temp) ;
            start++ ;
        }       
    }
    
//    // Checking each path and saving the biggest 
//    
//    let route = [] ;
//    for(let i = 0 ; i < 15 ; i++) {
//        route[i] = 0 ;
//    }
//    
//    let routeSize = 0 ;
//    let max = 0 ;
//    let x = true ;
//    while(x) {
//        for(let i = 0 ; i < 15 ; i++) {
//            routeSize += rows[i][route[i]] ;
//        }
//        if(routeSize > max) {
//            max = routeSize ;
//        }
//        // Alter the route 
//        let y = true ;
//        while(y) {
//            
//        }
//        
//    }
//    
//    
//    function possible(route) {
//        let good = true ;
//        for(let i = 0 ; i < route.length ; i++) {
//            if(route[i+1] > route[i]+1 || route[i+1] < route[i]) {
//                good = false ;
//            }
//        }
//        return good ;
//    }
//    
//    
//    print(routeSize) ;
    
    // Alternate method: Adding from the bottom
    for(let j = 13 ; j >= 0 ; j--) {
        for(let i = 0 ; i < rows[j].length ; i++ ) {
            let a = rows[j][i] + rows[j+1][i] ;
            let b = rows[j][i] + rows[j+1][i+1] ;
            if(a >= b) {
                rows[j][i] = a ;
            } else {
                rows[j][i] = b ;
            }
        }
    }

    print(rows[0][0]) ;
    // Must admit that the idea of adding from the bottom was a hint from the internet. Wish i had stuck it out and worked it out for myself...
}