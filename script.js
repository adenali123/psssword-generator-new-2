var generateBtn = document.querySelector("#generate");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
let lowerCase = "abcdefghijklmnopqrstuvwyz";
let numbers = "0123456789";
let Symbols = "\!\"£$%^&*?()_[]"

function wordlength() {
  let passwordlength = prompt("please enter number between 8 - 128");
   if(passwordlength < 8 || passwordlength > 128) {
    alert("password either to short or too high");
    wordlength();
  }else if(isNaN(passwordlength)){ 
    alert("please enter numbers");
    wordlength();
  }else{
    let toInteger = parseInt(passwordlength); 
    return toInteger;
}
}

function criteria(){
 let arrays = []; 
  let upperCase= confirm("do you want to include Capital characters");
        if (upperCase== true){
          arrays.push(upperCase); 
        }
      let lowerCase = confirm(" Do you want to include lowercase characters");
      if (lowerCase == true){
        arrays.push(lowerCase); 
      }
      let numbrs = confirm("Do you want to include numbers");
      if (numbrs== true){
        arrays.push(numbers) 
      }
      let special = confirm(" Do you want to include Symbols ");
      if (special == true){
        arrays.push(Symbols) 
      }
      if(arrays.length === 0){ 
        alert("you must have at least one criteria");
        criteria(); 
      }
      return arrays;
    }

    function generatePassword(arrayLength, numLength){ 
      var text ="";
      var toNumb = numLength;
      var toArrs = arrayLength.join(""); 
      for(let i=0;  i < toNumb; i++){
        text += toArrs.charAt(Math.floor(Math.random()*toArrs.length));
        console.log(text);
      }
      
      return text;
    }

  function writePassword(){
   var noWords = wordlength();
   var orderList = criteria();
  var password = generatePassword(orderList, noWords);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

generateBtn.addEventListener("click", writePassword);