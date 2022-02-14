// Scroll Progress Calculation Function
let calcScrollValue = () => {
  let scrollProgress = document.querySelector('#scroll__progress');

  let scrollPosition = document.documentElement.scrollTop;
  let calcScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((scrollPosition*100)/calcScrollHeight);
    
  document.querySelector('header').classList.toggle('sticky', window.scrollY > 10);

  scrollProgress.style.display = scrollPosition > 100 ? 'grid' : 'none';
  scrollProgress.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#006c6c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

/* TypeWriter for Legacy Versions
// const TypeWriter = function(txtElement, words, wait=1000){
//     this.txtElement = txtElement;
//     this.words = words;
//     this.wait = parseInt(wait, 10);
//     this.txt = '';
//     this.wordIndex = 0;
//     this.type();
//     this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type = function() {
//     // current index of word
//     const current = this.wordIndex % this.words.length;
//     // Get full text of current word
//     const fullText = this.words[current];

//     // check if deleting
//     if (this.isDeleting) {
//         // Remove char
//         this.txt = fullText.substring(0, this.txt.length - 1);
//     } else {
//         // Add char
//         this.txt = fullText.substring(0, this.txt.length + 1);
//     }

//     // Insert txt into txtElement
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Initial type Speed
//     let typeSpeed = 100;

//     if (this.isDeleting)
//         typeSpeed /= 2;

//     // If word is complete
//     if (!this.isDeleting && this.txt === fullText) {
//         // Make pause at end
//         typeSpeed = this.wait;
//         // Set delete to true
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === ''){
//         this.isDeleting = false;
//         // Move to next word
//         this.wordIndex++;
//         // Pause before start typing
//         typeSpeed = 300;
//     }

//     setTimeout(() => this.type(), typeSpeed);
// }

// // Init On DOM Load
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init() {
//     const txtElement = document.querySelector('#roleTypeWriter');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');

//     // Init TypeWriter
//     new TypeWriter(txtElement, words, wait);
// }*/

// TypeWriter for ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 1000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullText = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullText.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullText.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 100;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullText) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 300;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
}

// Init App
let init = () => {
  const txtElement = document.querySelector('#hero__role__title');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

let toggleContactForm = () => {
  document.querySelector('.about__content__connect__form').classList.toggle('hidden');
  document.querySelector('.form__contact__button').classList.toggle('hidden');
}

// Nav Menu Activation Function
let navMenuActive = () => {
  let sectionsCount = sections.length;
  while (--sectionsCount && window.scrollY + 39 < sections[sectionsCount].offsetTop){}
  links.forEach(link => link.classList.remove('active'));
  links[sectionsCount].classList.add('active');
}

// Nav Menu Toggle Icon Change Function
let changeNavToggleIcon = () => {
  document.querySelector('.navbar__toggle').classList.toggle('toggleAnimate');
}

// Init On DOM Load
let links = document.querySelectorAll('.navbar__item');
let sections = document.querySelectorAll('section');
document.addEventListener('DOMContentLoaded', init);

// Load or Scroll Events
window.onload = calcScrollValue;
window.onscroll = function() {
  calcScrollValue();
  navMenuActive();
}

// Card Tilt Initiation
VanillaTilt.init(document.querySelectorAll(".project__card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

// jQuery for Skill Badges Circle Progress
$(function() {
  var progressBarOptions = {
      startAngle: -1.55,
      size: 110,
      thickness: 15,
      value: 0.92,
      fill: { color: '#dd4b25' }
  }

  
  $('.skills__progress').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('.skills__progress__value').text(String(stepValue.toFixed(2)).substr(2)+'%');
  });

  var skillsProgress = [
    { name: 'css', value: '0.87', color: '#254bdd' },
    { name: 'js-jquery', value: '0.82', color: '#edd718' },
    { name: 'dotnet-csharp', value: '0.86', color: '#5d2d92' },
    { name: 'sql', value: '0.68', color: '#aec92f' },
    { name: 'ms-azure', value: '0.74', color: '#2463cb' },
    { name: 'devops', value: '0.72', color: '#0072cf' },
    { name: 'microservices', value: '0.68', color: '#008e36' },
    { name: 'docker', value: '0.68', color: '#3069de' },
    { name: 'kubernetes', value: '0.62', color: '#3069de' },
    { name: 'api', value: '0.77', color: '#20b199' },
    { name: 'angular', value: '0.56', color: '#af2b2d' },
    { name: 'react', value: '0.33', color: '#5ed3f3' },
    { name: 'cybersecurity', value: '0.35', color: '#833850' },
    { name: 'agile', value: '0.57', color: '#4548b8' },
    { name: 'visualstudio', value: '0.57', color: '#61218c' },
    { name: 'vscode', value: '0.64', color: '#3ca5ea' },
    { name: 'msoffice', value: '0.72', color: '#dc4602' },
    { name: 'admin-tools', value: '0.57', color: '#7776a6' }

  ];

  skillsProgress.forEach(skill => {
    $('.skills__progress__'+ skill.name).circleProgress({
        value : skill.value,
        fill: { color: skill.color }
    });
  });
});