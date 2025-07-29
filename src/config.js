export const settings = {
    host: window.location.origin.includes('localhost')
        ? 'http://localhost:3000' // Бекенд порт при локално развитие
        : window.location.origin // Автоматично използва текущия origin в production
};