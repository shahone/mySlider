export const videoPlayer = () => {
  const video = document.querySelector('.video__player')
  const playBtn = document.querySelector('.video__button')

  video.volume = 0.5

  playBtn.addEventListener('click', () => {
    video.play()
    video.setAttribute('controls', '')
  })

  video.addEventListener('timeupdate', () => {
    if (video.currentTime > 0) {
      playBtn.classList.add('hide')
    }
    if (video.currentTime === video.duration) {
      stop()
    }

    if (video.currentTime === video.duration) {
      stop()
      playBtn.classList.remove('hide')
    }
  })

  const stop = () => {
    video.pause();
    video.currentTime = 0;
    playBtn.classList.remove('hide')
    video.removeAttribute('controls')
    video.poster = 'none';
  }

}