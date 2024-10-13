document.addEventListener('DOMContentLoaded', function () {
    // ///////////Search functionality
    document.addEventListener('click', function (event) {
        // Check if the search icon is clicked
        if (event.target.closest('.nav-search')) {
            document.querySelector('.search-bar').classList.add('search-bar-active');
        }
        // Check if the cancel button is clicked
        else if (event.target.closest('.search-cencle')) {
            console.log('Cancel button clicked');
            document.querySelector('.search-bar').classList.remove('search-bar-active');
        }

    });
// Corrected Login and signup functionality
document.addEventListener('click', function (event) {
    const formElement = document.querySelector('.form');
    
    // Check if the clicked element has the class 'nav-user' or 'Already-account'
    if (event.target.closest('.nav-user, .Already-account')) {
        formElement.classList.add('login-active');
        formElement.classList.remove('sign-up-active');
    }
    
    // Check if the clicked element has the class 'sign-up-btn'
    if (event.target.closest('.sign-up-btn')) {
        formElement.classList.remove('login-active');
        formElement.classList.add('sign-up-active');
    }
    
    // Check if the clicked element has the class 'form-cancle'
    if (event.target.closest('.form-cancle')) {
        formElement.classList.remove('login-active');
        formElement.classList.remove('sign-up-active');
    }
});
// Get the elements from the DOM
const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.sign-up-form');
const signUpBtn = document.querySelector('.Sign-up-btn');
const alreadyAccountBtn = document.querySelector('.Already-account');

// When "Create An Account" is clicked, hide login form and show sign-up form
signUpBtn.addEventListener('click', function() {
    loginForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

// When "Already Have An Account" is clicked, hide sign-up form and show login form
alreadyAccountBtn.addEventListener('click', function() {
    signUpForm.style.display = 'none';
    loginForm.style.display = 'block';
});


});

// Fix Header on scroll
const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
//    check if at the top
if (currentScrollY === 0){
    header.classList.remove('header-fix');
} else if(currentScrollY === 0){
    header.classList.add('header-fix');
} else {
    header.classList.remove('header-fix');
}

lastScrollY = currentScrollY;
});