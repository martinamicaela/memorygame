//initialization of variable
let uncoveredCards=0;
let card1=null;
let card2=null;
let firstResult=null;
let secondResult=null;
let movements=0;
let rightAnswers=0;
let timer=false;
let timerTotal=30;
let regressiveTime=null;


// pointing document HTML 
let showMovements=document.getElementById('movements');
let showRightAnswers=document.getElementById('right-answers');
let showTime=document.getElementById('timeLeft');


//random numbers generation 
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers= numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers);

//functions 
function countTime(){
  regressiveTime= setInterval(() => {
    timerTotal--;
    showTime.innerHTML=`Time: ${timerTotal} seconds`
    if(timerTotal==0){
      clearInterval(regressiveTime);
      
    }
  }, 1000);
};

//main function
function uncover(id){
  if(timer==false){
    countTime();
    timer=true;
  }
    uncoveredCards++;
    console.log(uncoveredCards)
  if(uncoveredCards==1){
    //show first number
    card1=document.getElementById(id);
    //keep in firstResult to compare later with secondResult
    firstResult= numbers[id];
    card1.innerHTML= firstResult;

    // disabled first button
    card1.disabled=true;
  }else if(uncoveredCards==2){
    //show second number
    card2=document.getElementById(id);
    secondResult=numbers[id];
    card2.innerHTML=secondResult;
     // disabled second button
     card2.disabled=true;
     //increment movements
     movements++; 
    showMovements.innerHTML=`Movimientos:${movements}`;
    if(firstResult==secondResult){
     //card counter back to zero
     uncoveredCards=0; 
     // right answers
        rightAnswers++;
        showRightAnswers.innerHTML=`Right Answers:${rightAnswers}`;
        if (rightAnswers==8){
          showRightAnswers.innerHTML=`Right Answers:${rightAnswers}🥳`;
          showMovements.innerHTML=`Movimientos:${movements}💃`;
        }
        }else{
      //show briefly and then cover 
      setTimeout(() => {
        card1.innerHTML=' ';
        card2.innerHTML=' ';
        card1.disabled= false;
        card2.disabled= false;
        uncoveredCards= 0; 
      }, 1500);
    }
  }
}