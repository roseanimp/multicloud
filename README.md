# Primeira Calculadora de IMC em Java Script

Neste projeto foram utilizadas as linguagens **_HTML_**, **_CSS_** e **_JavaScript_**

Abaixo seguem algumas justificativas de preferência pelo **JavaScript**

- **Integração**: O uso do javascript para desenvolver páginas web é bastante popular pela capacidade de integração com outras tecnologias. 

- **Interação**: É uma linguagem interativa, pois permite modificar a estrutura e o conteúdo das páginas em tempo real sem recarregá-las, trazendo assim uma experiência de usuário mais fluida.

- **Rápidez**: É uma linguagem rápida pois permite a valida~ção de dados, em formulários por exemplo, proporcionando uma resposta mais ágil, economizando recursos de rede. Também realiza parte do processamento no navegador, aliviando a carga do servidor, trazendo melhora significativa na perfornace da navegação.

- **Produtividade**: Possui uma extensa lista de bibliotecas, frameworks e ferramentas que facilitam o desenvolvimento e aumentam a produtividade, como por exemplo React, Angular, Jquery, etc.

- **Compatibilidade**: É compatível com quase todos os dispositivos e navegadores, desde desktops até smartphones.

## Como a Calculadora de IMC funciona?

A Calculadora de IMC obtém as informações de peso e altura, imputadas nos respectivos campos. Nos campos existem as visualização de exemplo. Caso os campos tenham valores inválidos, negativos ou alfanuméricos por exemplo, após tentar o cálculo será exibido uma mensagem solicitando a correção para padrões válidos. Posteriormente, ocorre a conversão do valor de altura de centimetros para metros e sequencialmente, calcula-se o IMC usando a fórmula: peso / (altura * altura). 

O resultado será comparado com quatro categorias:

- **Abaixo do peso**: < 18.5
- **Peso normal**: > 18.5 e < 24.9
- **Sobrepeso**: > 24.9 e < 30
- **Obesidade**: > 30

O resultado será exibido na tela informado em qual categoria de IMC o usuário se enquadra.




