let button = document.getElementById('button');
const createRippleCircle = (xPosition, yPosition, size) => {
    const spanEl = document.createElement('span');
    spanEl.classList.add('ripple');
    spanEl.style.top = `${yPosition}px`;
    spanEl.style.left = `${xPosition}px`;
    spanEl.style.width = `${size}px`;
    spanEl.style.height = `${size}px`;
    return spanEl;
};
const insertRipple = (parentElement, rippleElement) => {
    parentElement.appendChild(rippleElement);
    setTimeout(() => {
        parentElement.removeChild(rippleElement);
    }, 1000);
};
const rippleEffect = (containerEl, event) => {
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    const { width, height } = containerEl.getBoundingClientRect();
    let size = Math.max(width, height);
    insertRipple(containerEl, createRippleCircle(xPosition, yPosition, size));
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', (event) => {
    const rippleArea = button === null || button === void 0 ? void 0 : button.querySelector('.button-ripple-area');
    rippleEffect(rippleArea, event);
});
