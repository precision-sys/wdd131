
function displayError(msg) {
    const errorContainer = document.querySelector('.errors');
    if (errorContainer) {
        errorContainer.textContent = msg;
    } else {
        alert(msg);
    }
}

function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    displayError('');

    const cardNumber = document.querySelector('#creditCardNumber');
    const cardNum = cardNumber.value.trim();

    if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
  }

const expYear = Number(document.querySelector('#year').value);
const expMonth = Number(document.querySelector('#month').value);
const currentDate = new Date();
const fullYear = 2000 + expYear;

if (fullYear < currentDate.getFullYear() || (fullYear === currentDate.getFullYear() && expMonth <= currentDate.getMonth()+1))
{errorMsg += 'Card is expired\n';}

if (errorMsg !== '') {displayError(errorMsg); return;}

const formContainer = document.getElementById('creditCardForm');
formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>'
}

document.querySelector('#creditCardForm')
.addEventListener('submit', submitHandler);






