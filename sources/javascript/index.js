import {TweenMax, Power2, TimelineLite} from "gsap";

const tl = new TimelineLite()
console.log(tl)

/**
 * Variables
 */
let innerWidth = window.innerWidth
let innerHeight = window.innerHeight

const $menu = document.querySelector('.menu')
const point = document.querySelector('.point')
const linesContainer_1 = $menu.querySelector('.line-container-1')
const linesContainer_2 = $menu.querySelector('.line-container-2')
const linesContainer_3 = $menu.querySelector('.line-container-3')
const linesContainer_4 = $menu.querySelector('.line-container-4')

const menu_title_1 = $menu.querySelector('.menu_title_1')
const menu_title_2 = $menu.querySelector('.menu_title_2')
const menu_title_3 = $menu.querySelector('.menu_title_3')
const menu_title_4 = $menu.querySelector('.menu_title_4')
const menu_title_5 = $menu.querySelector('.menu_title_5')

TweenLite.set([linesContainer_1, linesContainer_2,linesContainer_3, linesContainer_4], { y: innerHeight});
/**
 * Set DOM elements at opacity 0
 */
TweenLite.set(
    [
        menu_title_1,
        menu_title_2,
        menu_title_3,
        menu_title_4,
        menu_title_5
    ],
    {autoAlpha: 0}
);
point.addEventListener('click', () =>
{
    const tl = new TimelineLite()
    tl
        .to($menu, .3, {autoAlpha: 1, ease: Power1.easeIn})
        .to(menu_title_1, .3, {autoAlpha: 1, ease: Power0.easeIn},'-= 5')
        .to(linesContainer_1, .5, {y : 0, ease: Power0.easeInOut},'-=.5')
        .to(menu_title_2, .3, {autoAlpha: 1, ease: Power0.easeIn})
        .to(linesContainer_2, .5, {y : 0, ease: Power0.easeInOut},'-=.5')
        .to(menu_title_3, .3, {autoAlpha: 1, ease: Power0.easeIn})
        .to(linesContainer_3, .5, {y : 0, ease: Power0.easeInOut},'-=.5')
        .to(menu_title_4, .3, {autoAlpha: 1, ease: Power0.easeIn})
        .to(linesContainer_4, .5, {y : 0, ease: Power0.easeInOut},'-=.5')
        .to(menu_title_5, .3, {autoAlpha: 1, ease: Power0.easeIn})
})

