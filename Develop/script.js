var generateBtn = document.getElementById("#generate");

var onlyUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var onlyLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var onlySpecialcase = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var onlyNumeric = [0,1,2,3,4,5,6,7,8,9];


function generateOptions() {
  var length = parseInt(prompt("How many charecters do you want your password to be?"));

  if (length < 8) {
  alert('The password must be at least 8 characters!');
  return;
}

if (length > 128) {
  alert('The password must be at least 128 characters!');
  return;
}

var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");

var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");

var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");

var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
    
    
if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
    alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
    return;
 }
  var passwordOption = {
    length: length,
    upperCase: shouldIncludeUppercase,
    lowerCase: shouldIncludeLowercase,
    numeric: shouldIncludeNumeric,
    specialCharacters: shouldIncludeSpecialCharacters,
  };
  return passwordOption;
}
function generatPassword() {

  var option = generateOptions();
  console.log(option);

  var passwordHub = [];
  console.log(passwordHub);

  if (option.specialCharacters) {
    for (i = 0; i < onlySpecialcase.length; ++i) {
      passwordHub.push(onlySpecialcase[i]);
    }
  } 
if (option.numeric) {
  for (i = 0; i < onlyNumeric.length; ++i) {
    passwordHub.push(onlyNumeric[i]);
  }
}
if (option.lowerCase) {
  for (i = 0; i < onlyLowercase.length; ++i) {
    passwordHub.push(onlyLowercase[i]);
  }
}

if (option.upperCase) {
  for (i = 0; i < onlyUppercase.length; ++i) {
    passwordHub.push(onlyUppercase[i]);
  }
}

 var finalPassword = [];
 
 for (var i = 0; i < option.length; ++i) {
   var randomPassword = Math.floor(Math.random() * Math.floor(passwordHub.length));
   finalPassword.push(passwordHub[randomPassword]);
 }
 console.log(finalPassword);

 var writePassword = finalPassword.join('');
 console.log(writePassword);

 document.getElementById("password").textContent = writePassword;
}
 

generate.addEventListener('click', generatPassword);
