let buttonToggle = (section, fas, icon, footer) => {

    if(!this.hasAttribute("data-clicked")) {
        this.setAttribute("data-clicked", "true");

        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i] !== this) {
                buttons[i].removeAttribute("data-clicked");
            }
        }

        for (let i = 0; i < menu.length; i++) {
            if (menu[i] === section) {
                menu[i].style.display = "block";
            } else {
                menu[i].style.display = "none";
            }
        }

        for (let i = 0; i < footers.length; i++) {
            if (footers[i] === footer) {
                footer[i].style.display = "flex";
            } else {
                footers[i].style.display = "none";
            }
        }

        this.style.color = "#f6f2c0";
        this.style.textShadow = "#6b4e23 2px 2px 2px";

        fas.style.color = "#f6f2c0";
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');

        if (maxWidth.matches) {
            this.style.fontSize = "1em";
        } else {
            this.style.fontSize = "1.4em";
        }

        for (let i = 0; i < icons.length; i++) {
            if(icons[i] !== icon && icons[i].classList.contains('fa-chevron-up')) {
                icons[i].classList.remove('fa-chevron-up');
                icons[i].classList.add('fa-chevron-down');
            }
        }

        for (let i = 0; i < allFas.length; i++) {
            if(allFas[i] !== fas) {
                allFas[i].removeAttribute("style"); 
            }
        }
        
        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i] !== this) {
                buttons[i].removeAttribute("style");
            }    
        }

    } else {
        this.removeAttribute("data-clicked");
        this.removeAttribute("style");


        for (let i = 0; i < menu.length; i++) {
            menu[i].style.display = "none";
        }

        for (let i = 0; i < footers.length; i++) {
            if (footers[i] === mainFooter) {
                footer[i].style.display = "flex";
            } else {
                footers[i].style.display = "none";
            }
        }

        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        fas.removeAttribute("style");
    }
};

aboutMeButton.addEventListener('click', buttonToggle(aboutMe, aboutMeButton, aboutFas, aboutIcon));
careerButtonButton.addEventListener('click', buttonToggle(careerEducation, careerButton, careerFas, careerIcon));
portfolioButton.addEventListener('click', buttonToggle(portfolio, portfolioButton, portfolioFas, portfolioIcon));
skillsButton.addEventListener('click', buttonToggle(skills, skillsButton, skillsFas, skillsIcon));

/* Working Code */

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