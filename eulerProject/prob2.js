// Find the sum of all even valued numbers in the fibonachi sequence who's values do not exceed 4 million

 function prob2() {
     
     let num1 = 0 ;
     let num2 = 1 ;
     let num3 = 0 ;
     let answer = 0 ;
     while(num3 <= 4000000) {
         num3 = num2 + num1 ;
         num1 = num2 ;
         num2 = num3 ;
         if ((num3%2) == 0) {
             answer = answer + num3;
         }
     }
     print(answer) ;
     
 }