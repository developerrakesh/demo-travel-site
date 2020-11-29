import '../styles/main.scss';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ClientArea from './modules/ClientArea';

new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 65);
new ClientArea();
const stikcyHeader = new StickyHeader();
let modal;

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', evt => {
        evt.preventDefault();
        if(typeof modal == 'undefined') {
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openModal(), 50);
            }).catch(() => console.log('Problem in Loading Modal'));
        } else {
            modal.openModal();
        }
    });
});

if (module.hot) {
    module.hot.accept();
}


