import '../styles/main.scss';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

const mobileMenu = new MobileMenu();
const revealOnScrollforFeatureItem = new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
const revealOnScrollforTestimonial = new RevealOnScroll(document.querySelectorAll('.testimonial'), 65);
const stikcyHeader = new StickyHeader();

if (module.hot) {
    module.hot.accept();
}


