export function scroll(arg = 'down') { // arg up defatl: down
  if (arg === 'down') {
    const height: number = document.body.clientHeight;
    const calHeight: number = (height / 2);
    scrollTo({
      top: calHeight,
      behavior: 'smooth'
    })
  }
  if (arg === 'up') {
    const height: number = document.body.clientHeight;
    const calHeight: number = (height / 2);
    scrollTo({
      top: (-calHeight),
      behavior: 'smooth'
    })
  }

  return
}

 export function fade() {
  const scroll = scrollY
  const elements = document.querySelectorAll('.hide')
  elements.forEach( e => {
    const position = e.getBoundingClientRect()
      if ( scroll >= ( position.height - position.top ) ) {
        e.classList.replace('hide','appear')
      }
  })
}