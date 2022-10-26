/*
Faça um algoritmo que peça para o usuário digitar 5 números e salve em um array,
porém, se o usuário digitar um número que já foi inserido, o seu programa deve
pedir para ele digitar outro número.
*/
var array = []
var numero = 0
var valido = false

for (var index = 0; index < 5; index++) {
    valido = false
    while(!valido){
        numero = parseInt(prompt("Insira um número"))
        valido = true
        for (var index1 = 0; index1 < 5; index1++) {
            if (array[index1] == numero) {
                valido = false
            }
            
        }
        if (valido) {
            array[index] = numero
        }else {
            console.log("Número inválido")
        }
    }
    
}
console.log(array)