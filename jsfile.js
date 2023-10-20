 function beforeSubmit(){
let elementOut =document.querySelector(".outputdate");
let elementIn =document.querySelector(".inputdate");
console.log(elementIn.value);
let formatedDate=new Date(elementIn.value).toLocaleDateString("en-IN");
 elementOut.value=formatedDate;
 console.log(elementOut.value);
}