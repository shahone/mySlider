import IMask from 'imask'
import isMobile from 'is-mobile'

export const modal = () => {

  const modalWindow = document.querySelector('.modal')
  const formInputs = document.querySelectorAll('.form__input')
  const closeModal = document.querySelector('.modal__form-close')
  const buttons = document.querySelectorAll('.button')
  const body = document.body
  const scrollW = window.innerWidth - document.documentElement.offsetWidth;

  const modalOn = () => {
    modalWindow.classList.add('active')
    body.classList.add('lock')
    body.style.paddingRight = scrollW + 'px'
  }
  const modalOff = () => {
    modalWindow.classList.remove('active')
    body.classList.remove('lock')
    body.style.paddingRight = ''
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => modalOn())
  })

  document.addEventListener('click', e => {
    if (e.target === closeModal || e.target === modalWindow) {
      modalOff()
    }
    if ((window.matchMedia('(max-width: 575px)').matches || isMobile()) && e.target.classList.contains('form')) {
      modalOff()
    }
  })

  document.addEventListener('keydown', e => {
    if (modalWindow.classList.contains('active') && e.code === 'Escape') {
      modalOff()
    }
  })

  let maskOptions = {
    mask: '+{7}(000)000-00-00'
  }
  formInputs.forEach(input => {
    IMask(input, maskOptions)
  })

  const invalid = (el) => {
    el.parentElement.classList.add('opacityLow')
    el.parentElement.classList.remove('opacityHigh', 'done')
    el.style.opacity = ''
  }
  const valid = (el) => {
    el.parentElement.classList.remove('opacityLow')
    el.parentElement.classList.add('opacityHigh', 'done')
    el.style.opacity = 1
  }

  formInputs.forEach(input => {
    const inputBox = input.parentElement
    if (window.matchMedia('(hover: hover').matches) {
      input.addEventListener('focus', () => {
        if (input.value.length === 0) {
          inputBox.classList.add('opacityLow')
        }
      })
      input.addEventListener('input', () => {
        if (input.value.length === 16) {
          valid(input)
        } else {
          invalid(input)
        }
      })
      input.addEventListener('blur', () => {
        if (input.value.length === 0) {
          inputBox.classList.remove('opacityLow')
        }
        if (input.value.length > 0 && input.value.length < 16) {
          input.style.opacity = .5
        }
      })

    } else {
      input.addEventListener('focus', () => {
        inputBox.classList.add('opacityHigh')
      })
      input.addEventListener('input', () => {
        if (input.value.length === 16) {
          inputBox.classList.add('done')
        } else {
          inputBox.classList.remove('done')
        }
      })
      input.addEventListener('blur', () => {
        if (input.value.length === 0) {
          inputBox.classList.remove('opacityHigh')
        }
        if (input.value.length > 0 && input.value.length < 16) {
          input.style.opacity = 1
        } else {
          input.style.opacity = .75
        }

      })
    }

  })

  formInputs.forEach(input => {
    if (input.hasAttribute('disabled')) {
      input.parentElement.classList.add('disabled')
    }
  })
}