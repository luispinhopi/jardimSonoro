/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.material-icons')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 }
}

function TranslateFaqsENG() {
	
	var FAQSPT = document.getElementById("FAQSPT");
	var FAQSUK = document.getElementById("FAQSUK");
	
	var ptFlag = document.getElementById("ptFlag");
	var ukFlag = document.getElementById("ukFlag");
	
/* FAQS para English */	
    FAQSPT.style.display = "none";
  
    FAQSUK.style.display = "block";
	
	ukFlag.style.display = "none";
	
	ptFlag.style.display = "block";
	
}

function TranslateFaqsPT() {
	
	var FAQSPT = document.getElementById("FAQSPT");
	var FAQSUK = document.getElementById("FAQSUK");
	
	var ptFlag = document.getElementById("ptFlag");
	var ukFlag = document.getElementById("ukFlag");
	
/* FAQS para English */	
    FAQSPT.style.display = "block";
  
    FAQSUK.style.display = "none";
	
	ptFlag.style.display = "none";
	
	ukFlag.style.display = "block";
	
}