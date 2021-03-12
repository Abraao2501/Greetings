# Greetings

Este é um simples projeto em Javascript que lhe dá uma saudação de acordo com a hora da sua máquina. Este foi o primeiro projeto que pude aplicar o conceito de [Mobile First](https://blog.apiki.com/mobile-first-o-conceito-e-sua-aplicabilidade/).

## Mobile First

O conceito do **Mobile First** é basicamente a construção de interfaces web voltadas principalmente para dispositivos móveis, tendo em vista que este é o meio mais acesível hoje em dia para a maior parte dos usuários.
Neste projeto, o design foi primeiro construído para as dimensões de um celular comum, para assim, evitar erros de responsividade que geralmente são tão comuns quando a tela do desktop é priorizada no desenvolvimento.

## Desafios do prjeto

Este projeto me permitiu trabalhar com um conceito que até então eu não tinha conhecido, que é o objeto `Date` em javascript. Abaixo segue-se o código que utilizei para poder retornar a hora local do usuário.

```javascript
const date = new Date(); //Retorna o objeto Date
let hour = date.getHours(); //Retorna a hora atual
```

## Protótipo

![afternoon](/design/afternoon.PNG)
![Nigth](/design/nigth.PNG)

Também existem as telas de **Bom Dia** e **Boa Madrugada**.

## Tente você mesmo!

O projeto foi hospedado no sistema de hospedagem da [Vercel](https://vercel.com/)

Clique [aqui](https://y-lg0i0qzs1-abraao2501.vercel.app) para receber sua saudação :)
