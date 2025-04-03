document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const enterBtn = document.getElementById('enterBtn');
    const mainContent = document.getElementById('mainContent');

    // Обработчик клика по кнопке
    enterBtn.addEventListener('click', function() {
        // Анимация исчезновения прелоадера
        preloader.style.opacity = '0';
        
        // После завершения анимации скрываем прелоадер и показываем основной контент
        setTimeout(function() {
            preloader.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Плавное появление контента
            setTimeout(function() {
                mainContent.style.opacity = '1';
            }, 50);
        }, 500);
    });

    // Плавное появление кнопки через небольшую задержку
    setTimeout(function() {
        enterBtn.style.opacity = '1';
        enterBtn.style.transform = 'translateY(0)';
    }, 300);
});