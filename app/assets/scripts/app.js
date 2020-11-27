import '../styles/main.scss';
import MobileMenu from './modules/MobileMenu';

const mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept();
}


