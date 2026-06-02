const quotes = [
    "Success starts with self-discipline.",
    "Dream big, work harder.",
    "Small steps create big results.",
    "Confidence changes everything.",
    "Your mindset shapes your future.",
    "Focus on progress, not perfection.",
    "Hard work beats excuses.",
    "Stay patient and trust the process.",
    "Every day is a fresh start.",
    "Discipline is stronger than motivation.",
    "Turn pain into power.",
    "Learn, improve, repeat.",
    "Winners never stop learning.",
    "Be stronger than your excuses.",
    "Great things take time.",
    "Your future depends on today.",
    "Consistency creates success.",
    "Fear less, achieve more.",
    "Stay hungry for growth.",
    "Believe it, then achieve it."
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
});