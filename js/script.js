const container = document.querySelector(".container");
const image = container.querySelector(".car-image");

// Objeto que controla o estado do cursor (arrastando ou não)
const cursor = {
    isDragging: false,     // Indica se o mouse está clicado/arrastando
    initialPosition: 0,    // Armazena a posição X inicial do mouse
};

// Começamos exibindo a imagem número 1
let currentImage = 1;

// Função que troca a imagem dependendo da direção do movimento
updateImage = (direction) => {

    // Se o movimento foi para a ESQUERDA (direction < 0)
    if (direction < 0) {
        if (currentImage == 12) {
            currentImage = 1;
        } else {
            currentImage += 1;
        }
    }

    // Se o movimento foi para a DIREITA (direction > 0)
    if (direction > 0) {
        if (currentImage == 1) {
            currentImage = 12;
        } else {
            currentImage -= 1;
        }
    }

    // Atualiza o caminho da imagem exibida
    image.src = `imagens/${currentImage}.jpg`;
};



// Dedo tocou na tela
container.addEventListener("touchstart", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.touches[0].clientX;
});

// Dedo levantou da tela
container.addEventListener("touchend", () => {
    cursor.isDragging = false;
});

// Dedo arrastando
container.addEventListener("touchmove", (event) => {
    if (!cursor.isDragging) return;

    const clientX = event.touches[0].clientX;
    const offset = cursor.initialPosition - clientX;

    if (Math.abs(offset) >= 40) {
        updateImage(offset);
        cursor.initialPosition = clientX;
    }
});



// Quando o usuário pressiona o botão do mouse dentro do container
container.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX;
});

// Quando solta o mouse, para de arrastar
container.addEventListener("mouseup", () => {
    cursor.isDragging = false;
});

// Detecta o movimento do cursor enquanto arrasta
container.addEventListener("mousemove", ({ clientX }) => {
    if (!cursor.isDragging) return;

    const offset = cursor.initialPosition - clientX;

    if (Math.abs(offset) >= 40) {
        updateImage(offset);
        cursor.initialPosition = clientX;
    }
});
