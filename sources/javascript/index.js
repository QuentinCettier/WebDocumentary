import {TweenMax, Power2, TimelineLite} from "gsap";


const tl = new TimelineLite()
console.log(tl)

const point = document.querySelector('.point')

point.addEventListener('click', () =>
{
    const tl = new TimelineLite()

    tl
        .to(point, 1.5, {scale : 40, ease: Power1.easeIn})
        .to(point, .5, {scale : 1, ease: Power1.easeOut})
})