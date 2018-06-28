import {TweenMax, Power2, TimelineLite} from "gsap"
import {data} from './components/data'

const player = document.querySelector('.player')
const sufficient_container = document.querySelector('.sufficient-container')
const calltoAction_click = document.querySelector('.sufficient__calltoAction_click-container')
const intro_section__title_container__title = document.querySelector('.intro-section__title-container__title')
const intro_section__text_container__text = document.querySelector('.intro-section__text-container__text')
const intro_section__global_container = document.querySelector('.intro-section__global-container')

const plus_icon = document.querySelector('.plus-icon')
const plus_intro_part = document.querySelector('.plus-intro-part')

const $menu = document.querySelector('.menu')

const CTA_menu = document.querySelector('.CTA_menu')

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


const sufficient_image_1 = document.querySelector('.sufficient_image_1')
const sufficient_image_2 = document.querySelector('.sufficient_image_2')
const sufficient_image_3 = document.querySelector('.sufficient_image_3')

const intro_2_container = document.querySelector('.intro_2_container')


const intro_2_text_1 = document.querySelector('.intro_2_text_1')
const intro_2_text_2 = document.querySelector('.intro_2_text_2')
const intro_2_text_3 = document.querySelector('.intro_2_text_3')

const video = document.querySelector('video')
const pauseIcon = document.querySelector('.pause-icon')

const plus_intro_part__text_container__titre_1 = document.querySelector('.plus-intro-part__text-container__titre-1')
const plus_intro_part__text_container__titre_2 = document.querySelector('.plus-intro-part__text-container__titre-2')
const plus_intro_part__text_container__titre_3 = document.querySelector('.plus-intro-part__text-container__titre-3')
const plus_intro_part__text_container__text_1 = document.querySelector('.plus-intro-part__text-container__text-1')
const plus_intro_part__text_container__text_2 = document.querySelector('.plus-intro-part__text-container__text-2')
const plus_intro_part__text_container__text_3 = document.querySelector('.plus-intro-part__text-container__text-3')

const conclusion_container = document.querySelector('.conclusion-container')
const dataviz = document.querySelector('.dataviz')
let video_play = false

TweenLite.set(
[
    intro_2_text_1,
    intro_2_text_2,
    intro_2_text_3,
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
let click_second = false
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
            .fromTo(sufficient_image_1, 1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=.3')
            .fromTo(intro_2_container,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
            .to(intro_2_text_1, .8, {autoAlpha: 1, ease: Power1.easeIn})
            .to(intro_2_text_1, .8, {autoAlpha: 0, ease: Power1.easeIn}, '+=.5')
            .to(intro_2_text_2, .8, {autoAlpha: 1, ease: Power1.easeIn})
            .to(intro_2_text_2, .8, {autoAlpha: 0, ease: Power1.easeIn}, '+=.5')
            .to(intro_2_text_3, .8, {autoAlpha: 1, ease: Power1.easeIn})
            .to(calltoAction_click, .8, {autoAlpha: 1, ease: Power1.easeIn},'-=2')
        click_count++
    }
    else if (click_count == 1) {
        intro_section__title_container__title.innerHTML = data[5].title
        intro_section__text_container__text.innerHTML = data[5].text
        intro_section__global_container.style.width = '60%'
        const tlContentTextPage = new TimelineLite()

        tlContentTextPage
            .to(plus_icon, .2,{autoAlpha:1})
            .to([CTA_menu, calltoAction_click], .3, {color : '#fff'})
            .to(sound_container, .3, {borderColor: '#fff'}, '-=.3')
            .to([sound_bar_1,sound_bar_2,sound_bar_3], .3, {background: '#fff'}, '-=.3')            
            .to(intro_2_text_3, .8, {autoAlpha: 0, ease: Power1.easeIn})
            .fromTo(intro_2_container, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut},'-=.3')
            .fromTo(sufficient_image_2,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
            .fromTo(intro_section__text_container__text, 2.5,{yPercent: 150}, {yPercent: 0, ease:Expo.easeInOut})
            .fromTo(intro_section__title_container__title, 1.4, {yPercent: 150},{yPercent: 0, ease:Expo.easeInOut}, '-=1.5')
        click_count++
    }
    else if (click_count == 2)
    {
        video_play = true
        console.log(video_play)
        const showPlayer = new TimelineLite()
        showPlayer
            .to(intro_section__title_container__title, .25, {yPercent: -150, ease: Power1.easeIn})
            .to(intro_section__text_container__text, .5, {yPercent: -130, ease: Power1.easeIn}, '-=.25')
            .fromTo(sufficient_image_2, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut},'-=.3')
            .fromTo(player,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')

        video.play()
        video.volume = .4
        click_count ++

    }
    else if (click_count == 3)
    {
        intro_section__title_container__title.innerHTML = data[6].title
        intro_section__text_container__text.innerHTML = data[6].text
        intro_section__global_container.style.width = '60%'


        plus_intro_part__text_container__text_1.innerHTML = data[6].plus_text_1
        plus_intro_part__text_container__text_2.innerHTML = data[6].plus_text_2
        plus_intro_part__text_container__text_3.innerHTML = data[6].plus_text_3
        

        plus_intro_part__text_container__titre_1.innerHTML = data[6].plus_title_1
        plus_intro_part__text_container__titre_2.innerHTML = data[6].plus_title_2
        plus_intro_part__text_container__titre_3.innerHTML = data[6].plus_title_3


        video.pause()
        video_play = false
        click_second = true
        const showPlayer = new TimelineLite()
        showPlayer
            .fromTo(player, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut},'-=.3')
            .fromTo(sufficient_image_3,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
            .fromTo(intro_section__text_container__text, 2.5,{yPercent: 150}, {yPercent: 0, ease:Expo.easeInOut})
            .fromTo(intro_section__title_container__title, 1.4, {yPercent: 150},{yPercent: 0, ease:Expo.easeInOut}, '-=1.5')
            .set(sufficient_container, {zIndex:0,})

        click_count ++
    }
    else if(click_count == 4)
    {
        const showDataViz = new TimelineLite()
        showDataViz
            .to(plus_icon, .1, {autoAlpha: 0})
            .to(intro_section__title_container__title, .25, {yPercent: -150, ease: Power1.easeIn})
            .to(intro_section__text_container__text, .5, {yPercent: -130, ease: Power1.easeIn}, '-=.25')
            .fromTo(sufficient_image_3, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut},'-=.3')
            .fromTo(dataviz,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')
        click_count++
    }
    else if(click_count == 5)
    {
        const showConclusion = new TimelineLite()
        
        showConclusion
            .to([CTA_menu, calltoAction_click], .3, {color : '#000'})
            .to(sound_container, .3, {borderColor: '#000'}, '-=.3')
            .to([sound_bar_1,sound_bar_2,sound_bar_3], .3, {background: '#000'}, '-=.3')  
            .fromTo(dataviz, 1, {yPercent: -100},{yPercent: -200, ease: Expo.easeInOut},'-=.3')
            .fromTo(conclusion_container,1, {yPercent: 0},{yPercent: -100, ease: Expo.easeInOut},'-=1')

        click_count ++
    }
    else if(click_count == 6)
    {
        CTA_menu.click()
        TweenLite.set($menu,{zIndex:5})
    }
    

})


let open = true
const player_plus = document.querySelector('.player_plus')
plus_icon.addEventListener('click', () =>
{
    if(video_play)
    {
        
        if(!open)
        {
            console.log('slat')
            const tlopenPlayerPlus = new TimelineLite()
            tlopenPlayerPlus
                .to(player_plus, .8, {yPercent: 350, ease: Expo.easeInOut})
            open = true
        }
        else
        {
            console.log('sefeft')
            const tlopenPlayerPlus = new TimelineLite()
            tlopenPlayerPlus
                .to(player_plus, .8, {yPercent: 0, ease: Expo.easeInOut})
            open = false
        }
        
    }
    else
    {
        if(click_second)
        {
            if(open)
            {
                const tlplus = new TimelineLite()
                tlplus
                    
                    .set([sufficient_container, plus_icon],{zIndex: 3})
                    .to(sufficient_image_3, 1.5, {xPercent: -55, ease: Expo.easeInOut})
                    .to(plus_intro_part, 1.5, {xPercent: -100, ease: Expo.easeInOut},'-=1.5')
                    .to(intro_section__global_container, .5,{scale: .6, zIndex: 3},'-=1')
                    
                open = false
            }else 
            {
                const tlplus = new TimelineLite()
                tlplus
    
                    .to(sufficient_image_3, 1.5, {xPercent: 0, ease: Expo.easeInOut})
                    .to(plus_intro_part, 1.5, {xPercent: 0, ease: Expo.easeInOut},'-=1.5')                
                    .set(sufficient_container,{zIndex: 0})
                    .to(intro_section__global_container, .3,{scale: 1, yPercent: 0},'-=1')
                    
                open = true
            }
            
        }
        if(open && !click_second)
        {
            console.log('salut')
            const tlplus = new TimelineLite()
            tlplus
                
                .set([sufficient_container, plus_icon],{zIndex: 3})
                .to(sufficient_image_2, 1.5, {xPercent: -55, ease: Expo.easeInOut})
                .to(plus_intro_part, 1.5, {xPercent: -100, ease: Expo.easeInOut},'-=1.5')
                .to(intro_section__global_container, .5,{scale: .6, zIndex: 3},'-=1')
                
            open = false
        }
        else if(!open && !click_second)
        {
            console.log('mdr')
            const tlplus = new TimelineLite()
            tlplus

                .to(sufficient_image_2, 1.5, {xPercent: 0, ease: Expo.easeInOut})
                .to(plus_intro_part, 1.5, {xPercent: 0, ease: Expo.easeInOut},'-=1.5')                
                .set(sufficient_container,{zIndex: 0})
                .to(intro_section__global_container, .3,{scale: 1, yPercent: 0},'-=1')
                
            open = true
        }
    }
    
    
})


/**
 * Player
 */



video.addEventListener('click', (e) => {

  if (video.classList.contains('playing')) {
    video.classList.remove('playing')
    video.classList.add('pause')
    pauseIcon.style.display = 'inline-block'
    video.pause()
  } else {
    video.classList.remove('pause')
    video.classList.add('playing')
    video.play()
    pauseIcon.style.display = 'none'
  }
}, false)

pauseIcon.addEventListener('click', (e) => {

  if (video.classList.contains('playing')) {
    video.classList.remove('playing')
    video.classList.add('pause')
    pauseIcon.style.display = 'inline-block'
    video.pause()
  } else {
    video.classList.remove('pause')
    video.classList.add('playing')
    video.play()
    pauseIcon.style.display = 'none'
  }
}, false)


const progressBar = document.querySelector('.progress-bar')
const fillBar = document.querySelector('.fill-bar')

const updateProgressBar = () => {
  let int = Math.floor(video.currentTime)
  let min = Math.floor(video.currentTime / 60)
  let sec = int % 60

  const ratio = video.currentTime / video.duration
  fillBar.style.transform = `scaleX(${ratio})`
}

video.addEventListener('timeupdate', updateProgressBar, false);