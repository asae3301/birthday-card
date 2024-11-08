function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('confetti').appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Generate confetti continuously
setInterval(createConfetti, 500);

// Add confetti styling
const style = document.createElement('style');
style.innerHTML = `
.confetti {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #ff69b4;
    opacity: 0.8;
    animation: fall linear infinite;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
    }
}
`;
document.head.appendChild(style);
