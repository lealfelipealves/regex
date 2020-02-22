// . ? * + - ˆ $ | [ ] { } ( ) \ :
const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./g

console.log(texto.split(regexPonto))

const regexSimbilos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbilos))
