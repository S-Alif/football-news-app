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

// removing preloader
window.onload = () => {
  let preloader = document.querySelector('.preloader')
  setTimeout(() => {
    preloader.classList.add('remove')
  }, 3500)
}

// see more button for tables
document.querySelectorAll('.see-more').forEach(e => {
  e.addEventListener('click', () => {
    let loader = document.querySelector('.loading-screen')
    let element = e.previousElementSibling
    loader.classList.add('show')
    e.classList.add('d-none')
    setTimeout(() => {
      loader.classList.remove('show')
      element.style.overflow = "scroll"
    }, 3000)
  })
})