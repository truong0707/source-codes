const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const namUser = $(".navbar__item-user-name")

const listCart = $$('.header__cart-item')
const listCartArr = [...listCart]
const headerCartList = $('.header__cart-list')
const handleCartNo = () => {
    if (listCartArr.length > 0) {
        headerCartList.classList.remove('header__cart-list--no-cart')
    } else {
        headerCartList.classList.add('header__cart-list--no-cart')
        console.log(headerCartList)
    }
}
handleCartNo()
