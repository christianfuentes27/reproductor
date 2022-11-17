import {Player} from "./player.js";
import { Animation } from "./animation.js";


let player = {
    "time": 5,
    "slideshow": [
        {
            "url": "https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/thestocks.jpg",
            "text": "First one"
        },
        {
            "url": "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/solar-orbiter-toma-imagenes-del-sol-como-nunca-antes/9437612-1-esl-MX/Solar-Orbiter-toma-imagenes-del-Sol-como-nunca-antes.jpg",
            "text" : "Second one"
        },
        {
            "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "text" : "Third one"
        },
    ]
}


let p = new Player();
p.init(player);
let animation = new Animation();
animation.go();