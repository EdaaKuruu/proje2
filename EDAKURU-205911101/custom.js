var namee=document.getElementById("Namee"); 
var surname=document.getElementById("Surname"); 
var number=document.getElementById("Number"); 
var pickupdate=document.getElementById("Pickupdate"); 
var returndate=document.getElementById("Returndate"); 
var vehicletype=document.getElementById("Vehicletype"); 



function gonder()
{
  localStorage.setItem(namee.id,namee.value);
  localStorage.setItem(surname.id,surname.value);
  localStorage.setItem(number.id,number.value);
  localStorage.setItem(pickupdate.id,pickupdate.value);	
  localStorage.setItem(returndate.id,returndate.value);
  localStorage.setItem(vehicletype.id,vehicletype.value);
}

/*function listele()
{
  var tdm1=document.getElementById("tdm2");
tdm1.textContent=localStorage.getItem("Namee");
}*/