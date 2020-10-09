//Alert for the Character's name
function validateName(){
	let messageName = document.getElementById("chName").value;
  if (messageName==""){
    alert("Greetings Random Stranger ! \n \n You forgot to chose a name.");
  }
  else {alert("Greetings " + messageName + " ! \n \n Choose wisely.");
        afficherName;}
}


//Alert for the City's name
function validateCityName(){
	let messageCity = document.getElementById("cityName").value;
	let messageName = document.getElementById("chName").value;
  if (messageName=="", messageCity==""){
    alert("Greetings Random Stranger, you're from the Invisible City ! \n \n You forgot to name your city.");
  }
	else alert(messageName + ", you're from " + messageCity + " ! \n \n Please continue.");
}


//Alert for the Pet's name
function validatePetName(){
	let messagePet = document.getElementById("petName").value;
	let messageName = document.getElementById("chName").value;
	let messageCity = document.getElementById("cityName").value;
  if (messageName=="", messageCity=="", messagePet==""){
    alert("Greetings Random Stranger, you're from the Invisible City, you named your pet NotThere ! \n \n You forgot to name your pet.");
  }
  else {alert(messageName + ", from " + messageCity + ", you named your pet " + messagePet + " ! \n \n Please continue.");}
}



//STATS
let techPoints = 0
let magicPoints = 0
let stealthPoints = 0
let strenghtPoints = 0 

function validateCity() {
  if (document.getElementById("techCity").checked == true){
        techPoints += 5;
        console.log("techPoints "+techPoints);
  }
  else if (document.getElementById("castleCity").checked == true){
        strenghtPoints += 5;
        console.log("strenghtPoints "+strenghtPoints);

  }
  else if (document.getElementById("forestCity").checked == true){
        stealthPoints += 5;
        console.log("stealthPoints "+stealthPoints);
  }
  else if (document.getElementById("magicCity").checked == true){
        magicPoints += 5;
        console.log("magicPoints "+magicPoints);
  }
}

function validateRace() {
  if (document.getElementById("dwarf").checked == true){
        techPoints += 3;
        console.log("techPoints "+techPoints);
  }
  else if (document.getElementById("orc").checked == true){
        strenghtPoints += 3;
        console.log("strenghtPoints "+strenghtPoints);

  }
  else if (document.getElementById("human").checked == true){
        stealthPoints += 3;
        console.log("stealthPoints "+stealthPoints);
  }
  else if (document.getElementById("elf").checked == true){
        magicPoints += 3;
        console.log("magicPoints "+magicPoints);
  }
}

function validatePet() {
  if (document.getElementById("crow").checked == true){
        techPoints += 1;
        console.log("techPoints "+techPoints);
  }
  else if (document.getElementById("bear").checked == true){
        strenghtPoints += 1;
        console.log("strenghtPoints "+strenghtPoints);

  }
  else if (document.getElementById("rat").checked == true){
        stealthPoints += 1;
        console.log("stealthPoints "+stealthPoints);
  }
  else if (document.getElementById("phoenix").checked == true){
        magicPoints += 1;
        console.log("magicPoints "+magicPoints);
  }
}

function validateWeapon() {
  if (document.getElementById("gauntlet-basic").checked == true){
        techPoints += 4;
        console.log("techPoints "+techPoints);
        afficherTech(techPoints);
  }
  else if (document.getElementById("sword-basic").checked == true){
        strenghtPoints += 4;
        console.log("strenghtPoints "+strenghtPoints);
        afficherStr(strenghtPoints);

  }
  else if (document.getElementById("bow-basic").checked == true){
        stealthPoints += 4;
        console.log("stealthPoints "+stealthPoints);
        afficherSth(stealthPoints);
  }
  else if (document.getElementById("spellbook-basic").checked == true){
        magicPoints += 4;
        console.log("magicPoints "+magicPoints);
        afficherMag(magicPoints);
  }
}

//SHOW STATS - I have to create div to show results
function afficherTech(techPoints){
  console.log(techPoints);
  document.getElementById("techResult").innerHTML=techPoints;
}
function afficherStr(sumStr){
  console.log(strenghtPoints);
  document.getElementById("strResult").innerHTML=sumStr;
}
function afficherTech(sumSth){
  console.log(stealthPoints);
  document.getElementById("sthResult").innerHTML=sumSth;
}
function afficherTech(sumMag){
  console.log(magicPoints);
  document.getElementById("magResult").innerHTML=sumMag;
}


//SHOW NAME - EVENT "Submit" Button in #name-character div
let sumName = document.getElementById(chName).value
function afficherName(sumName){
  console.log(sumName);
  document.getElementById("name-character").innerHTML=sumName;
}



