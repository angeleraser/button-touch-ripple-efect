let button: (HTMLElement | null) = document.getElementById('button');

const createRippleCircle = (xPosition: number, yPosition: number, size: number):
  HTMLElement => {
  const spanEl: HTMLElement = document.createElement('span');

  spanEl.classList.add('ripple');

  spanEl.style.top = `${yPosition}px`;

  spanEl.style.left = `${xPosition}px`;

  spanEl.style.width = `${size}px`;

  spanEl.style.height = `${size}px`;

  return spanEl;
};

const insertRipple = (parentElement: any, rippleElement: any):
  void => {
  parentElement.appendChild(rippleElement);

  setTimeout(() => {
    parentElement.removeChild(rippleElement);
  }, 1000);
};

const rippleEffect = (containerEl: any, event: any): void => {
  const xPosition = event.offsetX;
  const yPosition = event.offsetY;

  const { width, height }: {
    width: number, height: number
  } = containerEl.getBoundingClientRect();

  let size: number = Math.max(width, height);

  insertRipple(containerEl, createRippleCircle(xPosition, yPosition, size));
};

button?.addEventListener('click', (event: any): void => {
  const rippleArea = button?.querySelector('.button-ripple-area');

  rippleEffect(rippleArea, event);
});