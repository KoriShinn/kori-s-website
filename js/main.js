/* navigation bar effects on scroll*/
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})


// 服务 --modal
const serviceModals = document.querySelectorAll('.service-modal')
const learnMoreBtns = document.querySelectorAll('.learn-more-btn')
const modalCloseBtns = document.querySelectorAll('.modal-close-btn')

function serviceModal(modalClickIndex) {
  serviceModals[modalClickIndex].classList.add('active')
}
function serviceModalClose(modalClickIndex) {
  serviceModals[modalClickIndex].classList.remove('active')
}

learnMoreBtns.forEach((learnMoreBtn, index) => {
  learnMoreBtn.addEventListener('click', () => {
    serviceModal(index)
  })
})

modalCloseBtns.forEach((modalCloseBtn, index) => {
  modalCloseBtn.addEventListener('click', () => {
    serviceModalClose(index)
  })
})


// 作品 --modal
const worksModals = document.querySelectorAll('.works-modal')
const imgCards = document.querySelectorAll('.img-card')
const worksCloseBtns = document.querySelectorAll('.works-close-btn')

function worksModal(modalClickIndex) {
  worksModals[modalClickIndex].classList.add('active')
}
function worksModalClose(modalClickIndex) {
  worksModals[modalClickIndex].classList.remove('active')
}

imgCards.forEach((imgCard, index) => {
  imgCard.addEventListener('click', () => {
    worksModal(index)
  })
})

worksCloseBtns.forEach((worksCloseBtn, index) => {
  worksCloseBtn.addEventListener('click', () => {
    worksModalClose(index)
  })
})


// 明暗切换
const themeBtn = document.querySelector('.theme-btn')

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  themeBtn.classList.toggle('sun')

  localStorage.setItem('saved-theme', getCurrentTheme())
  localStorage.setItem('saved-icon', getCurrentIcon())
})

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? "dark" : "light"
const getCurrentIcon = () => themeBtn.classList.contains('sun') ? "sun" : "moon"

const savedTheme = localStorage.getItem('saved-theme')
const savedIcon = localStorage.getItem('saved-icon')

if (savedTheme) {
  document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme')
  themeBtn.classList[savedIcon === 'sun' ? 'add' : 'remove']('sun')
}





// 返回顶部
const scrollToTopBtn = document.querySelector('.scrollToTop')

window.addEventListener('scroll', () => {
  scrollToTopBtn.classList.toggle('active', window.scrollY > 500)
})

scrollToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})




// 导航栏菜单高亮
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section')
  const scrollY = window.pageYOffset;

  sections.forEach(item => {
    let sectionHeight = item.offsetHeight
    let sectionTop = item.offsetTop - 70
    let id = item.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-items a[href*=' + id + ']').classList.add('active')
    } else {
      document.querySelector('.nav-items a[href*=' + id + ']').classList.remove('active')
    }

  })
})



// 关闭菜单

const menuBtn = document.querySelector('.nav-menu-btn')
const menuCloseBtn = document.querySelector('.nav-close-btn')
const navigation = document.querySelector('.navigation')
const naviItems = document.querySelectorAll('.nav-items a')


menuBtn.addEventListener('click', () => {
  navigation.classList.add('active')
})

menuCloseBtn.addEventListener('click', () => {
  navigation.classList.remove('active')
})

naviItems.forEach(item => {
  item.addEventListener('click', () => {
    navigation.classList.remove('active')
  })
})


// 发送消息
let emitBtn = document.querySelector('.emitBtn')
emitBtn.addEventListener('click', () => {
  alert('功能未启用')
})




// 滚动动画

ScrollReveal({
  // reset: true,
  distance: '60px',
  duration: 2000,
});



// 定义动画



ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.home .info h3,.home .info p,.about-info .btn, .contact-right', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.about .description', { delay: 400, origin: 'right' });




ScrollReveal().reveal('.home .media-icons a, .contact-left li, .service-description>h3', { delay: 400, origin: 'left', interval: 150 });
ScrollReveal().reveal('.profession-list .list-item', { delay: 500, origin: 'right', interval: 150 });
ScrollReveal().reveal('.skills-description, service-description, .contact-card, .contact-left h2', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .works .img-card', { delay: 700, origin: 'bottom', interval: 150 });
ScrollReveal().reveal('footer .group', { delay: 300, origin: 'top', interval: 150 });















// 刷新自动滚动到历史位置
function showInfo(type, code) { window.location.href = "__URL__/show" + type + "/id/" + code; } function Trim(strValue) { return strValue.replace(/^s*|s*$/g, ""); } function SetCookie(sName, sValue) { document.cookie = sName + "=" + escape(sValue); } function GetCookie(sName) { var aCookie = document.cookie.split(";"); for (var i = 0; i < aCookie.length; i++) { var aCrumb = aCookie[i].split("="); if (sName == Trim(aCrumb[0])) { return unescape(aCrumb[1]); } } return null; } function scrollback() { if (GetCookie("scroll") != null) { document.body.scrollTop = GetCookie("scroll") } }