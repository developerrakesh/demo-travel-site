import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.pagesSections = document.querySelectorAll('.page-section');
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    events() {
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 400));
    }

    calcScrollDirection() {
        if(window.scrollY > this.previousScrollY) {
            this.scrollDirection = 'down';
        } else {
            this.scrollDirection = 'up';
        }
        this.previousScrollY = window.scrollY;
    }

    calcSection(el) {
        if((window.scrollY + this.browserHeight > el.offsetTop) && (window.scrollY < (el.offsetTop + el.offsetHeight))) {
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if(((scrollPercent < 18 && scrollPercent > -0.1) && (this.scrollDirection == 'down')) || (scrollPercent < 33 && this.scrollDirection == 'up')) {
                let matchingLink = el.getAttribute('data-link');
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove('is-current-link'));
                document.querySelector(matchingLink).classList.add('is-current-link');
            }
        }
    }

    runOnScroll() {
        this.calcScrollDirection();
        if(window.scrollY > 60) {
             this.siteHeader.classList.add('site-header--dark');
        } else {
            this.siteHeader.classList.remove('site-header--dark');
        }

        this.pagesSections.forEach(el => this.calcSection(el));
    }
}

export default StickyHeader;