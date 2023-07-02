/* Anon Code Test (Doesn't work, can't figure out this) */

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

        for (let o = 0; o < footers.length; o++) {
            if (footers[o] === mainFooter) {
                footer[o].style.display = "flex";
            } else {
                footers[o].style.display = "none";
            }
        }

        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        fas.removeAttribute("style");
    }
};

aboutMeButton.addEventListener('click', buttonToggle(aboutMeButton, aboutMe, aboutFas, aboutIcon, aboutFooter));
careerButton.addEventListener('click', buttonToggle(careerButton, careerEducation, careerFas, careerIcon));
portfolioButton.addEventListener('click', buttonToggle(portfolioButton, portfolio, portfolioFas, portfolioIcon));
skillsButton.addEventListener('click', buttonToggle(skillsButton, skills, skillsFas, skillsIcon, skillsFooter));

/* Working Code (Without Loop) */

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

        mainFooter.style.display = "none";
        aboutFooter.style.display = "flex";
        careerFooter.style.display = "none";
        portfolioFooter.style.display = "none";
        skillsFooter.style.display = "none";

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

        mainFooter.style.display = "flex";
        aboutFooter.style.display = "none";
        careerFooter.style.display = "none";
        portfolioFooter.style.display = "none";
        skillsFooter.style.display = "none";

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

        mainFooter.style.display = "none";
        aboutFooter.style.display = "none";
        careerFooter.style.display = "flex";
        portfolioFooter.style.display = "none";
        skillsFooter.style.display = "none";

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

        mainFooter.style.display = "flex";
        aboutFooter.style.display = "none";
        careerFooter.style.display = "none";
        portfolioFooter.style.display = "none";
        skillsFooter.style.display = "none";
        
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

        mainFooter.style.display = "none";
        aboutFooter.style.display = "none";
        careerFooter.style.display = "none";
        portfolioFooter.style.display = "flex";
        skillsFooter.style.display = "none";

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

        mainFooter.style.display = "flex";
        aboutFooter.style.display = "none";
        careerFooter.style.display = "none";
        portfolioFooter.style.display = "none";
        skillsFooter.style.display = "none";

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

        mainFooter.style.display = "none";
        aboutFooter.style.display = "none";
        careerFooter.style.display = "none";
        portfolioFooter.style.display = "none";
        skillsFooter.style.display = "flex";

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

        mainFooter.style.display = "flex";
        aboutFooter.style.display = "none";
        careerFooter.style.display = "none";
        portfolioFooter.style.display = "none";
        skillsFooter.style.display = "none";

        skillsIcon.classList.remove('fa-chevron-up');
        skillsIcon.classList.add('fa-chevron-down');
        skillsFas.removeAttribute("style");
    }
}); 

/* Collapse Code (Only work on first click)
let collapse = document.querySelector('.section.collapse');
collapse.classList.toggle('collapse'); */

/* Working Code (With Loop) */

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