import {TweenMax, Power2, TimelineLite} from "gsap"
import {data} from './components/data'

// import Parallax from './components/Parallax'
const tl = new TimelineLite()


/**
 * Variables
 */
let innerWidth = window.innerWidth
let innerHeight = window.innerHeight
let currentSlide = 0;


const $menu = document.querySelector('.menu')
const CTA_menu = document.querySelector('.CTA_menu')
const home_container = document.querySelector('.home-container')
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
const menu_title_6 = $menu.querySelector('.menu_title_6')

const menu_section_1 = $menu.querySelector('.section-1')
const menu_section_2 = $menu.querySelector('.section-2')
const menu_section_3 = $menu.querySelector('.section-3')
const menu_section_4 = $menu.querySelector('.section-4')
const menu_section_5 = $menu.querySelector('.section-5')
const menu_section_6 = $menu.querySelector('.section-6')

const callToScroll_container = document.querySelector('.callToScroll-container')
const CTA_scroll_line = document.querySelector('.callToScroll-container__line')
const callToScrollContainer__text = document.querySelector('.callToScroll-container__text')

const home_title_1 = document.querySelector('.home__title-1')
const home_title_2 = document.querySelector('.home__title-2')
const home_intro_container__text = document.querySelector('.home-intro-container__text')


const slider_image_1 = document.querySelector('.slider_image_1')
const slider_image_2 = document.querySelector('.slider_image_2')
const slider_image_3 = document.querySelector('.slider_image_3')
const slider_image_4 = document.querySelector('.slider_image_4')



/**
 * Intro Variables
 */
const intro_section__text_container = document.querySelector('.intro-section__text-container')
const intro_section__global_container = document.querySelector('.intro-section__global-container')
const intro_section__title_container__title = document.querySelector('.intro-section__title-container__title')
const intro_section__text_container__text = document.querySelector('.intro-section__text-container__text')

const intro_slide__controller_container = document.querySelector('.intro-slide__controller-container')
const intro_slide__slide_1 = document.querySelector('.intro-slide__controller-container__slide_1')
const intro_slide__slide_2 = document.querySelector('.intro-slide__controller-container__slide_2')
const intro_slide__slide_3 = document.querySelector('.intro-slide__controller-container__slide_3')
const intro_slide__slide_4 = document.querySelector('.intro-slide__controller-container__slide_4')
const current_slide_indicator = document.querySelector('.current_slide_indicator')

const intro_2_container = document.querySelector('.intro_2_container')

const calltoAction_click_container = document.querySelector('.calltoAction_click-container')
 
const intro_2_text_1 = document.querySelector('.intro_2_text_1')
const intro_2_text_2= document.querySelector('.intro_2_text_2')
const intro_2_text_3 = document.querySelector('.intro_2_text_3')

const plus_icon = document.querySelector('.plus-icon')
const plus_intro_part = document.querySelector('.plus-intro-part')


TweenLite.set([linesContainer_1, linesContainer_2,linesContainer_3, linesContainer_4], { y: innerHeight});

TweenLite.set([intro_2_text_1,intro_2_text_2,intro_2_text_3], {visibility: 'hiddden', autoAlpha: 0});
/**
 * Set DOM elements at opacity 0
 */
TweenLite.set(
    [
        menu_title_1,
        menu_title_2,
        menu_title_3,
        menu_title_4,
        menu_title_5,
        menu_title_6,
        menu_section_1,
        menu_section_2,
        menu_section_3,
        menu_section_4,
        menu_section_5,
        menu_section_6,
        intro_section__global_container,
        plus_icon
    ],
    {autoAlpha: 0}
);
TweenLite.set(intro_section__title_container__title, {yPercent: 150})
TweenLite.set(intro_section__text_container__text, {yPercent: 200})

const tlScroll_CTA = new TimelineMax({repeat : -1})
tlScroll_CTA
    .set(CTA_scroll_line, {yPercent: -100})
    .to(CTA_scroll_line, 1, {yPercent: 110})
    
    
let count_menu = 0
CTA_menu.addEventListener('click', () =>
{
    if(count_menu % 2 == 0)
    {
        const tl = new TimelineMax()
        tl
            .to($menu, .3, {autoAlpha: 1, zIndex: 2, ease: Power1.easeIn})
            .staggerFromTo([menu_section_1,menu_section_2,menu_section_3,menu_section_4,menu_section_5,menu_section_6],
            .6,
            {autoAlpha: 0, yPercent: 100}, 
            {autoAlpha : 1, yPercent: 0, ease:Power0.easeIn},
            .1
            )
            // .to(menu_title_1, .3, {autoAlpha: 1, ease: Power0.easeIn},'-=0.2')
            // .to(menu_title_2, .3, {autoAlpha: 1, ease: Power0.easeIn})
            // .to(menu_title_3, .3, {autoAlpha: 1, ease: Power0.easeIn})
            // .to(menu_title_4, .3, {autoAlpha: 1, ease: Power0.easeIn})
            // .to(menu_title_5, .3, {autoAlpha: 1, ease: Power0.easeIn})
            // .to(menu_title_6, .3, {autoAlpha: 1, ease: Power0.easeIn})
            count_menu ++
    }
    else
    {
        const tl = new TimelineMax()
        tl
            .to(menu_title_6, .3, {autoAlpha: 0, ease: Power0.easeIn})
            .to(menu_title_5, .3, {autoAlpha: 0, ease: Power0.easeIn},'-=.2')
            .to(menu_title_4, .3, {autoAlpha: 0, ease: Power0.easeIn},'-=.2')
            .to(menu_title_3, .3, {autoAlpha: 0, ease: Power0.easeIn},'-=.2')
            .to(menu_title_2, .3, {autoAlpha: 0, ease: Power0.easeIn},'-=.2')            
            .to(menu_title_1, .3, {autoAlpha: 0, ease: Power0.easeIn},'-=.2')    
            .to($menu, .3, {autoAlpha: 0,zIndex: 0,ease: Power1.easeIn},'-=.2')
            count_menu ++
    }
})
/**
 * 
 * Menu Click on elements
 */

menu_section_1.addEventListener('click', () =>
{
    const tl = new TimelineLite()
    tl
        .to(menu_section_1, .5, {scaleX : 2})
})







 
let countScroll = 0
let nextSlide = 0
callToScrollContainer__text.addEventListener('click', () =>
{
    if(countScroll == 0)
    {
        const tlHomeOut = new TimelineLite() 
        tlHomeOut
            .to([home_title_1, home_title_2, home_intro_container__text], .8, {yPercent: 110, ease: Expo.easeIn})
            .to(home_image, 1.5, {yPercent: -100, ease: Expo.easeInOut}, '-= .3')
            .to(slider_image_1,1.5, {yPercent: -100, ease: Expo.easeInOut},'-=1.5')
            .set(intro_section__global_container, {autoAlpha:1})
            .to(intro_section__text_container__text, 2.5, {yPercent: 0, ease:Expo.easeInOut},'-=1.5')
            .to(intro_section__title_container__title, 1.5, {yPercent: 0, ease:Expo.easeInOut}, '-=1.5')
            .set(intro_slide__controller_container, {autoAlpha: 1}, '-=1')
            .staggerFromTo([intro_slide__slide_1,intro_slide__slide_2,intro_slide__slide_3, intro_slide__slide_4], .4, {yPercent: 150, autoAlpha: 0},{yPercent: 0, autoAlpha: 1}, .1, '-=1')
            .to(current_slide_indicator, .3, {autoAlpha: 1}, '-.5')
            // .to(slider_image_1, .8, {xPercent: -60, ease: Expo.easeInOut}, '+= 3')
        countScroll ++
        nextSlide = currentSlide + 1
        
    }
    else if (countScroll == 1) 
    {
        countScroll ++
        currentSlide = 0
        nextSlide = currentSlide + 1
        const tlSlide1Out = new TimelineMax({onComplete: switchSlide, onCompleteParams : [nextSlide, currentSlide]})
        tlSlide1Out
            .to(calltoAction_click_container, .3, {autoAlpha: 0, visibility: 'hidden'})
            .to(intro_section__title_container__title, .5, {yPercent: -150, ease: Power1.easeIn})
            .to(intro_section__text_container__text, .7, {yPercent: -130, ease: Power1.easeIn}, '-=.5')
        
    }
    else if(countScroll == 2)
    {
        countScroll ++
        currentSlide = 1
        nextSlide = currentSlide + 1
        const tlSlide1Out = new TimelineMax({onComplete: switchSlide, onCompleteParams : [nextSlide, currentSlide]})
        tlSlide1Out
            .to(calltoAction_click_container, .3, {autoAlpha: 0, visibility: 'hidden'})
            .to(intro_section__title_container__title, .5, {yPercent: -150, ease: Power1.easeIn})
            .to(intro_section__text_container__text, .7, {yPercent: -130, ease: Power1.easeIn}, '-=.5')
    }
    else if(countScroll == 3)
    {
        countScroll ++
        currentSlide = 2
        nextSlide = currentSlide + 1
        const tlSlide1Out = new TimelineMax({onComplete: switchSlide, onCompleteParams : [nextSlide, currentSlide]})
        tlSlide1Out
            .to(calltoAction_click_container, .3, {autoAlpha: 0, visibility: 'hidden'})
            .to(intro_section__title_container__title, .5, {yPercent: -150, ease: Power1.easeIn})
            .to(intro_section__text_container__text, .7, {yPercent: -130, ease: Power1.easeIn}, '-=.5')
    }

})

const switchSlide = (nextSlide, currentSlide) =>
{
    intro_section__title_container__title.innerHTML = data[nextSlide].title
    intro_section__text_container__text.innerHTML = data[nextSlide].text
    if(currentSlide == 0)
    {
        if(nextSlide == 1)
        {
            intro_section__global_container.style.width = '50%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_1, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_2,1,{yPercent: 0}, {yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 140})
                .to(callToScroll_container, .3, {autoAlpha: 1})
                
                
        }
        else if(nextSlide == 2)
        {
            intro_section__global_container.style.width = '65%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_1, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_3,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 280})
                .to(callToScroll_container, .3, {autoAlpha: 1})
                
        }
        else if(nextSlide == 3)
        {
            intro_section__global_container.style.width = '65%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_1, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_4,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 420})
                .to(callToScroll_container, .3, {autoAlpha: 0})
                .to(calltoAction_click_container, .3, {autoAlpha: 1, visibility: 'visible'}, '+=.8')
        }
    }
    else if(currentSlide == 1)
    {
        if(nextSlide == 0)
        {
            intro_section__global_container.style.width = '40%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_2, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_1,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 0})
                .to(callToScroll_container, .3, {autoAlpha: 1})
        }
        else if(nextSlide == 2)
        {
            intro_section__global_container.style.width = '65%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_2, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_3,1,{yPercent: 0}, {yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 280})
                .to(callToScroll_container, .3, {autoAlpha: 1})
                .to(calltoAction_click_container, .3, {autoAlpha: 0})
                
        }
        else if(nextSlide == 3)
        {
            intro_section__global_container.style.width = '65%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_2, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_4,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 420})
                .to(callToScroll_container, .3, {autoAlpha: 0})
                .to(calltoAction_click_container, .3, {autoAlpha: 1, visibility: 'visible'}, '+=.8')
        }
    }
    else if(currentSlide == 2)
    {
        
        if(nextSlide == 0)
        {
            intro_section__global_container.style.width = '40%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_3, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_1,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 0})
                .to(callToScroll_container, .3, {autoAlpha: 1})
        }
        else if(nextSlide == 1)
        {
            intro_section__global_container.style.width = '50%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_3, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_2,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 140})
                .to(callToScroll_container, .3, {autoAlpha: 1})
        }
        else if(nextSlide == 3)
        {
            intro_section__global_container.style.width = '65%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_3, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_4,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 420})
                .to(callToScroll_container, .3, {autoAlpha: 0})
                .to(calltoAction_click_container, .3, {autoAlpha: 1, visibility: 'visible'}, '+=.8')
        }
    }
    else if(currentSlide == 3)
    {
        TweenLite.to(calltoAction_click_container, .3, {autoAlpha: 0, visibility: 'hidden'})
        if(nextSlide == 0)
        {
            intro_section__global_container.style.width = '40%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_4, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_1,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 0})
                .to(callToScroll_container, .3, {autoAlpha: 1})
        }
        else if(nextSlide == 1)
        {
            intro_section__global_container.style.width = '50%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_4, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_2,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 140})
                .to(callToScroll_container, .3, {autoAlpha: 1})
        }
        else if(nextSlide == 2)
        {
            intro_section__global_container.style.width = '65%'
            const tlSlider = new TimelineLite()
                .fromTo(slider_image_4, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
                .fromTo(slider_image_3,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
                .to(current_slide_indicator, .4, {yPercent: 280})
                .to(callToScroll_container, .3, {autoAlpha: 1})
        }
        
    }

    const tlfadeInIntro = new TimelineLite()
    tlfadeInIntro
        .fromTo(intro_section__text_container__text, 2.5,{yPercent: 150}, {yPercent: 0, ease:Expo.easeInOut})
        .fromTo(intro_section__title_container__title, 1.4, {yPercent: 150},{yPercent: 0, ease:Expo.easeInOut}, '-=1.5')

}

/**
 * Number event listener
 */
intro_slide__slide_3.addEventListener('click', () =>
{

    nextSlide = 2
    const tlSlide1Out = new TimelineMax({onComplete: switchSlide, onCompleteParams : [nextSlide, currentSlide]})
    tlSlide1Out
        .to(intro_section__title_container__title, .5, {yPercent: -150, ease: Power1.easeIn})
        .to(intro_section__text_container__text, .7, {yPercent: -130, ease: Power1.easeIn}, '-=.5')  
        .to(current_slide_indicator, .8, {yPercent: 280})
        .to(callToScroll_container, .3, {autoAlpha: 1})
        
    currentSlide = 2

    
})

intro_slide__slide_2.addEventListener('click', () =>
{

    nextSlide = 1
    
    const tlSlide1Out = new TimelineMax({onComplete: switchSlide, onCompleteParams : [nextSlide, currentSlide]})
    tlSlide1Out
        .to(calltoAction_click_container, .3, {autoAlpha: 0, visibility: 'hidden'})
        .to(intro_section__title_container__title, .25, {yPercent: -150, ease: Power1.easeIn})
        .to(intro_section__text_container__text, .5, {yPercent: -130, ease: Power1.easeIn}, '-=.25')  
        .to(current_slide_indicator, .8, {yPercent: 140})
        .to(callToScroll_container, .3, {autoAlpha: 1})
    currentSlide = 1
})

intro_slide__slide_1.addEventListener('click', () =>
{
    
    nextSlide = 0
    const tlSlide1Out = new TimelineMax({onComplete: switchSlide, onCompleteParams : [nextSlide, currentSlide]})
    tlSlide1Out
        .to(calltoAction_click_container, .3, {autoAlpha: 0, visibility: 'hidden'})
        .to(intro_section__title_container__title, .25, {yPercent: -150, ease: Power1.easeIn})
        .to(intro_section__text_container__text, .5, {yPercent: -130, ease: Power1.easeIn}, '-=.25')  
        .to(current_slide_indicator, .8, {yPercent: 0})
        .to(callToScroll_container, .3, {autoAlpha: 1})

    currentSlide = 0
})

intro_slide__slide_4.addEventListener('click', () =>
{
    console.log('mdr')
    nextSlide = 3
    console.log(currentSlide)
    console.log(nextSlide)
    const tlSlide1Out = new TimelineMax({onComplete: switchSlide, onCompleteParams : [nextSlide, currentSlide]})
    tlSlide1Out
        .to(calltoAction_click_container, .3, {autoAlpha: 0, visibility: 'hidden'})
        .to(intro_section__title_container__title, .25, {yPercent: -150, ease: Power1.easeIn})
        .to(intro_section__text_container__text, .5, {yPercent: -130, ease: Power1.easeIn}, '-=.25')  
        .to(current_slide_indicator, .8, {yPercent: 420})
        .to(callToScroll_container, .3, {autoAlpha: 0})
        

    currentSlide = 3
})


let click_count = 0
calltoAction_click_container.addEventListener('click', () =>
{
    TweenLite.to(calltoAction_click_container, .3, {autoAlpha: 0, visibility: 'hidden'})
    CTA_menu.click()
})
// calltoAction_click_container.addEventListener('click', () =>
// {
//     if(click_count == 0)
//     {
//         const tl = new TimelineLite()
//         .to(calltoAction_click_container, .1, {autoAlpha:0})
//         .set([CTA_menu, calltoAction_click_container], {color: '#000'})
//         .to(intro_section__title_container__title, .25, {xPercent: -150, ease: Power1.easeIn})
//         .to(intro_section__text_container__text, .5, {xPercent: -130, ease: Power1.easeIn}, '-=.25')  
//         .to(slider_image_3, 1.5, {xPercent: -100, ease:Expo.easeInOut},'-=.5')
//         .to(intro_2_container, 1.5, {xPercent: -100, ease:Expo.easeInOut},'-=1.5')
//         .to(intro_2_text_1, .8, {visibility: 'visible', autoAlpha : 1 , yPercent: 0 ,ease: Power1.easeIn})
//         .to(intro_2_text_1, .8, {autoAlpha : 0}, '+=1')
//         .to(intro_2_text_2, .8, {visibility: 'visible', autoAlpha : 1 , yPercent: 0 ,ease: Power1.easeIn})
//         .to(intro_2_text_2, .8, {autoAlpha : 0}, '+=1')
//         .to(intro_2_text_3, .8, {visibility: 'visible', autoAlpha : 1 , yPercent: 0 ,ease: Power1.easeIn})
//         .to(intro_2_text_3, .8, {autoAlpha : 0}, '+=1')
//         .set(intro_slide__controller_container, {visibility: 'hidden', autoAlpha: 0})
//         .set(intro_2_text_2, {xPercent: 20, yPercent: -40})
//         .set(intro_2_text_1, {xPercent: -20, yPercent: -100})
//         .set(intro_2_text_3, {xPercent: -20, yPercent: 40})
//         .to(intro_2_text_2, .8, {autoAlpha : 1 ,ease: Power1.easeIn}, '+=1')
//         .to(intro_2_text_1, .8, {autoAlpha : 1 ,ease: Power1.easeIn}, '-=.4')
//         .to(intro_2_text_3, .8, {autoAlpha : 1 ,ease: Power1.easeIn}, '-=.4')
//         .to(calltoAction_click_container, .3, {autoAlpha:1, ease: Power1.easeIn})
        
//         click_count++
//     }
//     else if(click_count == 1)
//     {
//         intro_section__title_container__title.innerHTML = data[3].title
//         intro_section__text_container__text.innerHTML = data[3].text
//         intro_section__global_container.style.width = '60%'
//         const tl_1 = new TimelineLite()
//         tl_1
//             .to(intro_2_text_2, .8, {autoAlpha : 0})
//             .to(intro_2_text_3, .8, {autoAlpha : 0}, '-=.4')
//             .to(intro_2_text_1, .8, {autoAlpha : 0}, '-=.4')
//             .set([CTA_menu, calltoAction_click_container], {color: '#fff'})
//             .to(plus_icon, .3, {autoAlpha: 1, ease: Power0.easeIn})
//             .fromTo(intro_2_container, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut}, '-= .3')
//             .fromTo(slider_image_4,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
//             .set([intro_section__text_container__text, intro_section__title_container__title], {xPercent: 0})
//             .fromTo(intro_section__text_container__text, 2.5,{yPercent: 150}, {yPercent: 0, ease:Expo.easeInOut})
//             .fromTo(intro_section__title_container__title, 1.4, {yPercent: 150},{yPercent: 0, ease:Expo.easeInOut}, '-=1.5')
//     }
    
// })
let open = true
plus_icon.addEventListener('click', () =>
{

    if(!open)
    {
        const tlplus = new TimelineLite()
        tlplus
            
            .set([home_container, plus_icon],{zIndex: 3})
            .to(slider_image_4, 1.5, {xPercent: -55, ease: Expo.easeInOut})
            .to(plus_intro_part, 1.5, {xPercent: -100, ease: Expo.easeInOut},'-=1.5')
            .to(intro_section__global_container, .5,{scale: .6},'-=1')
        open = true
    }
    else
    {
        const tlplus = new TimelineLite()
        tlplus

            .to(slider_image_4, 1.5, {xPercent: 0, ease: Expo.easeInOut})
            .to(plus_intro_part, 1.5, {xPercent: 0, ease: Expo.easeInOut},'-=1.5')
            .set(home_container,{zIndex: 0})
            .to(intro_section__global_container, .3,{scale: 1, yPercent: 0},'-=1')
            
        open = false
    }
    
})

