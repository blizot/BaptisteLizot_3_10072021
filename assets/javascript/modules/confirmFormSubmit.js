// give feedback to the user on succesful form submission
function confirmFormSubmit() {
    const formContent = document.getElementById('form-content');

    formContent.innerHTML = '<p>Merci d\'avoir soumis vos informations d\'inscription!</p><button class="btn-submit closeModal">Fermer</button>';
}

export default confirmFormSubmit;
