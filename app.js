const passwordBox = document.getElementById("Password");
const lenght = 8;
const upparCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%&*()_<>-+{}";

const allChars = upparCase + lowerCase + numbers + symbol;


function createPassword(){
    let password = "";
    password += upparCase[Math.floor(Math.random() * upparCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)]; 
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    } 
    passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}