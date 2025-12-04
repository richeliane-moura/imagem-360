📘 Imagem 360° – Visualização Interativa

Este projeto permite visualizar um objeto (como um carro) em 360°, trocando automaticamente entre várias imagens conforme o usuário arrasta o mouse para os lados.

🚀 Funcionalidades

Rotação 360° usando movimento do mouse

Troca suave das imagens conforme o arrasto

Loop contínuo (vai da última para a primeira imagem)

Código simples, limpo e fácil de personalizar


🛠️ Como funciona

O script detecta:

Quando o usuário pressiona o mouse (mousedown)

Quando arrasta horizontalmente (mousemove)

Quando solta o mouse (mouseup)

A cada deslocamento de 40px, a imagem exibida é alterada:

Arrastou para a esquerda → próxima imagem

Arrastou para a direita → imagem anterior

E o loop é infinito:
da imagem 12 → 1 e de 1 → 12.