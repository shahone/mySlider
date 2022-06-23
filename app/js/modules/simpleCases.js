export const simpleCases = () => {

  const slider = document.querySelector('.cases__slider')
  const slides = document.querySelectorAll('.cases__slide')
  const pagination = document.querySelector('.cases__slider-pagination')

  let activeSlide = 0

  const createDots = (active) => {

    slides.forEach((slide, i) => {
      const dot = document.createElement('span')
      dot.classList.add('pagination__dot')
      pagination.append(dot)
    })
  }
  createDots()

  const initActiveDot = (active) => {
    const dots = document.querySelectorAll('.pagination__dot')

    dots.forEach((dot, i) => {
      dot.classList.remove('pagination__dot-active')
      if (i === active) {
        dot.classList.add('pagination__dot-active')
      }
    })
  }

  const initActiveSlide = (active) => {
    slides.forEach((slide, i) => {
      slide.classList.remove('active-slide', 'prev-slide')

      if (i === active) {
        slide.classList.add('active-slide')
        if (active > 0) {
          slides[i - 1].classList.add('active-slide', 'prev-slide')
        } else {
          if (slides[slides.length - 1].classList.contains('active-slide')) {
            slides[slides.length - 1].classList.add('active-slide', 'prev-slide')
          }
        }
        initActiveDot(active)
        activeSlide++
      }
      if (active === slides.length - 1) {
        activeSlide = 0
      }

    })
  }
  initActiveSlide(activeSlide)


  // const changeSlide = () => {
  //   initActiveDots(activeSlide)
  // }

  slider.addEventListener('click', () => initActiveSlide(activeSlide))

}