let buttonToggle = (section, button, fas, icon) => {

    if(button.hasAttribute("data-clicked")) {
        button.setAttribute("data-clicked", "true"); 

        section.hidden = false;
        for (let i = 0; i < menu.length; i++) {
            if (menu[i] !== section) {
                menu[i].hidden = true;
            } 
        }

        button.style.color = "#f6f2c0";
        button.style.textShadow = "#6b4e23 2px 2px 2px";
        button.style.fontSize = "1.4em";

        fas.style.color = "#f6f2c0";
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');

        for (let i = 0; i < icons.length; i++) {
            if(icons[i] !== icon && icons[i].classList.contains('fa-chevron-up')) {
                icons[i].classList.remove('fa-chevron-up');
                icons[i].classList.add('fa-chevron-down');
                for (let i = 0; i < allFas.length; i++) {
                    if(allFas[i] !== fas) {
                        allFas[i].removeAttribute("style"); 
                    }
                }
                for (let i = 0; i < buttons.length; i++) {
                    if(buttons[i] !== button) {
                        buttons[i].removeAttribute("style");
                    }
                }
            }
        }
    } else {
        button.removeAttribute("data-clicked");
        button.removeAttribute("style");
        for (let i = 0; i < menu.length; i++) {
            menu[i].hidden = true;
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

