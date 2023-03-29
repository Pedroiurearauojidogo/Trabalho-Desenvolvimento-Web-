# Trabalho-Desenvolvimento-Web
Trabalho Bimestral - 2º Ano de Informática

Neste trabalho, optamos por fazer uma Calculadora de IMC, onde o usuário insere seu peso e sua altura e o programa calcula seu índice de massa corporal. O programa também fornece uma tabela, permitindo ao usuário saber a sua classificação.  

Inicialmente, criamos uma div class chamada "container", onde criamos a base da interface do calculadora, como tamanho, borda e cores. Após isso, dentro dessa mesma div, criamos outra div class, intitulada "camposInput", referente aos espaços onde seriam inseridas as informações (peso e altura).

![image](https://user-images.githubusercontent.com/129282744/228522194-d80ae73a-22db-4753-aa07-5b65752a6805.png)









Em seguida, criamos um botão para calcular o IMC, onde este realizaria o cálculo através das informações já inseridas pelo usuário. 

![image](https://user-images.githubusercontent.com/129282744/228522464-fcc62328-0679-4436-86b6-29808c84b815.png)





No JavaScript, implementamos o código para que tudo corresse como planejado. Começamos criando a função "calcularImc", onde criamos o var "peso" e o var "altura".



![image](https://user-images.githubusercontent.com/129282744/228524099-d955329a-9097-4ea2-9b9b-b542806697c3.png)


Também enviamos uma mensagem ao usuário caso naõ fossem detectados os números referentes ao peso e a altura, através da função "isNaN".


![image](https://user-images.githubusercontent.com/129282744/228524425-14d8280f-77c1-4acd-9c74-160baab4783c.png)


Para o cálculo, criamos o var que caucularia o imc.

![image](https://user-images.githubusercontent.com/129282744/228524654-6a63b9ae-5c5d-4d13-8961-dc025296c01f.png)

Por fim, apenas exibimos o resultado do IMC, permitindo com que o usuário conferisse sua classificação na tabela fornecida.

![image](https://user-images.githubusercontent.com/129282744/228524778-fcfc9850-85c0-4a8a-985a-ca27a2e95668.png)
