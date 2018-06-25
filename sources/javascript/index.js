import {TweenMax, Power2, TimelineLite} from "gsap";

import Parallax from './components/Parallax'

const parallax = new Parallax()

console.log(parallax)
const tl = new TimelineLite()
console.log(tl)

/**
 * Variables
 */
let innerWidth = window.innerWidth
let innerHeight = window.innerHeight

const $menu = document.querySelector('.menu')
const CTA_menu = document.querySelector('.CTA_menu')
const home_image = document.querySelector('.home-container_image')
const linesContainer_1 = $menu.querySelector('.line-container-1')
const linesContainer_2 = $menu.querySelector('.line-container-2')
const linesContainer_3 = $menu.querySelector('.line-container-3')
const linesContainer_4 = $menu.querySelector('.line-container-4')

const menu_title_1 = $menu.querySelector('.menu_title_1')
const menu_title_2 = $menu.querySelector('.menu_title_2')
const menu_title_3 = $menu.querySelector('.menu_title_3')
const menu_title_4 = $menu.querySelector('.menu_title_4')
const menu_title_5 = $menu.querySelector('.menu_title_5')

const CTA_scroll_line = document.querySelector('.callToScroll-container__line')
const callToScrollContainer__text = document.querySelector('.callToScroll-container__text')

const home_title_1 = document.querySelector('.home__title-1')
const home_title_2 = document.querySelector('.home__title-2')
const home_intro_container__text = document.querySelector('.home-intro-container__text')


const slider_image_1 = document.querySelector('.slider_image_1')

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

const tlScroll_CTA = new TimelineMax({repeat : -1})
tlScroll_CTA
    
    .set(CTA_scroll_line, {yPercent: -100})
    .to(CTA_scroll_line, 1, {yPercent: 110})
    
    
let count = 0
CTA_menu.addEventListener('click', () =>
{
    if(count % 2 == 0)
    {
        const tl = new TimelineMax()
        tl
            .to($menu, .3, {autoAlpha: 1, zIndex: 2, ease: Power1.easeIn})
            .to(menu_title_1, .3, {autoAlpha: 1, ease: Power0.easeIn},'-= 5')
            .to(linesContainer_1, .5, {y : 0, ease: Power0.easeInOut},'-=.5')
            .to(menu_title_2, .3, {autoAlpha: 1, ease: Power0.easeIn})
            .to(linesContainer_2, .5, {y : 0, ease: Power0.easeInOut},'-=.5')
            .to(menu_title_3, .3, {autoAlpha: 1, ease: Power0.easeIn})
            .to(linesContainer_3, .5, {y : 0, ease: Power0.easeInOut},'-=.5')
            .to(menu_title_4, .3, {autoAlpha: 1, ease: Power0.easeIn})
            .to(linesContainer_4, .5, {y : 0, ease: Power0.easeInOut},'-=.5')
            .to(menu_title_5, .3, {autoAlpha: 1, ease: Power0.easeIn})
            count ++
    }
    else
    {
        const tl = new TimelineMax()
        tl
            .to(menu_title_5, .3, {autoAlpha: 0, ease: Power0.easeIn})
            .to(linesContainer_4, .5, {y : innerHeight, ease: Power0.easeInOut},'-=.2')
            .to(menu_title_4, .3, {autoAlpha: 0, ease: Power0.easeIn},'-=.2')
            .to(linesContainer_3, .5, {y : innerHeight, ease: Power0.easeInOut},'-=.5')
            .to(menu_title_3, .3, {autoAlpha: 0, ease: Power0.easeIn},'-=.2')
            .to(linesContainer_2, .5, {y : innerHeight, ease: Power0.easeInOut},'-=.5')
            .to(menu_title_2, .3, {autoAlpha: 0, ease: Power0.easeIn},'-=.2')            
            .to(linesContainer_1, .5, {y : innerHeight, ease: Power0.easeInOut},'-=.5')
            .to(menu_title_1, .3, {autoAlpha: 0, ease: Power0.easeIn},'-=.2')    
            .to($menu, .3, {autoAlpha: 0,zIndex: 0,ease: Power1.easeIn})
            count ++
    }
    
})

callToScrollContainer__text.addEventListener('click', () =>
{
    console.log(home_title_1)
    const tlHomeOut = new TimelineLite() 
    tlHomeOut
        .to([home_title_1, home_title_2, home_intro_container__text], .8, {yPercent: 110, ease: Expo.easeIn})
        .to(home_image, 1.5, {yPercent: -100, ease: Expo.easeInOut}, '-= .3')
        .to(slider_image_1,1.5, {yPercent: -100, ease: Expo.easeInOut},'-=1.5')
        .to(slider_image_1, .8, {xPercent: -50, ease: Expo.easeInOut}, '+= 3')

})

