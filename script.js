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

aboutMeButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");

        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i] !== this) {
                buttons[i].removeAttribute("data-clicked");
            }
        }

        for (let j = 0; j < menu.length; j++) {
            if (menu[j] === aboutMe) {
                aboutMe.style.display = "block";
            } else {
                menu[j].style.display = "none";
            }
        }

        for (let k = 0; k < footers.length; k++) {
            if (footers[k] === aboutFooter) {
                aboutFooter.style.display = "flex";
            } else {
                footers[k].style.display = "none";
            }
        }

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";

        aboutFas.style.color = "#f6f2c0";
        aboutIcon.classList.remove('fa-chevron-down');
        aboutIcon.classList.add('fa-chevron-up');

        if (maxWidth.matches) {
            this.style.fontSize = "1em";
        } else {
            this.style.fontSize = "1.4em";
        }

        for (let l = 0; l < icons.length; l++) {
            if(icons[l] !== aboutIcon && icons[l].classList.contains('fa-chevron-up')) {
                icons[l].classList.remove('fa-chevron-up');
                icons[l].classList.add('fa-chevron-down');
            }
        }

        for (let m = 0; m < allFas.length; m++) {
            if(allFas[m] !== aboutFas) {
                allFas[m].removeAttribute("style"); 
            }
        }
        
        for (let n = 0; n < buttons.length; n++) {
            if(buttons[n] !== this) {
                buttons[n].removeAttribute("style");
            }    
        }

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");


        for (let o = 0; o < menu.length; o++) {
            menu[o].style.display = "none";
        }

        for (let o = 0; o < footers.length; o++) {
            if (footers[o] === mainFooter) {
                mainFooter.style.display = "flex";
            } else {
                footers[o].style.display = "none";
            }
        }

        aboutIcon.classList.remove('fa-chevron-up');
        aboutIcon.classList.add('fa-chevron-down');
        aboutFas.removeAttribute("style");
    }
});

/* Career */

careerButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");

        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i] !== this) {
                buttons[i].removeAttribute("data-clicked");
            }
        }

        for (let j = 0; j < menu.length; j++) {
            if (menu[j] === careerEducation) {
                careerEducation.style.display = "block";
            } else {
                menu[j].style.display = "none";
            }
        }

        for (let k = 0; k < footers.length; k++) {
            if (footers[k] === careerFooter) {
                careerFooter.style.display = "flex";
            } else {
                footers[k].style.display = "none";
            }
        }

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";

        careerFas.style.color = "#f6f2c0";
        careerIcon.classList.remove('fa-chevron-down');
        careerIcon.classList.add('fa-chevron-up');

        if (maxWidth.matches) {
            this.style.fontSize = "1em";
        } else {
            this.style.fontSize = "1.4em";
        }

        for (let l = 0; l < icons.length; l++) {
            if(icons[l] !== careerIcon && icons[l].classList.contains('fa-chevron-up')) {
                icons[l].classList.remove('fa-chevron-up');
                icons[l].classList.add('fa-chevron-down');
            }
        }

        for (let m = 0; m < allFas.length; m++) {
            if(allFas[m] !== careerFas) {
                allFas[m].removeAttribute("style"); 
            }
        }
        
        for (let n = 0; n < buttons.length; n++) {
            if(buttons[n] !== this) {
                buttons[n].removeAttribute("style");
            }    
        }

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");


        for (let o = 0; o < menu.length; o++) {
            menu[o].style.display = "none";
        }

        for (let o = 0; o < footers.length; o++) {
            if (footers[o] === mainFooter) {
                mainFooter.style.display = "flex";
            } else {
                footers[o].style.display = "none";
            }
        }

        careerIcon.classList.remove('fa-chevron-up');
        careerIcon.classList.add('fa-chevron-down');
        careerFas.removeAttribute("style");
    }
});

/* Portfolio */

portfolioButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");

        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i] !== this) {
                buttons[i].removeAttribute("data-clicked");
            }
        }

        for (let j = 0; j < menu.length; j++) {
            if (menu[j] === portfolio) {
                portfolio.style.display = "block";
            } else {
                menu[j].style.display = "none";
            }
        }

        for (let k = 0; k < footers.length; k++) {
            if (footers[k] === portfolioFooter) {
                portfolioFooter.style.display = "flex";
            } else {
                footers[k].style.display = "none";
            }
        }

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";

        portfolioFas.style.color = "#f6f2c0";
        portfolioIcon.classList.remove('fa-chevron-down');
        portfolioIcon.classList.add('fa-chevron-up');

        if (maxWidth.matches) {
            this.style.fontSize = "1em";
        } else {
            this.style.fontSize = "1.4em";
        }

        for (let l = 0; l < icons.length; l++) {
            if(icons[l] !== portfolioIcon && icons[l].classList.contains('fa-chevron-up')) {
                icons[l].classList.remove('fa-chevron-up');
                icons[l].classList.add('fa-chevron-down');
            }
        }

        for (let m = 0; m < allFas.length; m++) {
            if(allFas[m] !== portfolioFas) {
                allFas[m].removeAttribute("style"); 
            }
        }
        
        for (let n = 0; n < buttons.length; n++) {
            if(buttons[n] !== this) {
                buttons[n].removeAttribute("style");
            }    
        }

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");


        for (let o = 0; o < menu.length; o++) {
            menu[o].style.display = "none";
        }

        for (let o = 0; o < footers.length; o++) {
            if (footers[o] === mainFooter) {
                mainFooter.style.display = "flex";
            } else {
                footers[o].style.display = "none";
            }
        }

        portfolioIcon.classList.remove('fa-chevron-up');
        portfolioIcon.classList.add('fa-chevron-down');
        portfolioFas.removeAttribute("style");
    }
});

/* Skills */

skillsButton.addEventListener('click', function() {

    if(!this.dataset.clicked) {
        this.setAttribute("data-clicked", "true");

        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i] !== this) {
                buttons[i].removeAttribute("data-clicked");
            }
        }

        for (let j = 0; j < menu.length; j++) {
            if (menu[j] === skills) {
                skills.style.display = "block";
            } else {
                menu[j].style.display = "none";
            }
        }

        for (let k = 0; k < footers.length; k++) {
            if (footers[k] === skillsFooter) {
                skillsFooter.style.display = "flex";
            } else {
                footers[k].style.display = "none";
            }
        }

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";

        skillsFas.style.color = "#f6f2c0";
        skillsIcon.classList.remove('fa-chevron-down');
        skillsIcon.classList.add('fa-chevron-up');

        if (maxWidth.matches) {
            this.style.fontSize = "1em";
        } else {
            this.style.fontSize = "1.4em";
        }

        for (let l = 0; l < icons.length; l++) {
            if(icons[l] !== skillsIcon && icons[l].classList.contains('fa-chevron-up')) {
                icons[l].classList.remove('fa-chevron-up');
                icons[l].classList.add('fa-chevron-down');
            }
        }

        for (let m = 0; m < allFas.length; m++) {
            if(allFas[m] !== skillsFas) {
                allFas[m].removeAttribute("style"); 
            }
        }
        
        for (let n = 0; n < buttons.length; n++) {
            if(buttons[n] !== this) {
                buttons[n].removeAttribute("style");
            }    
        }

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");


        for (let o = 0; o < menu.length; o++) {
            menu[o].style.display = "none";
        }

        for (let o = 0; o < footers.length; o++) {
            if (footers[o] === mainFooter) {
                mainFooter.style.display = "flex";
            } else {
                footers[o].style.display = "none";
            }
        }

        skillsIcon.classList.remove('fa-chevron-up');
        skillsIcon.classList.add('fa-chevron-down');
        skillsFas.removeAttribute("style");
    }
});