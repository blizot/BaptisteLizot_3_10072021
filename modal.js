function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
    	x.className += ' responsive';
  	} else {
    	x.className = 'topnav';
  	}
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = 'block';
}

// close modal
const modalCloseButton = document.getElementById('closeModal');
modalCloseButton.addEventListener('click', () => {
	modalbg.style.display = 'none';
});

// validate content
function validate() {
	let formFirstName = document.forms['book']['first'].value;
	let formLastName = document.forms['book']['last'].value;
	let formEmail = document.forms['book']['email'].value;
	let formBirthDate = document.forms['book']['birthdate'].value;
	let formPreviousConstestAmount = document.forms['book']['quantity'].value;
	let formPreviousCities = document.forms['book']['location'].value; 
	let formAcceptConditions = document.forms['book']['checkbox1'].value;
	let formSubscribeNewsletter = document.forms['book']['checkbox2'].value;
}