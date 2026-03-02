let head= document.querySelector(".head p");
let btn= document.querySelector(".change");
let btn2= document.querySelector(".conversion");
let input=document.querySelector("input")
let P2=document.querySelector("P2")
let v=0;
btn.addEventListener("click",(e)=>{
  e.preventDefault();
  if(v==0){
    v=1;
    head.innerHTML="Convert into Fahrenheit";
    btn.innerHTML="Celcius"
  }else{
    v=0;
    head.innerHTML="Convert into Celcius";
    btn.innerHTML="Fahrenheit";
  }
})

btn2.addEventListener('click',(e)=>{
  e.preventDefault();
  let inp=input.value;
  if(v==0){
    P2.innerHTML="Celcius : "+inp +"C<br>Fahrenheit : "+ (((inp)*9/5)+32)+"F";
  }
  else{
    P2.innerHTML="Fahrenheit : "+inp +"F<br>Celcius : "+ (((inp)-32)*5/9)+"C";
  }
  input.value="";
})