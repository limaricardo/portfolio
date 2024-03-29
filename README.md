# Portfólio - Ricardo Lima

# Sobre o projeto

https://ricardo-lima.vercel.app/

Esse portfólio é um projeto pessoal onde quis realizar algo diferente do que já havia visto antes, sempre traçando novos desafios ao longo do desenvolvimento.

Colocarei abaixo o máximo de detalhes que puder sobre as páginas, créditos a algumas criações e links dos vídeos de onde tirei algumas inspirações.

## Links e créditos

### Internacionalização com i18n
Como nesta área o Inglês é fundamental e estamos abertos a posições remotas do mundo todo, resolvi fazer a internacionalização com i18n para ter a tradução de todo o site para o Inglês. Apesar de trabalhoso é bem simples de implementar, deixarei o link abaixo do qual assisti para aprender e aplicar no projeto.

[Video - Aplicações multi idiomas - Matheus Castiglioni](https://www.youtube.com/watch?v=5p9EMWwieyo)

[GitHub do Criador - Matheus Castiglioni](https://github.com/mahenrique94)

![Selecione o idioma](https://i.imgur.com/IozpdWR.png)

### Organização das páginas

As páginas foram dividas em 3 páginas uma ao lado da outra na parte de cima e 3 na parte de baixo. Para isso foi utilizado Scroll Snapping (Horizontal).
Para saber mais como criar um, segue link do vídeo que utilizei para aprender a usar:

[Video - Scroll Snapping - Developer Filip](https://youtu.be/pNPkVQD7vlM)

[GitHub do Criador - Filip Grebowski](https://github.com/FilipGrebowski)

![Organização das páginas](https://i.imgur.com/T4rtQhR.png) 


### Menu inicial 
O menu de navegação junto ao efeito de hover foram retirados do vídeo abaixo. 
As animações foram realizadas de forma padrão do CSS.

[Video - Isometric Menu Hover - Online Tutorials](https://www.youtube.com/watch?v=MmdKeypSxE8)

![Menu Inicial](https://i.imgur.com/JJzu2p1.png) 


### Currículo
A página de currículo foi toda realizada com states do React. A parte do card com mais informações sobre o perfil deixarei um link abaixo que explica como criar um flip Card.


[Video - Flipcard - Coding With Russ](https://www.youtube.com/watch?v=NCLdf661ILE)

[GitHub do Criador - Russ](https://github.com/russs123)

![Currículo](https://i.imgur.com/hA7KdMZ.png)


### Redes sociais
Em tese a página mais simples de criação, talvez seja a segunda mais demorada em relação a criatividade (ou pelo menos tentiva kkkkk). Tentei sair um pouco do padrão por aqui também, mas sem exageros. O link onde explica como fazer as animações deixarei abaixo.

[Video - CSS 3D Isometric - Online Tutorials](https://www.youtube.com/watch?v=C8wSNZqktOM)

![Projetos](https://i.imgur.com/5MDpQ94.png)


### Projetos
Essa parte do portfólio foi de longe a mais desafiadora. Ao analisar um exemplo, do qual deixarei o link abaixo, acreditei que fosse simples para implementar o restante, porém ao deparar com detalhes de como eram renderizadas as imagens acabei ficando um tempo a mais que esperado.

Mas tudo tem seu lado bom, aprendi ferramentas do Sass que até então não tinha utilizado. Uma certa parte do código se encontrava com 3000 linhas (apenas o estilo), depois de refatorado (antes de responsividade e alguns elementos), caiu para menos de 800. 

Recomendo que deem uma olhada tanto na documentação, assim como em alguns vídeos sobre Sass.

[Turning pages with CSS - Amit Sheen](https://codepen.io/amit_sheen/pen/WNweryv)

[Video - Sass Tutorial - The Net Ninja](https://www.youtube.com/watch?v=_kqN4hl9bGc&list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb&index=1)

[Documentação do Sass](https://sass-lang.com/)

![Projetos](https://i.imgur.com/c7mjGiN.png)


### Formulário de Contato   
A parte do formulário de contato foi feito com Formik e Yup. 
Para o envio da mensagem direto para o email foi utilizado EmailJS.

[Video - React Formik with Yup - Onelight Web Dev](https://www.youtube.com/watch?v=7Ophfq0lEAY)

[GitHub do Criador - Nikita](https://github.com/nikitapryymak)

[Video - EmailJS - Chaoo Charles](https://www.youtube.com/watch?v=bMq2riFCF90)

[GitHub do Criador - Charles](https://github.com/chaoocharles)

![Formulário de Contato](https://i.imgur.com/bSHEpkf.png) 


### Contrate-me
Essa página foi a qual decidi fazer uma interação um pouco diferente, quase que uma pegadinha com quem tivesse navegando por ela. 
Ao perguntar se gostaria de contratar-me, o usuário não conseguiria clicar no botão "Não", que ficaria pulando de um lado pro outro na tela. 

Depois de algumas tentativas aparecem modais, que permitem o usuário clicar em não e ser redirecionado para a página de formulário de contato.

Este foi feito de forma manual com Javascript puro, caso surja alguma dúvida em relação ao código desta página, me mande mensagem no LinkedIn para batermos um papo sobre.

<img align='right' src='./src/assets/no-gif.gif' width='200"'>


## Layout responsivo para mobile

### Menu inicial                                                                                                 
![Menu inicial Mobile](https://i.imgur.com/irVepy1.png) 

### Currículo
![Currículo Mobile](https://i.imgur.com/9KsNJPQ.png) 
![Currículo Mobile2](https://i.imgur.com/jX6hRKq.png) 

### Redes sociais                                                                                   
![Redes sociais Mobile](https://i.imgur.com/ORsyoUe.png) 

### Projetos
![Projetos Mobile](https://i.imgur.com/xJvL27j.png)

### Formulário de Contato
![Formulário de Contato Mobile](https://i.imgur.com/yoPJhgp.png)

### Contrate-me
![Contrate-me Mobile](https://i.imgur.com/FlaOZcS.png)


## Front end
- HTML5
- CSS3
- Javascript 
- ReactJS
- Sass
- i18n
- Formik
- Yup
- EmailJS

## Implantação em produção
- Front end web: Vercel

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/limaricardo/portfolio

# instalar dependências do projeto, caso necessário:
npm install

# executar o projeto
npm start
```

# Autor

Ricardo Pereira Lima

https://www.linkedin.com/in/ricardo-pereira-lima/
