const totalpetals = 30;
const container = document.getElementById('container');


for (let i = 0; i < totalpetals; i++) {
    const petal = document.createElement('div');
    petal.classList.add('sakura');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 5 + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(petal);
}