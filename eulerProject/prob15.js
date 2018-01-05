// Working out routes througha a lattice 
// Looks like its actually just pascals triangle where each increase by one grid is actually an increase by two lines in the traingle, with the middle number equalling the number of routes through the grid. 
// Lets program it then 

function prob15() {
    
    let line = [1,1] ;
    let nextLine = [] ;
    let gridSize = 20 ;
    
    for(let i = 1 ; i < gridSize*2 ; i++) {
        for(let j = 0 ; j <= line.length ; j++) {
            if(j == 0 || j == line.length) {
                nextLine[j] = 1 ;
            } else {
             nextLine[j] = line[j-1] + line[j] ;   
            }
        }
        line = nextLine ;
//        print(line) ;
        nextLine = [] ;
    }
    
    print(line[gridSize]) ; 

}