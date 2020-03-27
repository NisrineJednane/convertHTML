//fcc challenge: 

function convertHTML(str) {

  //split string and log into new var
  let newStr = str.split("");
  
  //loop through var
  for (let i = 0; i < newStr.length; i++) {
  
    //use switch statement to assign the specific characters to their HTML equivalents
    switch (newStr[i]) {
      case "<":
        newStr[i] = "&lt;";
        break;
      case "&":
        newStr[i] = "&amp;";
        break;
      case ">":
        newStr[i] = "&gt;";
        break;
      case '"':
        newStr[i] = "&quot;";
        break;
      case "'":
        newStr[i] = "&apos;";
        break;
    }
  }
  
  //join the string and return the result 
  newStr = newStr.join("");
    return newStr;
}
