// Elementos do DOM mapeados com tipagem explícita
const htmlElement: HTMLHtmlElement | null = document.querySelector('html');
const themeButton: HTMLButtonElement | null = document.getElementById('themeToggle') as HTMLButtonElement;
const themeIcon: HTMLElement | null = document.getElementById('themeIcon');
const themeText: HTMLElement | null = document.getElementById('themeText');
const dateParagraph: HTMLParagraphElement | null = document.getElementById('dataAtual') as HTMLParagraphElement;

/**
 * Altera o tema do Bootstrap 5 manipulando o atributo 'data-bs-theme'
 */
function toggleTheme(): void {
    if (!htmlElement || !themeIcon || !themeText) return;

    const currentTheme: string | null = htmlElement.getAttribute('data-bs-theme');

    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeIcon.className = 'bi bi-sun-fill';
        themeText.innerText = 'Modo Claro';
        
        if (themeButton) {
            themeButton.className = 'btn btn-outline-light btn-sm d-flex align-items-center gap-2';
        }
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeIcon.className = 'bi bi-moon-stars-fill';
        themeText.innerText = 'Modo Escuro';
        
        if (themeButton) {
            themeButton.className = 'btn btn-outline-warning btn-sm d-flex align-items-center gap-2';
        }
    }
}

/**
 * Formata e renderiza a data atual no rodapé da página
 */
function renderCurrentDate(): void {
    if (!dateParagraph) return;
    
    const hoje: Date = new Date();
    const opcoes: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const dataFormatada: string = hoje.toLocaleDateString('pt-BR', opcoes);
    const textoFinal: string = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
    
    dateParagraph.innerText = `Acessado em: ${textoFinal}`;
}

// Ouvintes de eventos
if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', renderCurrentDate);