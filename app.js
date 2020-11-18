// DOM element
const nav = document.querySelector('.navbar');
const jumb = document.querySelector('.jumbotron');

// Jumb height
const jumbHeight = jumb.offsetHeight;

// Listen scroll
window.addEventListener('scroll', handleScroll);

function handleScroll() {
   if (window.scrollY >= jumbHeight) {
      nav.style.position = 'fixed';
      nav.style.top = 0;
      nav.style.width = '100%';
   } else {
      nav.style.position = 'static';
   }
}

// 2eme example
const nav = document.querySelector('.navbar');
const jumb = document.querySelector('.jumbotron');

// Nav height
const navHeight = nav.offsetHeight;

// Scroll listener
window.addEventListener('scroll', handleScroll);

function handleScroll() {
   if(window.scrollY >= navHeight) {
      nav.style.position = 'fixed';
      nav.style.top = 0;
      nav.style.width = '100%';
   } else {
      nav.style.position = 'static';
   }
}

// 3eme Example
const nav = document.querySelector('.navbar');
const jumb = document.querySelector('.jumbotron');

window.addEventListener('scroll', () => {
   // Scroll
   const scroll = window.pageYOffset;
   // Nav height
   const navHeight = nav.offsetHeight;
   // Jumb height
   const jumbHeight = jumb.offsetHeight;
   // Percentage
   const percentage = Math.floor(scroll / navHeight * 100);
   
   if(percentage >= jumbHeight) {
      nav.style.position = 'fixed';
      nav.style.width = '100%';
      nav.style.top = 0;
   } else {
      nav.style.position = 'static';
   }
});