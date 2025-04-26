// Определение ОС
function detectOS() {
    const userAgent = navigator.userAgent;
    if (/windows/i.test(userAgent)) return 'windows';
    if (/macintosh|mac os x/i.test(userAgent)) return 'mac';
    if (/android/i.test(userAgent)) return 'android';
    if (/iphone|ipad|ipod/i.test(userAgent)) return 'ios';
    return 'unknown';
}

document.body.classList.add(detectOS());

// Загрузка проектов из ТГК (имитация)
const projects = [
    {
        title: "Споритики: Игра",
        description: "Бегите от существ без лиц в этой психоделической игре",
        image: "https://via.placeholder.com/400x200?text=Споритики",
        link: "https://t.me/your_channel/123"
    },
    {
        title: "Форточка в Кошмар",
        description: "Интерактивная история про папашу в трусах",
        image: "https://via.placeholder.com/400x200?text=Форточка",
        link: "https://t.me/your_channel/456"
    }
];

function loadProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.link}" class="btn btn-outline-primary">
                        <i class="bi bi-telegram"></i> Читать в ТГК
                    </a>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Переключение темы
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Инициализация
window.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});