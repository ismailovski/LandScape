const burgerIcon = document.querySelector('.burger__icon');
if (burgerIcon) {
    const headerActive = document.querySelector('.header');
    const headerFavorite = document.querySelector('.header__favorite');
    const headerSign = document.querySelector('.header__sign')
    burgerIcon.addEventListener("click", function (e){
        burgerIcon.classList.toggle('_active');
        headerActive.classList.toggle('_active');
        headerFavorite.classList.toggle('_active');
        headerSign.classList.toggle('_active');
    })
}

const categoryArrow = document.querySelector('.arrow__category');
if (categoryArrow) {
    const sizeArrow = document.querySelector('.arrow__size');
    const listSize = document.querySelector('.size__list');
    const listCategory = document.querySelector('.category__list');
    categoryArrow.addEventListener("click", function (e){
        listCategory.classList.toggle('_active')
        categoryArrow.classList.toggle('_active')
        listSize.classList.remove('_active')
        sizeArrow.classList.remove('_active')
    })
}

const sizeArrow = document.querySelector('.arrow__size');
if (sizeArrow) {
    const listCategory = document.querySelector('.category__list');
    const categoryArrow = document.querySelector('.arrow__category');
    const listSize = document.querySelector('.size__list');
    sizeArrow.addEventListener("click", function (e){
        listSize.classList.toggle('_active')
        sizeArrow.classList.toggle('_active')
        listCategory.classList.remove('_active')
        categoryArrow.classList.remove('_active')
    })
}         

const signHeader = document.querySelector('.header__sign')
if (signHeader) {
    const modalWin = document.querySelector('.modal')
    signHeader.addEventListener("click", function (e) {
        modalWin.classList.add('_active')
    })
}

const modalClose = document.querySelector('.modal__close')
if (modalClose){
    const modalWin = document.querySelector('.modal')
    modalClose.addEventListener("click", function (e) {
        modalWin.classList.remove('_active')
    })
}
