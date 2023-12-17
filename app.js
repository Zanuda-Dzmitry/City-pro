// Modal

const modalActive = 'modal--active'

const modalBtnClose = document.getElementById('modalBtnClose'),
	modal = document.getElementById('modal'),
	heroBtn = document.querySelector('.hero__btn'),
	servicesLink = document.querySelectorAll('.services__slide-link')

	heroBtn.addEventListener('click', () => {
		modal.classList.add(modalActive)
	})

servicesLink.forEach(btn => {
	btn.addEventListener('click', () => {
		modal.classList.add(modalActive)
	})
})

modalBtnClose.addEventListener('click', () => {
	modal.classList.remove(modalActive)
})

// Burger-menu

const burger = document.getElementById('burger'),
	headerNav = document.querySelector('.header__nav')

burger.addEventListener('click', function () {
	this.classList.toggle('burger--active')
	headerNav.classList.toggle('header__nav--active')
})

// About mobile
const classAboutText = 'about__item-text-1'
const aboutText = document.querySelector('.about__item-text-1'),
	aboutBtn = document.getElementById('aboutBtn'),
	about = document.getElementById('about')

aboutBtn.addEventListener('click', function () {
	about.classList.add('about--active')
	aboutText.classList.remove('about__item-text-1')
})

// Portfolio mobile

const portfolioBtn = document.querySelectorAll('.portfolio__btn'),
	portfolio = document.querySelector('.portfolio'),
	portfolioText = document.querySelectorAll('.portfolio__left-text-1')

portfolioBtn.forEach(btn => {
	btn.addEventListener('click', function () {
		portfolio.classList.add('portfolio--active')
		portfolioText.forEach(el => {
			el.classList.remove('portfolio__left-text-1')
		})
	})
})

// Scroll btn
const btnScroll = document.getElementById('btn-scroll');

addEventListener('scroll', function () {
  if (window.pageYOffset > 500) {
    btnScroll.classList.remove('invisible');
  } else { btnScroll.classList.add('invisible') };
}, { passive: true });

btnScroll.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validation

const applicationForm = document.getElementById('application-form'),
		modalForm = document.getElementById('modal-form'),
		applicationInputs = document.querySelectorAll('.application__input'),
		modalInputs = document.querySelectorAll('.modal__right-input'),
		modalRight = document.querySelector('.modal__right'),
		applicationGrid = document.querySelector('.application__grid')
	

function formValidation(inputs, blok, classMB) {
const classError = 'in-valid'
  function removeError(input) {
    const parent = input.parentNode;

    if (input.classList.contains(classError)) {
      parent.querySelector('label').remove()
      input.classList.remove(classError)
			blok.classList.remove(classMB)
    }
  }

// Добавление классов если форма не прошла проверку.
  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');

    errorLabel.textContent = text;
    input.classList.add(classError);
		blok.classList.add(classMB)
    errorLabel.classList.add('error-label');
    parent.append(errorLabel)
  }

  let result = true;
// Проверка формы, и добавление класса если форма прошла проверку.
  inputs.forEach(input => {
    removeError(input)
    if (input.dataset.tel == 'true') {
		
      if (!input.value) {
        createError(input, 'Поле обязательно для заполнения!')
        result = false
      } else if (isNaN(input.value)) {
 				createError(input, 'Ввод не является числом!')
				 result = false
			} else if (input.value.length < 6) {
 				createError(input, 'Номер слишком короткий!')
				 result = false
			} else { input.classList.add('is-valid') }
    }

    if (input.dataset.name) { 
			if (input.value) {
 				if (!isNaN(input.value)) {
        createError(input, 'Ввод не является строкой!')
        result = false
      } else if (input.value.length > 15) {
 				createError(input, 'Максимальное количество символов 15!')
        result = false
			} else if (input.value.length < 3) {
 				createError(input, 'Минимальное количество символов 3!')
        result = false
			} else { input.classList.add('is-valid') }
			}
    }
  })

  if (result == true) inputs.forEach(input => input.classList.remove('is-valid'));
  return result

}

applicationForm.addEventListener('submit', function (el) {
  el.preventDefault()
  if (formValidation(applicationInputs, applicationGrid, 'application__grid--error') == true) {
    // Очистка формы.
    el.target.reset()
  }
})
modalForm.addEventListener('submit', function (el) {
  el.preventDefault()
 	if (formValidation(modalInputs, modalRight, 'input-mb') == true) {
    // Очистка формы.
    el.target.reset()
  }
 
})