
let box1 = document.getElementById("boxno1");
let box2 = document.getElementById("boxno2");
let box3 = document.getElementById("boxno3");
let box4 = document.getElementById("boxno4");
let play = document.getElementById("imglink"); 
let box5 = document.getElementById("boxno5"); 
let box6 = document.getElementById("boxno6");
let box7 = document.getElementById("boxno7");
let box8 = document.getElementById("boxno8");
let box9 = document.getElementById("boxno9");

// Click event to create input fields
play.addEventListener("click", function() {
  box1.innerHTML = `<input id="input1" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; font-size: 80px; outline:none;">`;
  box2.innerHTML = `<input id="input2" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; font-size: 80px; outline:none;">`;
  box3.innerHTML = `<input id="input3" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box4.innerHTML = `<input id="input4" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box5.innerHTML = `<input id="input5" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`; 
  box6.innerHTML = `<input id="input6" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box7.innerHTML = `<input id="input7" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box8.innerHTML = `<input id="input8" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box9.innerHTML = `<input id="input9" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; font-size: 80px; outline:none;">`;
});

// Separate button to check the win condition
let checkButton = document.createElement("button");
checkButton.innerText = "Check Win";
document.body.appendChild(checkButton);
checkButton.style.marginLeft="520px"
checkButton.style.marginTop="30px"
let RefreshButton=document.createElement("button");
RefreshButton.innerText="Refresh";
document.body.appendChild(RefreshButton);
checkButton.addEventListener("click", function() {
  let val1 = document.getElementById('input1').value;
  let val2 = document.getElementById('input2').value;
  let val3 = document.getElementById('input3').value;
  let val4 = document.getElementById('input4').value;
  let val5 = document.getElementById('input5').value;
  let val6 = document.getElementById('input6').value;
  let val7 = document.getElementById('input7').value;
  let val8 = document.getElementById('input8').value;
  let val9 = document.getElementById('input9').value;
  // Check if the values are the same and not empty
  if ((val1 !== "" && val1 === val5 && val5 === val9) || (val1 !== ""  &&  val1 === val4 && val4 === val7) || ((val1 !== "" &&  val1 === val2 && val2 === val3))) {
    prompt("THE WINNER OF THIS GAME IS: ",val1);
  } 
  else if((val2 !== "" && val2 === val5 && val5 === val8) || (val2 !== ""  &&  val1 === val2 && val2 === val3)){
     prompt("THE WINNER OF THIS GAME IS: ",val2);
  }
  else if ((val3 !== "" && val3 === val6 && val6 === val9) || (val3 !== "" &&  val3 === val5 && val5 === val7) || (( val2 !== ""  &&  val1 === val2 && val2 === val3))) {
    prompt("THE WINNER OF THIS GAME IS: ",val3);
  }
  else if((val5 !== "" && val5 === val4 && val5 === val6) || (val5 !== ""  &&  val5 === val2 && val5 === val8)){
     prompt("THE WINNER OF THIS GAME IS: ",val5);
  }
  else if((val7 !== "" && val7 === val5 && val5 === val3) || (val7 !== ""  &&  val7 === val4 && val4 === val1) || (val7 !== "" && val7===val8 && val8===val9)){
     prompt("THE WINNER OF THIS GAME IS: ",val7);
  }
  else {
    prompt("Keep trying!");
  }
});
RefreshButton.addEventListener("click",function(){
  box1.innerHTML = `<input id="input1" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; font-size: 80px; outline:none;">`;
  box2.innerHTML = `<input id="input2" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; font-size: 80px; outline:none;">`;
  box3.innerHTML = `<input id="input3" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box4.innerHTML = `<input id="input4" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box5.innerHTML = `<input id="input5" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`; 
  box6.innerHTML = `<input id="input6" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box7.innerHTML = `<input id="input7" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box8.innerHTML = `<input id="input8" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; outline:none; font-size: 80px;">`;
  box9.innerHTML = `<input id="input9" style="border:none; background-color: rgb(240, 175, 78); overflow: hidden; font-size: 80px; outline:none;">`;
});
