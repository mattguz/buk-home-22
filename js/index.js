const pathname = window.location.pathname;
const bukSite = document.getElementById('bukSite');
const appSite = document.getElementById('appSite');
// const openCountries = Array.from(document.getElementsByClassName('open-countries'));
const itemCountries = document.getElementById('countries');
const btnCountires = document.getElementById('countries-options')

const locationUrl = (path) => {
  const COMPARE_URL = '/app'

  const changeStatus = (compare) => {
    path.includes(compare)
      ? appSite.classList.add('active')
      : appSite.classList.remove('active')

    path.includes(compare)
      ? bukSite.classList.remove('active')
      : bukSite.classList.add('active')
  }
  return changeStatus(COMPARE_URL)
}

// openCountries.forEach((item) => {
//     item.addEventListener('click', () => {
//       itemCountries.classList.toggle('show-countries')
//     })
//   })

btnCountires.addEventListener('click', () => {
  itemCountries.classList.toggle('show-countries')
})

const hideOutsideClickAndScrollDown = () => {
  document.onclick = (e) => {
    try {
      !e.target.className.includes('open-countries')
        ? itemCountries.classList.remove('show-countries')
        : true
    } catch (err) {
      return true
    }

  }

  document.addEventListener('scroll', () => {
    window.scrollY > 15
      ? itemCountries.classList.remove('show-countries')
      : true
  })
}

locationUrl(pathname)
hideOutsideClickAndScrollDown()

// Mobile menu functions
const btnMobile = document.getElementById('btn-mobile')
const header = document.querySelector('header')
const mainContent = document.querySelector('main')
const mobileCtaFirst = document.querySelector('.buk-cta__wrap-button .btn--1')  
const linkDropdown = Array.from(document.getElementsByClassName('buk-menu__link--dropdown'))
const mql = window.matchMedia('(max-width:1100px)')

btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('show-menu')
  btnMobile.classList.contains('show-menu')
    ? mainContent.classList.add('bg-shadow')
    : mainContent.classList.remove('bg-shadow')
})

// Open sub-menu
if(mql.matches) {
  linkDropdown.forEach((item) => {
    item.addEventListener('click', function () {
      this.firstElementChild.classList.toggle('open')
      this.parentElement.classList.toggle('show-submenu')
    })
  })
    
//     mobileCtaFirst.addEventListener('click', () => {
//       btnMobile.classList.remove('show-menu')
//     })
}

  // Convert header to sticky
window.addEventListener('scroll', () => {
  window.scrollY > 25
    ? header.classList.add('sticky')
    : header.classList.remove('sticky')
})

const dateHtml = document.getElementById('copyright-year')
const getYear = new Date().getFullYear()

dateHtml.innerText = getYear