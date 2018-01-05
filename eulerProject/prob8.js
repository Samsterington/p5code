// Finding adjacent digit products within a 100 digit number and identifying the largest
// issues appeared when String and toString functions would round the number when converting, the simple solution was to put it all in as one big string, though even then the way the website had formatted gave javascript stuggles (put it in word and sorted it out)
// New functions .charAt() gives value at string index specified, and parseInt() converts string number to actual number. 

function prob8() {
    
    let numString = '73167176531330624919225119674426574742355349194934969835203127745063262395783180169848018694788518438586156078911294949545950173795833195285320880551112540698747158523863050715693290963295227443043557668966489504452445231617318564030987111217223831136222989342338030813533627661428280644448664523874930358907296290491560440772390713810515859307960866701724271218839987979087922749219016997208880937766572733300105336788122023542180975125454059475224352584907711670556013604839586446706324415722155397536978179778461740649551492908625693219784686224828397224137565705605749026140797296865241453510047482166370484403199890008895243450658541227588666881164271714799244429282308634656748139191231628245861786645835912456652947654568284891288314260769004224219022671055626321111109370544217506941658960408071984038509624554443629812309878799272442849091888458015616609791913387549920052406368991256071760605886116467109405077541002256983155200055935729725716362695618826704282524836008232575304207529634500' ;
//    let numString = '17113456789999999' ;
    let options = numString.length - 12 ;
    let prodList = [] ;
    print(numString) ;
    
    for(let i = 0 ; i < options ; i++) {
        let prod = 1 ;
        let start = i ;
        for(let start = i; start < (i+13) ; start++) {
            let a = numString.charAt(start)
            a = parseInt(a) ;
            prod = prod * a ;
//            print(prod) ;
        }
//        print(prod) ;
        prodList[i] = prod ;
    }
    print(prodList) ;

// Finding maximum value and its components 
    let maximum = 0 ;
    let index ;
    let multiples = 0 ;
    
    for(let i = 0 ; i < prodList.length ; i++) {
        if(prodList[i] > maximum) {
            maximum = prodList[i] ;
            index = i ;
            multiples++ ;
        }  
    }
    
    let start = index ;
    let finalS = '' ;
    
        for(let j = 0 ; j < 13 ; j++) {
            let a = numString.charAt(start)
            finalS = finalS + ' ' + a ;
            start++ ;
        }
    
    print(maximum) ;
    print(finalS) ;
}