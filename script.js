/* Getting all Elements by Id */

/* Dropdown Sections */

let aboutMe = document.getElementById('about-me');
let careerEducation = document.getElementById('career-education');
let portfolio = document.getElementById('portfolio');
let skills = document.getElementById('skills');

let menu = [aboutMe, careerEducation, portfolio, skills];

/* Buttons */

let aboutMeButton = document.getElementById('about-me-button');
let careerButton = document.getElementById('career-button');
let portfolioButton = document.getElementById('portfolio-button');
let skillsButton = document.getElementById('skills-button');

let buttons = [aboutMeButton, careerButton, portfolioButton, skillsButton];

/* Fas for styling */

let aboutFas = document.getElementById('about-fas');
let careerFas = document.getElementById('career-fas');
let portfolioFas = document.getElementById('portfolio-fas');
let skillsFas = document.getElementById('skills-fas');

let allFas = [aboutFas, careerFas, portfolioFas, skillsFas];

/* Fas Icons */

let aboutIcon = aboutMeButton.querySelector('i');
let careerIcon = careerButton.querySelector('i');
let portfolioIcon = portfolioButton.querySelector('i');
let skillsIcon = skillsButton.querySelector('i');

let icons = [aboutIcon, careerIcon, portfolioIcon, skillsIcon];

/* All Sections, Buttons and Icons */

let allAbout = [aboutMe, aboutMeButton, aboutFas, aboutIcon];
let allCareer = [careerEducation, careerButton, careerFas, careerIcon];
let allPortfolio = [portfolio, portfolioButton, portfolioFas, portfolioIcon]
let allSkills = [skills, skillsButton, skillsFas, skillsIcon];

/* Footers */

let mainFooter = document.getElementById('main-footer');
let aboutFooter = document.getElementById('about-footer');
let careerFooter = document.getElementById('career-footer');
let portfolioFooter = document.getElementById('portfolio-footer');
let skillsFooter = document.getElementById('skills-footer');

footers = [mainFooter, aboutFooter, careerFooter, portfolioFooter, skillsFooter];

/* Hidden sections */

aboutMe.style.display = "none";
careerEducation.style.display = "none";
portfolio.style.display = "none";
skills.style.display = "none";

mainFooter.style.display = "flex";
aboutFooter.style.display = "none";
careerFooter.style.display = "none";
portfolioFooter.style.display = "none";
skillsFooter.style.display = "none";

/* Media Query */

let maxWidth = window.matchMedia("(max-width: 768px)")

/* Menu functions */

/* About Me */

let buttonToggle = (button, section, fas, icon, footer) => {

    if(!button.dataset.clicked) {
        button.setAttribute("data-clicked", "true");

        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i] !== button) {
                buttons[i].removeAttribute("data-clicked");
            }
        }

        for (let j = 0; j < menu.length; j++) {
            if (menu[j] === section) {
                menu[j].style.display = "block";
            } else {
                menu[j].style.display = "none";
            }
        }

        for (let k = 0; k < footers.length; k++) {
            if (footers[k] === footer) {
                footers[k].style.display = "flex";
            } else {
                footers[k].style.display = "none";
            }
        }

        button.style.color = "#f6f2c0";
        button.style.textShadow = "#6b4e23 2px 2px 2px";

        fas.style.color = "#f6f2c0";
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');

        if (maxWidth.matches) {
            button.style.fontSize = "1em";
        } else {
            button.style.fontSize = "1.4em";
        }

        for (let l = 0; l < icons.length; l++) {
            if(icons[l] !== icon && icons[l].classList.contains('fa-chevron-up')) {
                icons[l].classList.remove('fa-chevron-up');
                icons[l].classList.add('fa-chevron-down');
            }
        }

        for (let m = 0; m < allFas.length; m++) {
            if(allFas[m] !== fas) {
                allFas[m].removeAttribute("style"); 
            }
        }
        
        for (let n = 0; n < buttons.length; n++) {
            if(buttons[n] !== button) {
                buttons[n].removeAttribute("style");
            }    
        }

    } else {
        button.removeAttribute("data-clicked");
        button.removeAttribute("style");


        for (let o = 0; o < menu.length; o++) {
            menu[o].style.display = "none";
        }

        for (let p = 0; p < footers.length; p++) {
            if (footers[p] === mainFooter) {
                footers[p].style.display = "flex";
            } else {
                footers[p].style.display = "none";
            }
        }

        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        fas.removeAttribute("style");
    }
};

aboutMeButton.addEventListener('click', function() {
    buttonToggle(aboutMeButton, aboutMe, aboutFas, aboutIcon, aboutFooter)
});

careerButton.addEventListener('click', function() {
    buttonToggle(careerButton, careerEducation, careerFas, careerIcon, careerFooter)
});

portfolioButton.addEventListener('click', function() {
    buttonToggle(portfolioButton, portfolio, portfolioFas, portfolioIcon, portfolioFooter)
});

skillsButton.addEventListener('click', function() {
    buttonToggle(skillsButton, skills, skillsFas, skillsIcon, skillsFooter)
});