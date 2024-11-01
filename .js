const divers = document.querySelectorAll('.diver');
const shark = document.querySelector('.shark');
const turtle = document.querySelector('.turtle');

function changeDirection(element) {
    let direction = element.style.transform === 'scaleX(-1)' ? 'scaleX(1)' : 'scaleX(-1)';
    element.style.transform = direction;
}

setInterval(() => {
    divers.forEach(diver => {
        if (parseInt(diver.style.left) >= window.innerWidth - diver.offsetWidth || parseInt(diver.style.left) <= 0) {
            changeDirection(diver);
        }
    });
    [shark, turtle].forEach(animal => {
        if (parseInt(animal.style.left) >= window.innerWidth - animal.offsetWidth || parseInt(animal.style.left) <= 0) {
            changeDirection(animal);
        }
    });
}, 100);
