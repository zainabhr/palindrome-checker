const divContainer = document.getElementById("box");
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");


function clearString(str){
    let regex = /[^A-Za-z0-9]/g;
    return str.replace(regex,"");
};

const palindrome = (str) => {
    str = clearString(str);
    str = str.toLowerCase();
    let reverseString = "";
    for(let i = 1; i <= str.length; i++){
      reverseString += str[str.length - i]
    }
    if(reverseString == str){
      return true;
    }else{
      return false;
    }
};

const clearInput = (target) =>{
    target.value= "";
}

const getInputString = () => {
    let input = textInput.value;
    if (textInput.value == "") {
      alert("Please input a value");
     return false;
    }
    
    else if(palindrome(input)){
      result.style.display = "block";
      divContainer.style.height = "245px";
      result.style.padding = "0 0 12px 0";
      result.innerHTML = `${input} is a palindrome!`;
      
    }else{
      result.style.display = "block";
      divContainer.style.height = "220px";
      result.innerHTML = `${input} is not a palindrome!`;
      
    }
    clearInput(textInput);
}

checkButton.addEventListener("click",getInputString)