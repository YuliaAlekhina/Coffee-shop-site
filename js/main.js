/*----Бургер---*/

$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger,.menu-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});



/*--Выпадающий список--*/
let user_icon = document.querySelector('.menu__link');
user_icon.addEventListener("click", function(e) {
    let user_menu = document.querySelector('.menu__item-item');
    user_menu.classList.toggle('_active');
})





/*------Вкладки---------------*/
$(function() {    
    $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
        e.preventDefault();
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    })
})



/*------Вкладки №2---------------*/
$(function() {    
    $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
        e.preventDefault();
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    })
})


/*----Аккордион------*/
$(document).ready(function () {
    $('.faq__body_question').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});





/*----Корзина----*/

$(function () {
	$('.smart-basket__wrapper').smbasket({
		productElement: 'items-sale__item',
		buttonAddToBasket: 'card__button',
		productPrice: 'card__price-number',
		productSize: 'product__size-element',
				
		productQuantityWrapper: 'product__quantity',
		smartBasketMinArea: 'cart-min',
		countryCode: '+7',
		smartBasketCurrency: '₽',
		smartBasketMinIconPath: '../img/header/basket.svg',

		agreement: {
			isRequired: true,
			isChecked: true,
			isLink: 'https://artstranger.ru/privacy.html',
		},
		nameIsRequired: false,
	});
});