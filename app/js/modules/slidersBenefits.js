import Swiper, {Pagination, Navigation, EffectFade, EffectCreative} from 'swiper'
import isMobile from 'is-mobile'

export const slidersBenefits = () => {

  const slidesBottom = document.querySelectorAll('.benefits__items-col')

  let swiperTop
  let swiperBottom

  const slidersInit = () => {
    if (window.matchMedia('(max-width: 575px').matches || isMobile()) {
      if (swiperTop) {
        swiperTop.destroy()
      }
      swiperTop = new Swiper('.benefits__slider', {
        modules: [Pagination, EffectFade],
        speed: 300,
        rewind: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.benefits__slider-pagination',
          clickable: true,
        },
        on: {
          click: () => {
            swiperTop.slideNext()
          }
        },
      })
      slidesBottom.forEach(slide => slide.classList.add('swiper-slide'))
      swiperBottom = new Swiper('.benefits__items', {
        modules: [Navigation, EffectFade],
        speed: 300,
        rewind: true,
        followFinger: false,
        centeredSlides: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    } else {
      if (swiperTop) {
        swiperTop.destroy()
      }
      if (swiperBottom) {
        swiperBottom.destroy()
        slidesBottom.forEach(slide => slide.classList.remove('swiper-slide'))
      }
      swiperTop = new Swiper('.benefits__slider', {
        modules: [Pagination, EffectCreative],
        speed: 1000,
        loop: true,
        // loopedSlides: 2,
        allowTouchMove: false,
        // waitForTransition: false,
        // loadOnTransitionStart: true,
        // centeredSlides: true,
        effect: 'creative',
        creativeEffect: {
          prev: {
            translate: [0, 30, -60],
            opacity: 0.8
          },
          next: {
            translate: [0, -30, -60],
            opacity: 0.78,
          },
          limitProgress: 2,
          progressMultiplier: 2,
        },
        on: {
          click: () => {
            swiperTop.slideNext()
          }
        },
        pagination: {
          el: '.benefits__slider-pagination',
          clickable: true,
        },
      })


    }
  }

  slidersInit()

  window.addEventListener('resize', () => {
    slidersInit()
  })
  screen.addEventListener('orientationchange', () => {
    slidersInit()
  })


}