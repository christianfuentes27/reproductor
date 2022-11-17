import anime from "../../node_modules/animejs/lib/anime.es.js";

class Animation {
    constructor() {
        this.timeline;
    }

    setTimeline() {
        this.timeline = anime.timeline({
            easing: 'easeOutExpo',
            duration: 3000
        });
    }

    slideAnimation(slide) {
        this.timeline.add({
            targets: slide,
            rotate: '1turn'
        });
    }
}

export {Animation}