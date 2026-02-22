let player=0
let random=0
let r=document.querySelector('.rock')
let p=document.querySelector('.paper')
let s=document.querySelector('.scissor')
let result =document.querySelector('.result')
let w=0;
let l=0;
let d=0;
let score=document.querySelector('.score')
let reset=document.querySelector('.reset')

r.addEventListener('click',()=>{
  random= (Math.random()*10)
  if(random<4){
    result.innerHTML='<h2 class="result"> YOUR CHOICE: 👊 PC CHOICE :👊 →DRAW</h2>';
    d++
  }else if(random<7){
    result.innerHTML='<h2 class="result"> YOUR CHOICE: 👊 PC CHOICE :🤚 →LOOSE</h2>';
    l++
  }else{
    result.innerHTML='<h2 class="result"> YOUR CHOICE: 👊 PC CHOICE :✌️ →WON</h2>';
    w++
  }
  score.innerHTML='<p class="score">YOUR SCORE: '+w+'<br>PC SCORE: '+l+'<br>DRAW: '+d+'</p>';
  return
})
p.addEventListener('click',()=>{
  random= (Math.random()*10)
  if(random<4){
    result.innerHTML='<h2 class="result"> YOUR CHOICE: 🤚 PC CHOICE :👊 →WON</h2>';
    w++
  }else if(random<7){
    result.innerHTML='<h2 class="result"> YOUR CHOICE: 🤚 PC CHOICE :🤚 →DRAW</h2>';
    d++
  }else{
    result.innerHTML='<h2 class="result"> YOUR CHOICE: 🤚 PC CHOICE :✌️ →LOOSE</h2>';
    l++
  }
    score.innerHTML='<p class="score">YOUR SCORE: '+w+'<br>PC SCORE: '+l+'<br>DRAW: '+d+'</p>';
    return
})
s.addEventListener('click',()=>{
  random= (Math.random()*10)
  if(random<4){
    result.innerHTML='<h2 class="result"> YOUR CHOICE: ✌️ PC CHOICE :👊 →LOOSE</h2>';
    l++
  }else if(random<7){
    result.innerHTML='<h2 class="result"> YOUR CHOICE: ✌️ PC CHOICE :🤚 →WON</h2>';
    w++
  }else{
    result.innerHTML='<h2 class="result"> YOUR CHOICE: ✌️ PC CHOICE :✌️ →DRAW</h2>';
    d++
  }
    score.innerHTML='<p class="score">YOUR SCORE: '+w+'<br>PC SCORE: '+l+'<br>DRAW: '+d+'</p>';
    return
})
reset.addEventListener('click',()=>{
  l=0;
  w=0;
  d=0;
  result.innerHTML='<h2 class="result">PLAY TO GET RESULT.</h2>';
  score.innerHTML='<p class="score">YOUR SCORE: '+w+'<br>PC SCORE: '+l+'<br>DRAW: '+d+'</p>';
  return
})