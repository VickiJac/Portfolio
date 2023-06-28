/* Getting all Elements by Id */

let aboutMe = document.getElementById('about-me');
let careerEducation = document.getElementById('career-education');
let portfolio = document.getElementById('portfolio');
let skills = document.getElementById('skills');

let menu = [aboutMe, careerEducation, portfolio, skills];

let aboutMeButton = document.getElementById('about-me-button');
let careerButton = document.getElementById('career-button');
let portfolioButton = document.getElementById('portfolio-button');
let skillsButton = document.getElementById('skills-button');

let buttons = [aboutMeButton, careerButton, portfolioButton, skillsButton];

let aboutFas = document.getElementById('about-fas');
let careerFas = document.getElementById('career-fas');
let portfolioFas = document.getElementById('portfolio-fas');
let skillsFas = document.getElementById('skills-fas');

let fas = [aboutFas, careerFas, portfolioFas, skillsFas];

let aboutIcon = aboutMeButton.querySelector('i');
let careerIcon = careerButton.querySelector('i');
let portfolioIcon = portfolioButton.querySelector('i');
let skillsIcon = skillsButton.querySelector('i');

let icons = [aboutIcon, careerIcon, portfolioIcon, skillsIcon];

/* All sections hidden */

aboutMe.hidden = true;
careerEducation.hidden = true;
portfolio.hidden = true;
skills.hidden = true;

/* Menu functions */

/* About Me Function */

aboutMeButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");

        aboutMe.hidden = false;
        careerEducation.hidden = true;
        portfolio.hidden = true;
        skills.hidden = true;
        careerButton.removeAttribute("style");
        portfolioButton.removeAttribute("style");
        skillsButton.removeAttribute("style");

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";
        this.style.fontSize = "1.4em";

        aboutFas.style.color = "#f6f2c0";
        aboutIcon.classList.remove('fa-chevron-down');
        aboutIcon.classList.add('fa-chevron-up');

        careerIcon.classList.remove('fa-chevron-up');
        careerIcon.classList.add('fa-chevron-down');

        portfolioIcon.classList.remove('fa-chevron-up');
        portfolioIcon.classList.add('fa-chevron-down');

        skillsIcon.classList.remove('fa-chevron-up');
        skillsIcon.classList.add('fa-chevron-down');

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");
        aboutMe.hidden = true;
        careerEducation.hidden = true;
        portfolio.hidden = true;
        skills.hidden = true;
        aboutIcon.classList.remove('fa-chevron-up');
        aboutIcon.classList.add('fa-chevron-down');
        aboutFas.removeAttribute("style");
    }
});

/* Career Function */

careerButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");

        aboutMe.hidden = true;
        careerEducation.hidden = false;
        portfolio.hidden = true;
        skills.hidden = true;
        aboutMeButton.removeAttribute("style");
        portfolioButton.removeAttribute("style");
        skillsButton.removeAttribute("style");

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";
        this.style.fontSize = "1.4em";

        careerFas.style.color = "#f6f2c0";
        careerIcon.classList.remove('fa-chevron-down');
        careerIcon.classList.add('fa-chevron-up');

        aboutIcon.classList.remove('fa-chevron-up');
        aboutIcon.classList.add('fa-chevron-down');

        portfolioIcon.classList.remove('fa-chevron-up');
        portfolioIcon.classList.add('fa-chevron-down');

        skillsIcon.classList.remove('fa-chevron-up');
        skillsIcon.classList.add('fa-chevron-down');

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");
        aboutMe.hidden = true;
        careerEducation.hidden = true;
        portfolio.hidden = true;
        skills.hidden = true;
        careerIcon.classList.remove('fa-chevron-up');
        careerIcon.classList.add('fa-chevron-down');
        careerFas.removeAttribute("style");
    }
});

/* Portfolio Function */

portfolioButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");

        aboutMe.hidden = true;
        careerEducation.hidden = true;
        portfolio.hidden = false;
        skills.hidden = true;
        careerButton.removeAttribute("style");
        aboutMeButton.removeAttribute("style");
        skillsButton.removeAttribute("style");

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";
        this.style.fontSize = "1.4em";

        portfolioFas.style.color = "#f6f2c0";
        portfolioIcon.classList.remove('fa-chevron-down');
        portfolioIcon.classList.add('fa-chevron-up');

        aboutIcon.classList.remove('fa-chevron-up');
        aboutIcon.classList.add('fa-chevron-down');

        careerIcon.classList.remove('fa-chevron-up');
        careerIcon.classList.add('fa-chevron-down');

        skillsIcon.classList.remove('fa-chevron-up');
        skillsIcon.classList.add('fa-chevron-down');

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");
        aboutMe.hidden = true;
        careerEducation.hidden = true;
        portfolio.hidden = true;
        skills.hidden = true;
        portfolioIcon.classList.remove('fa-chevron-up');
        portfolioIcon.classList.add('fa-chevron-down');
        portfolioFas.removeAttribute("style");
    }
});

/* Skills Function */

skillsButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");

        aboutMe.hidden = true;
        careerEducation.hidden = true;
        portfolio.hidden = true;
        skills.hidden = false;
        careerButton.removeAttribute("style");
        aboutMeButton.removeAttribute("style");
        portfolioButton.removeAttribute("style");

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";
        this.style.fontSize = "1.4em";

        skillsFas.style.color = "#f6f2c0";
        skillsIcon.classList.remove('fa-chevron-down');
        skillsIcon.classList.add('fa-chevron-up');

        aboutIcon.classList.remove('fa-chevron-up');
        aboutIcon.classList.add('fa-chevron-down');

        careerIcon.classList.remove('fa-chevron-up');
        careerIcon.classList.add('fa-chevron-down');

        portfolioIcon.classList.remove('fa-chevron-up');
        portfolioIcon.classList.add('fa-chevron-down');

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");
        aboutMe.hidden = true;
        careerEducation.hidden = true;
        portfolio.hidden = true;
        skills.hidden = true;
        skillsIcon.classList.remove('fa-chevron-up');
        skillsIcon.classList.add('fa-chevron-down');
        skillsFas.removeAttribute("style");
    }
});