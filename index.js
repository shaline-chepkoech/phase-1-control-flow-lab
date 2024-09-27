function scuberGreetingForFeet(someNumber){
  let result;
  if (someNumber <400)
  {
    result = 'This one is on me!'
  }
  else if (someNumber >400 && someNumber <2000 ){
    result = 'That will be twenty bucks.'
  }
  else if (someNumber >=2000 && someNumber <2500 ){
    result = 'I will gladly take your thirty bucks.'
  }
  else if (someNumber >=2000){
    result = 'No can do.'
  }  

  return result
  scuberGreetingForFeet(199)
}
function ternaryCheckCity(city){
  const result = city === "NYC" ? "Ok, sounds good." : "No go." 
  return result
}

function switchOnCharmFromTip(tip){
  
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
        case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
   

  }
  
