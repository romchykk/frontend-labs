// ================= ЗАВДАННЯ 1 =================

// 1. Отримуємо елемент через getElementById
const elementById = document.getElementById('target-element-1'); 

// 2. Отримуємо наступний елемент через querySelector
const elementByQuery = document.querySelector('.target-element-2'); 

// Функція для перемикання класів кольору
function toggleColors(element, stateClass) {
    element.classList.toggle(stateClass);
}

// Додаємо обробники кліку
elementById.addEventListener('click', function() {
    toggleColors(elementById, 'color-state-1');
});

elementByQuery.addEventListener('click', function() {
    toggleColors(elementByQuery, 'color-state-2');
});


// ================= ЗАВДАННЯ 2 =================

const imageContainer = document.getElementById('image-container');
const btnAdd = document.getElementById('add-btn');
const btnIncrease = document.getElementById('increase-btn');
const btnDecrease = document.getElementById('decrease-btn');
const btnRemove = document.getElementById('remove-btn');

// Посилання на фото
const defaultImageSrc = "https://localhistory.org.ua/media/images/drogobych_tekst-2-1024x767.max-1920x900.format-webp.webp";

// Додати зображення
btnAdd.addEventListener('click', function() {
    let currentImg = document.getElementById('city-image');
    // Якщо зображення немає, створюємо його знову
    if (!currentImg) {
        // Також відновлюємо посилання <a>
        const newLink = document.createElement('a');
        newLink.id = 'image-link';
        newLink.href = defaultImageSrc;
        newLink.target = '_blank';

        const newImg = document.createElement('img');
        newImg.id = 'city-image';
        newImg.src = defaultImageSrc;
        newImg.alt = 'Місто Дрогобич';
        newImg.width = 400;

        newLink.appendChild(newImg);
        imageContainer.appendChild(newLink);
    }
});

// Збільшити зображення
btnIncrease.addEventListener('click', function() {
    let currentImg = document.getElementById('city-image');
    if (currentImg) {
        currentImg.width += 50; 
    }
});

// Зменшити зображення
btnDecrease.addEventListener('click', function() {
    let currentImg = document.getElementById('city-image');
    if (currentImg && currentImg.width > 50) {
        currentImg.width -= 50; 
    }
});

// Видалити зображення
btnRemove.addEventListener('click', function() {
    // Видаляємо разом з тегом <a>, якщо він є
    let linkElement = document.getElementById('image-link');
    let imgElement = document.getElementById('city-image');
    
    if (linkElement) {
        linkElement.remove();
    } else if (imgElement) {
        imgElement.remove();
    }
});
