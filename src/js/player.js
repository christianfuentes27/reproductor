class Player {
    constructor() {
        this.time = null;
        this.index = 0;
        this.interval;
        this.oldSlide;
        this.currentSlide;
        this.slideshow;
        this.interval;
    }

    init(player) {
        for (let key in player) {
            if (key === "time") {
                this.time = player[key] * 1000;
            } else if (key === "slideshow") {
                this.handleSlideshow(player[key]);
            }
        }
        this.handleSlideMove();
        this.changeTime();
    }

    handleSlideshow(dataSlideshow) {
        let container = document.querySelector('.container');
        for (let slide of dataSlideshow) {
            this.handleSlide(slide, container);
        }
        this.slideshow = document.querySelectorAll('.container .slide');
    }

    handleSlide(dataSlide, container) {
        let slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.display = "none";
        for (let key in dataSlide) {
            if (key === "url") {
                let image = document.createElement('div');
                image.classList.add('slide-img');
                image.style.backgroundImage = `url(${dataSlide[key]})`;
                slide.appendChild(image);
            } else if (key === "text") {
                let text = document.createElement('h4');
                text.classList.add('slide-text');
                text.innerHTML = dataSlide[key];
                slide.appendChild(text);
            }
        }
        container.appendChild(slide);
    }

    handleSlideMove() {
        this.currentSlide = this.slideshow[this.index];
        this.currentSlide.style.display = "flex";
        this.interval = setInterval(this.changeSlide, this.time);
    }

    changeSlide = () => {
        this.index++;
        this.oldSlide = this.slideshow[this.index - 1];
        this.currentSlide = this.slideshow[this.index];
        if (this.slideshow.length != this.index) {
            this.oldSlide.style.display = "none";
            this.currentSlide.style.display = "flex";
        } else {
            clearInterval(this.interval);
        }
    }

    changeTime() {
        let timeBtn = document.querySelector('.time-btn');
        let changeContainer = document.querySelector('.change-container');
        let input = document.querySelector('.time-input');
        let confirmBtn = document.querySelector('.confirm-btn');

        timeBtn.addEventListener('click', () => {
            changeContainer.classList.toggle('show');
        });

        confirmBtn.addEventListener('click', () => {
            if (input.value >= 1) {
                clearInterval(this.interval);
                this.time = input.value * 1000;
                this.interval = setInterval(this.changeSlide, this.time);
                changeContainer.classList.remove('show');
            }
        });
    }
}

export { Player };