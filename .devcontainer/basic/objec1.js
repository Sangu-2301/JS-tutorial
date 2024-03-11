// sigleton 

// object literal
// const showSymbol =Symbol("key1")

// const mySelf ={
//     name :"sangeeta",
//     "full name":"sangeeta kumari",
//     [showSymbol]:"key1",
//     class:12,
//     school:"sunrise",
//     isavailable:false

// }
// console.log(mySelf["full name"]);
// const isavailable= mySelf
// console.log(mySelf);

const welcomeUser ={
    name:"reena",
    email:"sn@p123",
    form:{
        std:5,
        sub:"Science",
         
    }
}
// console.log(welcomeUser.form);

const object1 ={1:"a",2:"b"}
const object2 ={2:"c",3:"d"}
const object3 ={5:"e",6:"f"}
// const object4 =Object.assign({},object1,object2,object3)
// console.log(object4);
const object4 ={...object1,...object2,...object3}
// console.log(object4);

const tinderUser ={}
tinderUser.id =1234,
tinderUser.name="sangeeta",
tinderUser.email="@12234"

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('id'));


// ********object destructuring
const course={
    courseName:"mca",
    price:999,
}
// data destructuring
// const {courseName}=course    
const {courseName:courseN}=course    

console.log(courseN);







