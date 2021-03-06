import {TweenMax, Power2, TimelineLite} from "gsap"
import {data} from './components/data'

const $menu = document.querySelector('.menu')

const CTA_menu = document.querySelector('.CTA_menu')
const plus_icon = document.querySelector('.plus-icon')
const plus_intro_part = document.querySelector('.plus-intro-part')

const player = document.querySelector('.player')
const video = document.querySelector('video')


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

const sound_container = document.querySelector('.sound_container')
const sound_bar_1 = document.querySelector('.sound_bar-1')
const sound_bar_2 = document.querySelector('.sound_bar-2')
const sound_bar_3 = document.querySelector('.sound_bar-3')


const plus_intro_part__text_container__titre_1 = document.querySelector('.plus-intro-part__text-container__titre-1')
const plus_intro_part__text_container__titre_2 = document.querySelector('.plus-intro-part__text-container__titre-2')
const plus_intro_part__text_container__text_1 = document.querySelector('.plus-intro-part__text-container__text-1')
const plus_intro_part__text_container__text_2 = document.querySelector('.plus-intro-part__text-container__text-2')

const collaborative_image_1 = document.querySelector('.sufficient_image_1')
const collaborative_image_2 = document.querySelector('.sufficient_image_2')

const conclusion_container = document.querySelector('.conclusion-container')


const collaborative_text_1 = document.querySelector('.collaborative_1')
const collaborative_text_2 = document.querySelector('.collaborative_2')

const collaborative_text_3 = document.querySelector('.collaborative_3')


const intro_2_container = document.querySelector('.intro_2_container')

const intro_2_text_1 = document.querySelector('.intro_2_text_1')
const intro_2_text_2 = document.querySelector('.intro_2_text_2')
const intro_2_text_3 = document.querySelector('.intro_2_text_3')

const calltoAction_click = document.querySelector('.sufficient__calltoAction_click-container')
const collaborative_container = document.querySelector('.collaborative-container')
const intro_section__text_container = document.querySelector('.intro-section__text-container')

const intro_section__title_container__title = document.querySelector('.intro-section__title-container__title')
const intro_section__text_container__text = document.querySelector('.intro-section__text-container__text')
const intro_section__global_container = document.querySelector('.intro-section__global-container')
let video_play = false
TweenLite.set(
    [
        plus_icon,
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
        collaborative_text_1,
        collaborative_text_2,
        collaborative_text_3,
    ], { autoAlpha : 0})


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

let click_count = 0
calltoAction_click.addEventListener('click', () =>
{
    if(click_count == 0)
    {
        const tlBlankPage = new TimelineLite()
            .to(intro_section__title_container__title, .25, {yPercent: -150, ease: Power1.easeIn})
            .to(intro_section__text_container__text, .5, {yPercent: -130, ease: Power1.easeIn}, '-=.25')
            .to(calltoAction_click, .3, {autoAlpha: 0})
            .to([CTA_menu, calltoAction_click], .3, {color : '#000'}, '-=.3 ')
            .to(sound_container, .3, {borderColor: '#000'}, '-=.3')
            .to([sound_bar_1,sound_bar_2,sound_bar_3], .3, {background: '#000'}, '-=.3')
            .fromTo(collaborative_image_1, 1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=.3')
            .fromTo(intro_2_container,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
            .to(collaborative_text_1, .8, {autoAlpha: 1, ease: Power1.easeIn})
            .to(collaborative_text_1, .8, {autoAlpha: 0, ease: Power1.easeIn}, '+=.5')
            .to(collaborative_text_2, .8, {autoAlpha: 1, ease: Power1.easeIn})
            .to(collaborative_text_2, .8, {autoAlpha: 0, ease: Power1.easeIn}, '+=.5')
            .to(collaborative_text_3, .8, {autoAlpha: 1, ease: Power1.easeIn})
            .to(calltoAction_click, .8, {autoAlpha: 1, ease: Power1.easeIn},'-=2')
        click_count++
    }
    else if(click_count == 1)
    {
        intro_section__title_container__title.innerHTML = data[7].title
        intro_section__text_container__text.innerHTML = data[7].text
        intro_section__global_container.style.width = '40%'
        intro_section__global_container.style.height = '40%'
        intro_section__text_container.style.height = '40%'

        plus_intro_part__text_container__text_1.innerHTML = data[7].plus_text_1
        plus_intro_part__text_container__text_2.innerHTML = data[7].plus_text_2
        
        plus_intro_part__text_container__titre_1.innerHTML = data[7].plus_title_1
        plus_intro_part__text_container__titre_2.innerHTML = data[7].plus_title_2
        const tlContentTextPage = new TimelineLite()

        tlContentTextPage
            .to(plus_icon, .2,{autoAlpha:1})
            .to([CTA_menu, calltoAction_click], .3, {color : '#fff'})
            .to(plus_intro_part, .2, {background: '#7A62C8'})
            .to(sound_container, .3, {borderColor: '#fff'}, '-=.3')
            .to([sound_bar_1,sound_bar_2,sound_bar_3], .3, {background: '#fff'}, '-=.3')            
            .to(intro_2_text_3, .8, {autoAlpha: 0, ease: Power1.easeIn})
            .fromTo(intro_2_container, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut},'-=.3')
            .fromTo(collaborative_image_2,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
            .fromTo(intro_section__text_container__text, 2.5,{yPercent: 150}, {yPercent: 0, ease:Expo.easeInOut})
            .fromTo(intro_section__title_container__title, 1.4, {yPercent: 170},{yPercent: 0, ease:Expo.easeInOut}, '-=1.8')
            click_count++
    }
    else if (click_count == 2)
    {
        video_play = true
        const showPlayer = new TimelineLite()
        showPlayer
            .to(intro_section__title_container__title, .25, {yPercent: -150, ease: Power1.easeIn})
            .to(intro_section__text_container__text, .5, {yPercent: -130, ease: Power1.easeIn}, '-=.25')
            .fromTo(collaborative_image_2, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut},'-=.3')
            .fromTo(player,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')

        video.play()
        video.volume = .4
        click_count ++

    }
    else if (click_count == 3)
    {
        video.pause()
        const showPlayer = new TimelineMax({onComplete: swapText})
        showPlayer
            .fromTo(player, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut},'-=.3')
            .fromTo(conclusion_container,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
            .to([intro_2_text_1, intro_2_text_2], .3, {autoAlpha:0}, '+=3')
            .to(intro_2_text_2, .1, {yPercent: -50})
        click_count++

    }
    else if(click_count == 4)
    {
        CTA_menu.click()
        TweenLite.set($menu,{zIndex:5})
        
    }
})
const swapText = () =>
{

    intro_2_text_1.innerHTML = '<span class="blue">All these innovations</span> raise the question of <span class="gold">intermediation in the data chain</span>, particularly in <span class="gold">data access and processing</span>.'
    intro_2_text_2.innerHTML = '<span class="blue">The open data concept</span>, which is intended to be collaborative, poses the dilemma <span class="gold">between private life and public utility</span> and may appear contradictory <span class="gold">if new intermediaries emerge and establish their monopoly</span>. '
    const tl = new TimelineLite()
    tl
        .to(intro_2_text_1, .8, {autoAlpha:1})
        .to(intro_2_text_2, .8, {autoAlpha:1}, '-=.4')
        .to(calltoAction_click, .3,{color: '#000'})
    
}
let open = true
const player_plus = document.querySelector('.player_plus')
plus_icon.addEventListener('click', () =>
{
    if(video_play)
    {
        
        if(!open)
        {
            const tlopenPlayerPlus = new TimelineLite()
            tlopenPlayerPlus
                .to(player_plus, .8, {yPercent: 350, ease: Expo.easeInOut})
            open = true
        }
        else
        {
            const tlopenPlayerPlus = new TimelineLite()
            tlopenPlayerPlus
                .to(player_plus, .8, {yPercent: 0, ease: Expo.easeInOut})
            open = false
        }
        
    }
    else
    {

        if(open)
        {
            const tlplus = new TimelineLite()
            tlplus
                
                .set([collaborative_container, plus_icon],{zIndex: 3})
                .to(collaborative_image_2, 1.5, {xPercent: -55, ease: Expo.easeInOut})
                .to(plus_intro_part, 1.5, {xPercent: -100, ease: Expo.easeInOut},'-=1.5')
                .to(intro_section__global_container, .5,{scale: .8, zIndex: 3},'-=1')
                
            open = false
        }
        else
        {
            const tlplus = new TimelineLite()
            tlplus
        
                .to(collaborative_image_2, 1.5, {xPercent: 0, ease: Expo.easeInOut})
                .to(plus_intro_part, 1.5, {xPercent: 0, ease: Expo.easeInOut},'-=1.5')                
                .set(collaborative_container,{zIndex: 0})
                .to(intro_section__global_container, .3,{scale: 1, yPercent: 0},'-=1')
                
            open = true
        }
    }
    
    
})



