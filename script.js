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

let allFas = [aboutFas, careerFas, portfolioFas, skillsFas];

let aboutIcon = aboutMeButton.querySelector('i');
let careerIcon = careerButton.querySelector('i');
let portfolioIcon = portfolioButton.querySelector('i');
let skillsIcon = skillsButton.querySelector('i');

let icons = [aboutIcon, careerIcon, portfolioIcon, skillsIcon];

let allAbout = [aboutMe, aboutMeButton, aboutFas, aboutIcon];
let allCareer = [careerEducation, careerButton, careerFas, careerIcon];
let allPortfolio = [portfolio, portfolioButton, portfolioFas, portfolioIcon]
let allSkills = [skills, skillsButton, skillsFas, skillsIcon];

/* All sections hidden */

aboutMe.style.display = "none";
careerEducation.style.display = "none";
portfolio.style.display = "none";
skills.style.display = "none";

/* Menu functions */

/* About Me Function */

aboutMeButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");
        careerButton.removeAttribute("data-clicked");
        portfolioButton.removeAttribute("data-clicked");
        skillsButton.removeAttribute("data-clicked");

        aboutMe.style.display = "block";
        careerEducation.style.display = "none";
        portfolio.style.display = "none";
        skills.style.display = "none";

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";
        this.style.fontSize = "1.4em";

        aboutFas.style.color = "#f6f2c0";
        aboutIcon.classList.remove('fa-chevron-down');
        aboutIcon.classList.add('fa-chevron-up');

        if (careerIcon.classList.contains('fa-chevron-up')) {
            careerIcon.classList.remove('fa-chevron-up');
            careerIcon.classList.add('fa-chevron-down');
            careerButton.removeAttribute("style");
            careerFas.removeAttribute("style");
            }
    
        if (portfolioIcon.classList.contains('fa-chevron-up')) {
            portfolioIcon.classList.remove('fa-chevron-up');
            portfolioIcon.classList.add('fa-chevron-down');
            portfolioButton.removeAttribute("style");
            portfolioFas.removeAttribute("style");
            }
    
        if (skillsIcon.classList.contains('fa-chevron-up')) {
            skillsIcon.classList.remove('fa-chevron-up');
            skillsIcon.classList.add('fa-chevron-down');
            skillsButton.removeAttribute("style");
            skillsFas.removeAttribute("style");
            }

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");
        aboutMe.style.display = "none";
        careerEducation.style.display = "none";
        portfolio.style.display = "none";
        skills.style.display = "none";
        aboutIcon.classList.remove('fa-chevron-up');
        aboutIcon.classList.add('fa-chevron-down');
        aboutFas.removeAttribute("style");
    }
});

/* Career Function */

careerButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");
        aboutMeButton.removeAttribute("data-clicked");
        portfolioButton.removeAttribute("data-clicked");
        skillsButton.removeAttribute("data-clicked");
        aboutMe.style.display = "none";
        careerEducation.style.display = "block";
        portfolio.style.display = "none";
        skills.style.display = "none";

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";
        this.style.fontSize = "1.4em";

        careerFas.style.color = "#f6f2c0";
        careerIcon.classList.remove('fa-chevron-down');
        careerIcon.classList.add('fa-chevron-up');

        if (aboutIcon.classList.contains('fa-chevron-up')) {
            aboutIcon.classList.remove('fa-chevron-up');
            aboutIcon.classList.add('fa-chevron-down');
            aboutMeButton.removeAttribute("style");
            aboutFas.removeAttribute("style");
            }
    
        if (portfolioIcon.classList.contains('fa-chevron-up')) {
            portfolioIcon.classList.remove('fa-chevron-up');
            portfolioIcon.classList.add('fa-chevron-down');
            portfolioButton.removeAttribute("style");
            portfolioFas.removeAttribute("style");
            }
    
        if (skillsIcon.classList.contains('fa-chevron-up')) {
            skillsIcon.classList.remove('fa-chevron-up');
            skillsIcon.classList.add('fa-chevron-down');
            skillsButton.removeAttribute("style");
            skillsFas.removeAttribute("style");
            }

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");
        aboutMe.style.display = "none";
        careerEducation.style.display = "none";
        portfolio.style.display = "none";
        skills.style.display = "none";
        careerIcon.classList.remove('fa-chevron-up');
        careerIcon.classList.add('fa-chevron-down');
        careerFas.removeAttribute("style");
    }
});

/* Portfolio Function */

portfolioButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");
        careerButton.removeAttribute("data-clicked");
        aboutMeButton.removeAttribute("data-clicked");
        skillsButton.removeAttribute("data-clicked");

        aboutMe.style.display = "none";
        careerEducation.style.display = "none";
        portfolio.style.display = "block";
        skills.style.display = "none";

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";
        this.style.fontSize = "1.4em";

        portfolioFas.style.color = "#f6f2c0";
        portfolioIcon.classList.remove('fa-chevron-down');
        portfolioIcon.classList.add('fa-chevron-up');

        if (aboutIcon.classList.contains('fa-chevron-up')) {
            aboutIcon.classList.remove('fa-chevron-up');
            aboutIcon.classList.add('fa-chevron-down');
            aboutMeButton.removeAttribute("style");
            aboutFas.removeAttribute("style");
            }
    
        if (careerIcon.classList.contains('fa-chevron-up')) {
            careerIcon.classList.remove('fa-chevron-up');
            careerIcon.classList.add('fa-chevron-down');
            careerButton.removeAttribute("style");
            careerFas.removeAttribute("style");
            }
    
        if (skillsIcon.classList.contains('fa-chevron-up')) {
            skillsIcon.classList.remove('fa-chevron-up');
            skillsIcon.classList.add('fa-chevron-down');
            skillsButton.removeAttribute("style");
            skillsFas.removeAttribute("style");
            }

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");
        aboutMe.style.display = "none";
        careerEducation.style.display = "none";
        portfolio.style.display = "none";
        skills.style.display = "none";
        portfolioIcon.classList.remove('fa-chevron-up');
        portfolioIcon.classList.add('fa-chevron-down');
        portfolioFas.removeAttribute("style");
    }
});

/* Skills Function */

skillsButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");
        careerButton.removeAttribute("data-clicked");
        aboutMeButton.removeAttribute("data-clicked");
        portfolioButton.removeAttribute("data-clicked");

        aboutMe.style.display = "none";
        careerEducation.style.display = "none";
        portfolio.style.display = "none";
        skills.style.display = "block";

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";
        this.style.fontSize = "1.4em";

        skillsFas.style.color = "#f6f2c0";
        skillsIcon.classList.remove('fa-chevron-down');
        skillsIcon.classList.add('fa-chevron-up');

        if (aboutIcon.classList.contains('fa-chevron-up')) {
            aboutIcon.classList.remove('fa-chevron-up');
            aboutIcon.classList.add('fa-chevron-down');
            aboutMeButton.removeAttribute("style");
            aboutFas.removeAttribute("style");
            }
    
        if (careerIcon.classList.contains('fa-chevron-up')) {
            careerIcon.classList.remove('fa-chevron-up');
            careerIcon.classList.add('fa-chevron-down');
            careerButton.removeAttribute("style");
            careerFas.removeAttribute("style");
            }
    
        if (portfolioIcon.classList.contains('fa-chevron-up')) {
            portfolioIcon.classList.remove('fa-chevron-up');
            portfolioIcon.classList.add('fa-chevron-down');
            portfolioButton.removeAttribute("style");
            portfolioFas.removeAttribute("style");
            }

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");
        aboutMe.style.display = "none";
        careerEducation.style.display = "none";
        portfolio.style.display = "none";
        skills.style.display = "none";
        skillsIcon.classList.remove('fa-chevron-up');
        skillsIcon.classList.add('fa-chevron-down');
        skillsFas.removeAttribute("style");
    }
}); 