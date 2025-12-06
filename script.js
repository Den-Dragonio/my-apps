// --- ЛОГИКА КАРУСЕЛИ ---
function moveSlide(direction) {
    const container = document.getElementById('carousel');
    const scrollAmount = 280; // Ширина слайда + отступ
    
    if (direction === 1) {
        container.scrollLeft += scrollAmount;
    } else {
        container.scrollLeft -= scrollAmount;
    }
}

// --- ЛОГИКА МОДАЛЬНОГО ОКНА (ЗУМ) ---

// Получаем элементы окна
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

// Функция открытия (УМНАЯ ВЕРСИЯ)
function openModal(element) {
    let img;

    // Проверяем: кликнули по картинке или по блоку с картинкой?
    if (element.tagName === 'IMG') {
        img = element; // Если это сама картинка (как в Интерфейсе)
    } else {
        img = element.querySelector('img'); // Если это блок (как в Карусели)
    }

    // Если картинка найдена — открываем
    if (img) {
        modal.style.display = "flex";
        modalImg.src = img.src;
    }
}

// Функция закрытия
function closeModal() {
    modal.style.display = "none";
}

// Закрытие по клавише Esc
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});