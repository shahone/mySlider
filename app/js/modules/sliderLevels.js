import Swiper, {Navigation, Pagination} from 'swiper'

export const sliderLevels = () => {

  const wheels = document.querySelectorAll('.car__wheel')
  const slider = document.querySelector('.levels__slider')

  const swiper = new Swiper(slider, {
    modules: [Navigation, Pagination],
    initialSlide: 0,
    speed: 1000,
    // loop: true,
    // loopedSlides: 2,
    rewind: true, // возврат к 1, если не loop
    grabCursor: true,
    // followFinger: false,
    // longSwipes: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.levels__slider-pagination',
      clickable: true,
    },
    on: {
      slideChange: function (e) {
        wheels.forEach(wheel => {
          wheel.style.transform = `rotate(-${swiper.realIndex * 65}deg)`
        })
      }
    }
  });

  slider.lastElementChild.addEventListener('click', e => {
    if (!e.target.closest('button')) {
      swiper.slideNext()
    }
  })
}