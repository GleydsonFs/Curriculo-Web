
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }

    
    displaySucess() {
        this.form.innerHTML = this.settings.sucess;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    init() {
        if (this.form) this.formButton.addEvenListener("click", () => this.displaySucess());
        return this;
    }
}

    const formSubmit = new FormSubmit({});