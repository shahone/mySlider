import Swiper, {Navigation, Pagination, EffectCreative} from 'swiper'
import isMobile from 'is-mobile'



export const sliderCases = () => {

  let swiper

  const initSlider = () => {

    if (window.matchMedia('(max-width: 575px').matches || isMobile()) {

      const slider = document.querySelector('.cases__slider')

      swiper = new Swiper(slider, {
        modules: [Navigation, Pagination, EffectCreative],
        speed: 300,
        loop: true,
        // rewind: true, // возврат к 1, если не loop
        // followFinger: false,
        // allowSlidePrev: false,
        pagination: {
          el: '.cases__slider-pagination',
          clickable: true,
        },
        effect: 'creative',
        creativeEffect: {
          prev: {
            translate: [0, 0, -10],
          },
          next: {
            translate: ['150%', 0, 0],
          },
        },
        on: {
          click: () => {
            swiper.slideNext()
          }
        }
      })
    } else {
      if (swiper) {
        swiper.destroy()
      }
    }

  }
  initSlider()

  window.addEventListener('resize', () => {
    initSlider()
  })
  screen.addEventListener('orientationchange', () => {
    initSlider()
  })


}