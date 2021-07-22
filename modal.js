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
	const bookForm = document.getElementById('bookForm');
	// bookForm.addEventListener('submit' () => preventDefault());

	// let isFirstName = document.forms['book']['first'].validity.valid;
	// let isLastName = document.getElementById('last').validity.valid;
	// let isEmail = document.getElementById('email').validity.valid;
	// let isBirthDate = document.getElementById('birthdate').validity.valid;
	// // let isPreviousConstestAmount = getElementById('quantity').validity.valid;
	// // let isPreviousCities = document.getElementById('location').validity.valid; 
	// let isAcceptConditions = document.getElementById('checkbox1').validity.valid;

	let test = document.getElementById('first');
	console.log(test);
	// console.log(test.valid);

	if ( !isFirstName && !isLastName && !isEmail && !isBirthDate && !isAcceptConditions) {
		bookForm.preventDefault();
	}
}