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
        title: "Voice Game (Rb)",
        description: "Играйте, общайтесь, развлекайтесь.",
        image: "https://tr.rbxcdn.com/180DAY-b48c003e7a60b6794ea1e122faa86789/768/432/Image/Webp/noFilter",
        link: "https://www.roblox.com/games/10095591734/Voice-Game"
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
                        <i class="bi bi-telegram"></i> Играть
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
