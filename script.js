const bill = document.getElementById('bill');
const costB = document.getElementById('costB');
const tips = document.querySelectorAll('.tips');
const customNum = document.getElementById('customNum');
const peopleNumber = document.getElementById('peopleNumber');
const resetAll = document.getElementById('resetAll');
const dollarTip = document.getElementById('dollarTip');
const totalPer = document.getElementById('totalPer');
const errorZ = document.querySelector(".errorZ");

let percent ;



function costBill(costBB){
  if(percent && peopleNumber.value && costB.value){
    const tip = Number(costB.value) * percent / 100 ;
    const total = Number(costB.value) + tip ;
    const tipAmount= total / Number(peopleNumber.value);

    dollarTip.innerHTML = '$' +  (tip / +peopleNumber.value).toFixed(2);
    totalPer.innerHTML = '$' + (total / +peopleNumber.value).toFixed(2);
  }
}


 function percentCost(button){

  
  
  // button.style.backgroundColor = '#26C2AE';
     




  if(percent && peopleNumber.value && costB.value){
    const tip = +costB.value * button.value / 100;
    const total = +costB.value + tip;
    const tipAmount= total / Number(peopleNumber.value);

    dollarTip.innerHTML = '$' +  (tip / +peopleNumber.value).toFixed(2);
    totalPer.innerHTML = '$' + (total / +peopleNumber.value).toFixed(2);
  }
    percent= button.value;
    
 }

 function customCost(inputC){
    
   const tip = +costB.value * inputC.value /100 ;
   const total = +costB.value + tip;
   const tipAmount= total / Number(peopleNumber.value);
   dollarTip.innerHTML = '$' +  (tip / +peopleNumber.value).toFixed(2);
   totalPer.innerHTML = '$' + (total / +peopleNumber.value).toFixed(2);
 }

 function calculateNum(typeNumberOfP){
  if (percent && peopleNumber.value && costB.value){
      const tip =  Number(costB.value) * percent / 100 ;
      const total = +costB.value + tip ;
      const tipAmount= total / Number(peopleNumber.value);
    
    dollarTip.innerHTML = '$' +  (tip / +peopleNumber.value).toFixed(2);
    totalPer.innerHTML = '$' + (total / +peopleNumber.value).toFixed(2);
  }
  errorMessage();
 }


 function errorMessage (){
  if(peopleNumber.value <= 0 ){
    errorZ.style.display="block";
    peopleNumber.style.border = "2px solid red";
    
  } else {
    errorZ.style.display="none";
    peopleNumber.style.border = ""
  }
 }


function resetContent(reset) {
  dollarTip.innerHTML = '$0.00'
  totalPer.innerHTML = '$0.00'
  var current = document.getElementsByClassName("active");
  if(current.length != 0){
  current[0].className = current[0].className.replace(" active", "");
  }
}



for (var i = 0; i < tips.length; i++) {
  
  tips[i].addEventListener("click", function() {
    
  var current = document.getElementsByClassName("active");
  
  if(current.length != 0){
  current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  
  });
  
}

