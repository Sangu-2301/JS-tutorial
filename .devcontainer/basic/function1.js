function addNumber(number1,number2){
    return number1+number2
     }
     console.log(addNumber(3,4));

// let result =addNumber(3,4)   (********1. is tarah se bhi print kara sakte hai)
// console.log(result);
     
// function LoginUserName(userName){
//     return `${userName} just logged in `
// }
// console.log(LoginUserName("sangeeta"));


// let user=LoginUserName("sangeeta")
// console.log("user:",user); (****1.hum aishe bhi kar sakte jhai)
// ******jab hum kuch pass nahi karte hai to "undefined aata hAI"
// statement ke baad return sirf likh ne se kuch bhi print hi nahi karega

// function LoginUserName(userName){
//     if(userName ===undefined ){
//         console.log("please enter your user name");  
//         return
//         // return likhne se print nahi karta haiaage ka
//    }
//        return `${userName} just logged in `
//     }
//     console.log(LoginUserName());
    //  **********other way 
    function LoginUserName(userName){
            if(!userName ){
                console.log("please enter your user name");  
                return
                // return likhne se print nahi karta haiaage ka
           }
               return `${userName} just logged in `
            }
            console.log(LoginUserName());
            const biodata ={
                name:"sang",
                age:20

             }

            function user(addyourself){
                console.log(`username ${addyourself.name} and your age is ${addyourself.age}`)
                
            }
            user(biodata)
            
const  newArray=[200,300,400]
// function showAmount(newAmount){

//     return newAmount[2]
    
// }
function showAmount(newArray){

    return newArray[2]
    // return newArray
}
console.log(showAmount(newArray));
console.log(showAmount([200,300,400]));
           
        

    