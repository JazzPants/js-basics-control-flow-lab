let x;

function scuberGreetingForFeet(x){
  // Write your code here!
  if (x <= 400) {
    return "This one is on me!"
  }
  else if (x > 400 && x <= 2000) {
    return "Let me calculate your fare."
  }
  else if (x > 2000 && x < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else { // if (x > 2500) 
    return "No can do."
  }
}

console.log(scuberGreetingForFeet(2501));
//no operation for x > 400 && x <= 2000 in the exercise, so I added one



function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good."
  }
  else if (city !== "NYC") {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous") { //case sensitive
    return "Thank you so much."
  }
  else if (tip === "not as generous") {
    return "Thank you."
  }
  else { 
    return "Bye."
  }
}

//else if (tip === "anything else")  doesn't work, as 
//test requires anything other than a "generous
//or not as generous tip" to be responded with bye