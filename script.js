/* Questão 01 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento 
                text (a ser passado para a função) e com ponto de exclamação “!” no final. */
                        
    function Quest01(arg)
    {   return console.log('Olá, ${arg} !');    }

/* Questão 02 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), 
                mostre no console a soma,  subtração, multiplicação ou divisão desses valores, 
                dependendo da função Callabck. */
               
    function Quest02(val01, val02, callback){
        console.log('A multiplicação de ' + val01 + ' e ' + val02 + ' é igual a ' + callback(val01, val02));
    }

    Quest02(8,3, function(v1,v2)
    { return (v1 * v2); })

/* Questão 03 – Crie uma função que recebe um valor e uma callback como parâmetro, que retorna 
                uma outra função que recebe um parâmetro e chama essa callback que verifica se 
                um número inteiro passado na primeira função como parâmetro é divisível por um 
                outro numero passado pela função interna e retorne true ou false. */

    function Quest03(Q3valor1, Q3valor2){
        return function(Q3valor1){
            callbackQ3(Q3valor1, Q3valor2);
        }
    }
                
    var internalFunc = Quest03(20, function(vl1, vl2){
        if (vl1%vl2 ==0)
            console.log('true');
        else
            console.log('false');
    })
                
    internalFunc(4);

/* Questão 04 – Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente 
                como uma string. Por exemplo, se a entrada for 2, a função deverá retornar 
                “fevereiro”, pois este é o 2° mês. */

    function Mes(numQ4){
        switch (numQ4 > 0)
        {
            case (numQ4==1):
              console.log('Janeiro');
            break;
                        
            case (numQ4==2):
                console.log('Fevereiro');
            break;
                        
            case (numQ4==3):
                console.log('Março');
            break;
                        
            case (numQ4==4):
                console.log('Abril');
            break;
                        
            case (numQ4==5):
               console.log('Maio');
            break;
                        
            case (numQ4==6):
              console.log('Junho');
            break;
                        
            case (numQ4==7):
              console.log('JUlho');
            break;
                        
            case (numQ4==8):
              console.log('Agosto');
            break;
                        
            case (numQ4==9):
                console.log('Setembro');
            break;
                        
            case (numQ4==10):
               console.log('Outubro');
            break;
                        
            case (numQ4==11):
               console.log('Novembro');
            break;
                        
            case (numQ4==12):
               console.log('Dezembro');
            break;  
        }
    }
    
    Mes(8);

/* Questão 05 – Crie uma função que receba dois números e retorne se o primeiro é maior ou igual 
                ao segundo dependendo da função Callback. */
    
    function Quest05(Q5num1, Q5num2, callback)
    { return callback(Q5num1,Q5num2) } 

    Quest05(15, 25, function(Q5num1, Q5num2){
        if(Q5num1 > Q5num2) 
        console.log('O primeiro número é maior que o segundo.');
        
        else if(Q5num1 < Q5num2){
            let diferenca = (Q5num2 - Q5num1);
            console.log('O primeiro número não é maior que o segundo, pois o segundo número é igual o primeiro número + ' + diferenca + '.');
        } 
        
        else if(Q5num1 == Q5num2)
        console.log('Ambos são iguais.');
    })                