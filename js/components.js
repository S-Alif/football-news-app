// navbar design change
document.addEventListener('DOMContentLoaded', () => {
  let navbar = document.querySelector(".navbar")

  let LastscrollPos = 0
  window.addEventListener('scroll', () => {
    let currentScrollPos = window.scrollY

    if(LastscrollPos < currentScrollPos){
      navbar.classList.remove('scroll-up')
      navbar.classList.add('scroll-down')
    }
    else{
      navbar.classList.add('scroll-up')
      navbar.classList.remove('scroll-down')
    }

    LastscrollPos = currentScrollPos

    if(LastscrollPos == 0){
      navbar.classList.remove('scroll-up')
      navbar.classList.remove('scroll-down')
    }
  })
})

