document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');
    const headerNav = document.querySelectorAll('.header__nav');
    
    // Открытие/закрытие меню
    burgerMenu.addEventListener('click', function() {
        navigation.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
    
    // Закрытие меню при клике на ссылку
    headerNav.forEach(item => {
        item.addEventListener('click', function() {
            navigation.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });
    
    // Фиксация хедера при скролле
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'none';
            header.style.boxShadow = 'none';
        }
    });
});







      