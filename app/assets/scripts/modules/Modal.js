class Modal {
    constructor() {
        this.injectHTML();
        this.closeIcon = document.querySelector('.modal__close');
        this.modal = document.querySelector('.modal');
        this.events();
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="modal" role="dialog" aria-modal="true" aria-expanded="false">
                <div class="modal__inner">
                <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
                <div class="wrapper wrapper--narrow">
                    <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
                </div>
            
                <div class="social-icons">
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
                </div>
                </div>
                <div class="modal__close">X</div>
            </div>
        `);
    }

    openModal() {
        this.modal.classList.add('modal--show');
        this.modal.setAttribute('aria-expanded', true);
    }

    hideModal() {
        this.modal.classList.remove('modal--show');
        this.modal.setAttribute('aria-expanded', false);
    }

    keyPressHandler(evt) {
        if (evt.keyCode == 27) {
            this.hideModal();
        }
    }

    events() {
        //listen for close click
        this.closeIcon.addEventListener('click', () => this.hideModal());

        //listen for esc key press
        document.addEventListener('keyup', evt => this.keyPressHandler(evt));
    }
}

export default Modal;