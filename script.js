const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const symbols="~!@#$%^&*()-_+=/";

const getRandomData=(dataSet)=>{
   return dataSet[Math.floor(Math.random()*dataSet.length)]
}

// Selectors
const passBox=document.getElementById('pass-box');
const upperInput=document.getElementById('upper-case');
const lowerInput=document.getElementById('lower-case');
const numberInput=document.getElementById('numbers');
const symbolInput=document.getElementById('symbols');
const totalChar=document.getElementById('total-char');




const generatePassword=(password="")=>{
    if(upperInput.checked){
        password+=getRandomData(upperCase);
    }
    if(lowerInput.checked){
        password+=getRandomData(lowerCase);
    }
    if(numberInput.checked){
        password+=getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password+=getRandomData(symbols);
    }
    if(password.length<totalChar.value){
        return generatePassword(password);
    }
    passBox.innerText=truncateString(password,totalChar.value);
}
generatePassword();

document.getElementById('btn').addEventListener('click',function() {
    generatePassword();
})

function truncateString(str,num){
    if(str.length>num){
        let subStr=str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}