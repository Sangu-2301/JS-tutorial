var a= 5;
let b =6;
const c = 9
if(true){
    var a= 50
    let b =19;
    const c =15
    console.log("inner:",b);
    console.log("inner:",a);
}
// *****yaha par var ki value 50 aa rhi j ki block ka hai
console.log(a);
    console.log(b);
    console.log(c);

    function one(){
        const users="riya"

        function two(){
            const website =" youtube"
            console.log(users);
            console.log(website);
       
        }
       
        // two()
        // console.log(users);
   
    }
    
    //  one()

    //  *********interesting function
    
//    **1. // 
console.log(adone(6));
function adone(num){
    return (num+1)
}
// **2.
//  const  adone2= function(num2){
//  return num2+1
//  }
//  adone2(8)


    // notes***********closure
    // nested function me child parent ke variable ko access kar sakta hai par parent function nahi kar sakta
