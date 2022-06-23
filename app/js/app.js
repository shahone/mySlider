'use strict'

import {form} from './modules/form.js'
import {modal} from './modules/modal.js'
import {sliderLevels} from './modules/sliderLevels.js'
import {videoPlayer} from './modules/video.js'
import {slidersBenefits} from './modules/slidersBenefits.js'
// import {sliderCases} from './modules/sliderCases.js'
import {simpleCases} from './modules/simpleCases.js'

window.onload = () => {
  if(document.querySelector('.preloader').style.display != 'none')
  {
		document.querySelector('.preloader').style.display = 'none'
    form()
    modal()
    sliderLevels()
    slidersBenefits()
    // sliderCases()
    simpleCases()
    videoPlayer()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('.preloader').style.display != 'none')
  {
    document.querySelector('.preloader').style.display = 'none'
    form()
    modal()
    sliderLevels()
    slidersBenefits()
    // sliderCases()
    simpleCases()
    videoPlayer()
  }
  document.removeEventListener("DOMContentLoaded");
})

window.addEventListener("load", function() {
  if(document.querySelector('.preloader').style.display != 'none')
  {
    document.querySelector('.preloader').style.display = 'none'
    form()
    modal()
    sliderLevels()
    slidersBenefits()
    // sliderCases()
    simpleCases()
    videoPlayer()
  }
  document.removeEventListener("load");
})


// document.addEventListener('DOMContentLoaded', () => {
// 	document.querySelector('.preloader').style.display = 'none'
// 			form()
// 			modal()
// 			sliderLevels()
// 			slidersBenefits()
// 			sliderCases()
// 			videoPlayer()
// })
