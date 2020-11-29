import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(items, positionToShow) {
        this.itemsToReveal = items;
        this.positionToShow = positionToShow;
        this.hideInitially();
        this.browserHeight = window.innerHeight;
        this.scrollThrottle = throttle(this.calcCaller, 50).bind(this);
        this.events();
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add('hide-item');
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 400));
    }

    calcCaller() {
        this.itemsToReveal.forEach(el => {
            if(!el.isRevealed) {
                this.showIfScrolledTo(el);
            }
        });
    }

    showIfScrolledTo(el) {
        if(window.scrollY + this.browserHeight > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if(scrollPercent < this.positionToShow) {
                el.classList.add("hide-item--show");
                el.isRevealed = true;
                if(el.isLastItem) {
                    window.removeEventListener('scroll', this.scrollThrottle);
                }
            }
        }
    }
}

export default RevealOnScroll;