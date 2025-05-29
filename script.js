const form = document.querySelector(".form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postalCode = document.querySelector("#postal-code");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirmation");

const emailErrorMessage = document.querySelector(".email-err");
const countryErrorMessage = document.querySelector(".country-err");
const postalErrorMessage = document.querySelector(".postal-err");
const passwordErrorMessage = document.querySelector(".password-err");
const passwordConfirmErrorMessage = document.querySelector(".password-confirm-err");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fields = [email, country, postalCode, password, passwordConfirm]
    const invalidFields = fields.filter(field => !field.validity.valid)

    if (invalidFields.length === 0) {
        console.log("No issues. Form submitted")
    } else {
        invalidFields.forEach(field => {
            console.log(`Error. ${field.validationMessage}`)
        })
    }
});

email.addEventListener("input", () => {
    email.setCustomValidity(""); // clear any existing error

    // Check 'required' attribute
    if (email.validity.valueMissing) {
        email.setCustomValidity("Enter an email");
    // Check 'type' attribute
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity("Enter a correct email format");
    // Check 'minlength' attribute
    }
    emailErrorMessage.textContent = email.validationMessage;
});



country.addEventListener("input", () => {
    country.setCustomValidity("");

    // Check 'pattern' attribute
    if (country.validity.patternMismatch) {
        country.setCustomValidity("Text only")
    } else if (country.validity.valueMissing) {
        country.setCustomValidity("Enter a country")
    } 
    countryErrorMessage.textContent = country.validationMessage;
})

postalCode.addEventListener("input", () => {
    postalCode.setCustomValidity("");

    if (postalCode.validity.typeMismatch) {
        postalCode.setCustomValidity("Numbers only")
    } else if (postalCode.validity.patternMismatch) {
        postalCode.setCustomValidity("Must contain exactly 4 numbers")
    } else if (postalCode.validity.valueMissing) {
        postalCode.setCustomValidity("Enter a postal code")
    }

    postalErrorMessage.textContent = postalCode.validationMessage
})

password.addEventListener("input", () => {
    password.setCustomValidity("");

    if (password.validity.valueMissing) {
        password.setCustomValidity("Enter a password")
    } else if (password.validity.tooShort) {
        password.setCustomValidity("Enter at least 8 characters")
    }

    passwordErrorMessage.textContent = password.validationMessage;
})

passwordConfirm.addEventListener("input", () => {
    passwordConfirm.setCustomValidity("");

    if (passwordConfirm.validity.valueMissing) {
        passwordConfirm.setCustomValidity("Confirm your password")
    } else if (passwordConfirm.validity.tooShort) {
        passwordConfirm.setCustomValidity("Enter at least 8 characters")
    } else if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Passwords must be the same")
    }

    passwordConfirmErrorMessage.textContent = passwordConfirm.validationMessage;
})
