//Alert for the Character's name
let nameAlert = document.querySelector("#okName")

nameAlert.addEventListener('click', () =>{

	let messageName = document.querySelector("#chName").value;
	alert("Greetings " + messageName + "! \n \n Choose wisely.");
}
)

//Alert for the City's name
let cityAlert = document.querySelector("#okCityName")

cityAlert.addEventListener('click', () =>{

	let messageCity = document.querySelector("#cityName").value;
	let messageName = document.querySelector("#chName").value;
	alert(messageName + ", you're from " + messageCity + " ! \n \n Please continue.");
}
)

//Alert for the Pet's name
let petAlert = document.querySelector("#okPetName")

petAlert.addEventListener('click', () =>{

	let messagePet = document.querySelector("#petName").value;
	let messageName = document.querySelector("#chName").value;
	let messageCity = document.querySelector("#cityName").value;
	alert(messageName + ", from " + messageCity + ", you named your pet " + messagePet + " ! \n \n Please continue.");
}
)

//SUM STATS

let 


//Show select weapons
var FormStuff = {
  
  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },
  
  bindUIActions: function() {
    ("input[type='radio']").on("change", this.applyConditionalRequired);
  },
  
  applyConditionalRequired: function() {
    
    (".require-if-active").each(function() {
      var el = (this);
      if ((el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
    
  }
  
};

FormStuff.init();

