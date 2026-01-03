function initSpeedControl() {
  const video = document.querySelector('video')
  const controls = document.querySelector('.ytp-right-controls-left')
  if (!video || !controls) {
    return;
  }
  const speedDisplay = document.createElement('span')
  speedDisplay.className = 'ytp-time-current'

  speedDisplay.textContent = video.playbackRate.toFixed(2) + ' x'
  controls.prepend(speedDisplay)
  speedDisplay.style.color = '#fff';
  speedDisplay.style.fontSize = '13px';
  speedDisplay.style.fontFamily = 'Roboto, Arial, sans-serif';
  speedDisplay.style.fontWeight = '500';
  speedDisplay.style.padding = '0 8px';
  speedDisplay.style.cursor = 'pointer';
  speedDisplay.style.userSelect = 'none';
  speedDisplay.style.display = 'inline-flex';
  speedDisplay.style.alignItems = 'center';
  speedDisplay.style.height = '100%';
  speedDisplay.style.lineHeight = '1';

  speedDisplay.addEventListener('mouseenter', () => {
    speedDisplay.style.opacity = '0.7';
  })

  speedDisplay.addEventListener('mouseleave', () => {
    speedDisplay.style.opacity = '1';
  })

  speedDisplay.addEventListener('wheel', (event) => {
    event.preventDefault()
    speedDirection = event.deltaY
    if (speedDirection < 0 && video.playbackRate > 0) {
      video.playbackRate += 0.05
    } else {
      video.playbackRate -= 0.05
    }
    speedDisplay.textContent = video.playbackRate.toFixed(2) + ' x'
  })

  speedDisplay.addEventListener('click', () => {
    video.playbackRate = 1
    speedDisplay.textContent = video.playbackRate.toFixed(2) + ' x'
  })
}

initSpeedControl()
