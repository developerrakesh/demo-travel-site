import '../styles/main.scss';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

const mobileMenu = new MobileMenu();
const revealOnScrollforFeatureItem = new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
const revealOnScrollforTestimonial = new RevealOnScroll(document.querySelectorAll('.testimonial'), 65);

if (module.hot) {
    module.hot.accept();
}


