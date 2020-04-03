const EMAIL_REGEX = /^\S+@\S+\.\S+$/; // custom email regex (not precise)

const $form = document.getElementById('form');
const $emailField = document.getElementById('email-field');
const $emailErrorMessage = $emailField.getElementsByClassName('error-message')[0];

$form.setAttribute('novalidate', '');
$form.addEventListener('submit', e => {
    e.preventDefault();

    const data = new FormData($form);
    const email = data.get('email');
    if (email.trim() === '') {
        $emailErrorMessage.textContent = 'Whoops! It looks like you forgot to add your email';
        $emailField.classList.add('invalid');
    } else if (!EMAIL_REGEX.test(email)) {
        $emailErrorMessage.textContent = 'Please provide a valid email address';
        $emailField.classList.add('invalid');
    } else {
        $emailField.classList.remove('invalid');
    }
});
