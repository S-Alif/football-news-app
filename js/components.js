// get elements
const mailSub = document.getElementById('mail-sub')
const modeBtn = document.getElementById("mode-btn")
const paginationBtn = document.querySelectorAll(".pagination .page-item .page-link")

// navbar design change
window.onscroll = () => {
  let navbar = document.querySelector('.navbar')
  navbar.classList.add('scroll-up')
  if(window.scrollY == 0){
    navbar.classList.remove('scroll-up')
  }
}

// removing preloader
window.onload = () => {
  let mode = localStorage.getItem('mode')
  let html = document.querySelector("html")
  if(mode == "dark"){
    html.setAttribute("data-bs-theme", "dark")
  }else{
    html.setAttribute("data-bs-theme", "light")
  }


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

// form validation
mailSub.addEventListener('click', (e) => {

  e.preventDefault()

  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const msg = document.getElementById("message")

  if(name.value.length < 3 || name.value == ""){
    show_alert("name cannot be less than 3 character or empty", "alert-danger")
  }
  else if (validateEmail(email.value) == false){
    show_alert("invalid email", "alert-danger")
  }
  else if(msg.value.length < 50 || msg.value == ""){
    show_alert("message cannot be less than 50 character or empty", "alert-danger")
  }
  else{
    name.value = ""
    email.value = ""
    msg.value = ""

    show_alert("message sent successfully", "alert-success")
  }

})

// email validate
let validateEmail = (mail) => {

  if(mail == ""){
    return false
  }
  else if (mail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    return true
  }
  else{
    return false
  }
}

// show alerts function
let show_alert = (alertText, alertBg) => {
  let alert = document.querySelector('.alert')

  alert.textContent = alertText
  alert.classList.add(alertBg)
  alert.classList.remove("remove")

  setTimeout(() => {
    alert.classList.add("remove")
    alert.classList.remove(alertBg)
  }, 5000)
}

// change color modes
modeBtn.addEventListener('click', (e) => {
  let html = document.querySelector("html")
  let attr = html.getAttribute("data-bs-theme")

  if(attr == "light"){
    html.setAttribute("data-bs-theme", "dark")
    modeBtn.firstElementChild.classList.add('d-none')
    modeBtn.lastElementChild.classList.remove('d-none')
    localStorage.setItem('mode', 'dark')
  }
  else{
    html.setAttribute("data-bs-theme", "light")
    modeBtn.firstElementChild.classList.remove('d-none')
    modeBtn.lastElementChild.classList.add('d-none')
    localStorage.setItem('mode', 'light')
  }
})

// pagination
paginationBtn.forEach(e =>{
  e.addEventListener('click', () => {
    
    let tables = document.querySelectorAll('.group-table .table-responsive')
    let attr = e.getAttribute('href')
    let linkId = attr.substr(1)
    console.log(linkId)

    tables.forEach(id => {
      let tableId = id.getAttribute('id')
      console.log(tableId)
      if(tableId == linkId){
        id.classList.remove('d-none')
      }
      else{
        id.classList.add("d-none")
      }
    })

  })
})