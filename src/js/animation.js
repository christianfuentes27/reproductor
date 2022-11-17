import anime from "../../node_modules/animejs/lib/anime.es.js";

class Animation {
    go() {
        anime.timeline({
            targets: '.container .slide',
            easing: 'easeOutExpo',
            duration: 500
        });
    }
}

export {Animation}