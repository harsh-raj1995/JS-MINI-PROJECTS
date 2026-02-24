let btn = document.querySelector("button")
let p = document.querySelector("p")
let random=0;

btn.addEventListener("click",()=>{
  alert('LOADING CLICK TO VIEW RESULT')
  random=Math.random()*10
  if(random<5){
    p.innerHTML = '<img src="https://www.pikpng.com/pngl/b/176-1762234_coin-clipart-quarter-tail-cash-png-download.png" alt="HEADS" width="200px">' + '<BR>its tails';

  }else{
    p.innerHTML='<img src="https://www.pngarts.com/files/3/Silver-Coin-Transparent-Background-PNG.png" alt="Classic Head $2 - Coin Front Png@nicepng.com" width="200px">'
    +'<BR>its heads';
  }
})