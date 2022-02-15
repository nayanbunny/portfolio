// Scroll Progress Calculation Function
let calcScrollValue = () => {
  let scrollProgress = document.querySelector('#scroll__progress');
  
  let scrollPosition = document.documentElement.scrollTop;
  let calcScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((scrollPosition*100)/calcScrollHeight);
  
  console.log(scrollPosition, scrollValue, window.scrollY);
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

// jQuery for Skill Badges Circle Progress
let skillsCircleProgress = () => {
  unHide(skillsElement);

  let progressBarOptions = {
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
}

// GSAP Reveal Animation Function
function gsapSlideRevealAnimation(elem, direction) {
  direction = direction || 1;
  var x = 0, y = direction * 100;


  if(elem.classList.contains("gs__reveal__fromTop")) {
    x = 0;
    y = -100;
  }
  else if(elem.classList.contains("gs__reveal__fromBottom")) {
    x = 0;
    y = 100;
  }
  else if(elem.classList.contains("gs__reveal__fromLeft")) {
    x = -100;
    y = 0;
  }
  else if (elem.classList.contains("gs__reveal__fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

// Work Section Content Animations Function
let workContentAnimation = () => {
  unHide(workElement);
  var gsapTimeline = gsap.timeline();

  gsapTimeline.from('.work__content_text', {
    y: 100,
    delay: 0.25,
    autoAlpha: 0
  }).from('.work__content__main__text', {
    scale: 2,
    autoAlpha: 0
  }).from('.work__content__qualities', {
    scale: 2,
    autoAlpha: 0
  });
}

// About Section Content Animations Function
let aboutContentAnimation = () => {
  unHide(aboutElement);
  var gsapTimeline = gsap.timeline();

  gsapTimeline.from('.about__content__info', {
    scale: 2,
    autoAlpha: 0
  }).from('.about__content__interest', {
    scale: 2,
    autoAlpha: 0
  }).from('.about__content__quote', {
    scale: 2,
    autoAlpha: 0
  }).from('.about__content__qualities', {
    scale: 2,
    autoAlpha: 0
  }).from('.form__contact__button', {
    scale:0.5,
    opacity:0,
    ease:Elastic.easeInOut
  });
}

// Toggle Contact Form Function
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

// Hide Element for GSAP Animation
let hide = (elem) => {
  gsap.set(elem, {autoAlpha: 0});
}

// UnHide Element for GSAP Animation
let unHide = (elem) => {
  gsap.set(elem, {autoAlpha: 1});
}

// Initialize TypeWriter
let initializeTypeWriter = () => {
  const txtElement = document.querySelector('#hero__role__title');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// Initialize Hero Section Content Animations Function
let initialHeroContentAnimations = () => {
  let gsapTimeline = gsap.timeline();

  gsapTimeline.from('.hero__greeting__icon', {
    x: -100,
    autoAlpha: 0,
    ease: Power4.out
  }).from('.hero__title__pre', {
    x: -100,
    autoAlpha: 0,
    delay: 0.25,
    ease: Power4.out
  }).from('.hero__title__name', {
    y:150,
    autoAlpha: 0,
    ease: Power3.out
  }).from('.hero__role__title', {
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 3
  })
  .call(initializeTypeWriter());  // Initialize TypeWriter
}

// Initialize Scroll Trigger Animations
let initializeScrollTrigger = () => {
  gsap.utils.toArray('.gs__reveal').forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    // Scroll Trigger Slide Reveal Animation
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { gsapSlideRevealAnimation(elem) },
      onEnterBack: function() { gsapSlideRevealAnimation(elem, -1) },
      onLeave: function() { hide(elem) }, // assure that the element is hidden when scrolled into view
      onLeaveBack: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });

  // Scroll Trigger Staggered Reveal Animation
  ScrollTrigger.batch('.project__card, .skills__progress__badge', {
    interval: 0.01, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
    batchMax: 3,   // maximum batch size (targets)
    onEnter: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true}),
    onLeave: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true})
  });

  // Scroll Trigger for Work Section
  ScrollTrigger.create({
    trigger: workElement,
    onEnter: function() { workContentAnimation() },
    onEnterBack: function() { workContentAnimation() },
    onLeave: function() { hide(workElement) }, // assure that the element is hidden when scrolled into view
    onLeaveBack: function() { hide(workElement) }, // assure that the element is hidden when scrolled into view
  });

  // Scroll Trigger for Skills Section
  ScrollTrigger.create({
    trigger: skillsElement,
    onEnter: function() { skillsCircleProgress() },
    onEnterBack: function() { skillsCircleProgress() },
    onLeave: function() { hide(skillsElement) }, // assure that the element is hidden when scrolled into view
    onLeaveBack: function() { hide(skillsElement) }, // assure that the element is hidden when scrolled into view
  });

  // Scroll Trigger for About Section
  ScrollTrigger.create({
    trigger: aboutElement,
    onEnter: function() { aboutContentAnimation() },
    onEnterBack: function() { aboutContentAnimation() },
    onLeave: function() { hide(aboutElement) }, // assure that the element is hidden when scrolled into view
    onLeaveBack: function() { hide(aboutElement) }, // assure that the element is hidden when scrolled into view
  });
}

// Init On DOM Load
let links = document.querySelectorAll('.navbar__item');
let sections = document.querySelectorAll('section');
let workElement = document.querySelector('.work-section-content');
let skillsElement = document.querySelector('.skills-section-content');
let aboutElement = document.querySelector('.about-section-content');

document.addEventListener("DOMContentLoaded", function() {
  // Card Tilt Initiation
  VanillaTilt.init(document.querySelectorAll(".project__card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
  });

  // Register GSAP Scroll Trigger and Split Text Plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Scroll Trigger Animations
  initializeScrollTrigger();

  // Initialize Hero Content Animations
  initialHeroContentAnimations();

  // Initialize TypeWriter
  // initializeTypeWriter();
  
});

// Load or Scroll Events
window.onload = calcScrollValue;
window.onscroll = function() {
  calcScrollValue();
  navMenuActive();
}