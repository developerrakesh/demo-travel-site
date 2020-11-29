import axios from 'axios';

class ClientArea {
    constructor() {
        this.injectHTML();
        this.form = document.querySelector('.client-area__form');
        this.field = document.querySelector('.client-area__input');
        this.contentArea = document.querySelector('.client-area__content-area');
        this.events();
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="client-area">
                <div class="wrapper wrapper--medium">
                    <h2 class="section-title section-title--blue">Secret Client Area</h2>
                    <form class="client-area__form" action="">
                        <input class="client-area__input" type="text" placeholder="Enter the secret phrase">
                        <button class="btn btn--orange">Submit</button>
                    </form>
                    <div class="client-area__content-area"></div>
                </div>
            </div>
        `);
    }

    sendRequest() {
        axios.post('https://hopeful-darwin-53d07f.netlify.app/.netlify/functions/secret-area', { password: this.field.value }).then(res => {
            this.form.remove();
            this.contentArea.innerHTML = res.data;
        }).catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">Secret Phase is not Correct</p>`;
            this.field.value = '';
            this.field.focus();
        });
    }

    events() {
        this.form.addEventListener('submit', evt => {
            evt.preventDefault();
            this.sendRequest();
        });
    }
}

export default ClientArea;