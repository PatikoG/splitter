const bill = document.getElementById('bill');
const costB = document.getElementById('costB');
const tips = document.querySelectorAll('.tips');
const customNum = document.getElementById('customNum');
const peopleNumber = document.getElementById('peopleNumber');
const resetAll = document.getElementById('resetAll');

let percent ;



function costBill(){

}


 function percentCost(button){
   const result = costB.value * button.value / 100 
    
    percent= button.value;
 }

 function customCost(inputC){
   const customResult = costB.value * inputC.value /100 
  
 }

 function calculateNum(typeNumberOfP){
    const tip =  costB.value * percent / 100 ;
    const total = +costB.value + tip ;
    const tipAmount= total / peopleNumber.value;
    console.log(tipAmount);
 }


// bill (50 * 10%) /5