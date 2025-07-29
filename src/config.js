export const settings = {
    host: window.location.origin.includes('localhost')
        ? 'http://localhost:3030' // Бекенд порт при локално развитие
        : 'https://libraly-softuni-exercise.onrender.com' // Автоматично използва текущия origin в production
};