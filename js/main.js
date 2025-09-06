document.querySelector('.bars').addEventListener('click', function() {
            // Navigationni ochish/yopish
            document.querySelector('.navigation').classList.toggle('active');
            
            // Bars animatsiyasi
            this.classList.toggle('active');
        });
        
        // Navigationdagi linklarni bosganda menyuni yopish (faqat kichik ekranda)
        document.querySelectorAll('.navigation .header__link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 414) {
                    document.querySelector('.navigation').classList.remove('active');
                    document.querySelector('.bars').classList.remove('active');
                }
            });
        });
        
        // Ekran kattalashganda navigationni yopish
        window.addEventListener('resize', function() {
            if (window.innerWidth > 414) {
                document.querySelector('.navigation').classList.remove('active');
                document.querySelector('.bars').classList.remove('active');
            }
        });







        document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');
    
    // Создаем burger menu если его нет
    if (!burgerMenu) {
        const burger = document.createElement('div');
        burger.className = 'burger-menu';
        burger.innerHTML = '<span></span><span></span><span></span>';
        document.querySelector('.header__container').appendChild(burger);
    }
    
    // Функция для переключения меню
    function toggleMenu() {
        navigation.classList.toggle('active');
        
        // Анимация бургер-иконки
        const spans = document.querySelectorAll('.burger-menu span');
        if (navigation.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
    
    // Обработчик клика по бургер-меню
    document.querySelector('.burger-menu').addEventListener('click', toggleMenu);
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.header__nav').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navigation.classList.remove('active');
                document.querySelectorAll('.burger-menu span').forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    });
});