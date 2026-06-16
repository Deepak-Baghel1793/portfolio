// --- 1. Dark/Light Theme Switching Engine ---
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply stored theme setting on startup
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.textContent = "☀️ Mode";
    }
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = "🌙 Mode";
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = "☀️ Mode";
    }
});

// --- 2. Form Submission Interceptor ---
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop standard page refreshing behavior
    
    const clientName = document.getElementById('name').value;
    
    // Simulate API form message reception notification
    alert(`Thank you for reaching out, ${clientName}! Your message has been sent successfully.`);
    
    contactForm.reset(); // Clear all form inputs cleanly
});