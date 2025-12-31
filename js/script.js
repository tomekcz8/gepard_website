const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active')
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
	handleNavItem()
}

const handleNavItem = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleCheckPosition = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('section-green') && section.offsetTop <= currentSection) {
			navBtnBars.classList.add('second-bars-color')
		} else if ((!section.classList.contains('section-green')) && !section.offsetTop <= currentSection) {
			navBtnBars.classList.remove('second-bars-color')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
window.addEventListener('scroll', handleCheckPosition)
handleCurrentYear()
navBtn.addEventListener('click', handleNav)
