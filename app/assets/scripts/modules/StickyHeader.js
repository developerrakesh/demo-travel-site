import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.pagesSections = document.querySelectorAll('.page-section');
        this.browserHeight = window.innerHeight;
        this.events();
    }

    events() {
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 400));
    }

    //To highlight menu-link when scrolled to corresponding section
    calcSection(el) {
        if((window.scrollY + this.browserHeight > el.offsetTop) && (window.scrollY < (el.offsetTop + el.offsetHeight))) {
            let scrollPercentTop = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            let scrollPercentBottom = (el.getBoundingClientRect().bottom / this.browserHeight) * 100;
            let matchingLink = el.getAttribute('data-link');
            if(scrollPercentTop < 45 && scrollPercentBottom > 45) {
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove('is-current-link'));
                document.querySelector(matchingLink).classList.add('is-current-link');
            } else {
                document.querySelector(matchingLink).classList.remove('is-current-link');
            }
        }
    }

    runOnScroll() {
        if(window.scrollY > 60) {
             this.siteHeader.classList.add('site-header--dark');
        } else {
            this.siteHeader.classList.remove('site-header--dark');
        }

        this.pagesSections.forEach(el => this.calcSection(el));
    }
}

export default StickyHeader;