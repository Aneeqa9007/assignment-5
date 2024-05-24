// table of 10

let a = 1

let b = 10
while (a <= 10) {
    console.log(b + " X " + a + " =", b * a)
    a = a + 1
}


let check = 72

 let i = 2
 let flag = false

 while(i<check){
     if(check%i==0){
         flag = true
     }
     i++ 
 }
 if(flag == false){
     console.log(check,'prime')
 }else{
     console.log(check,'not a prime')
 }



