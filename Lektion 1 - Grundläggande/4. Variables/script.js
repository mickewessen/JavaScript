/* 
    VARIABLES

    en container/box för att lagra information i. Heap/Stack

    JS: camelCase   firstName
    C#: Pascal      FirstName

*/

value                   // <- för absolut inte såhär!
var value               // <- undvik att göra såhär
let value               // <- gör så här för ett dynamiskt värde (R/W)
const value             // <- gör så här för ett statiskt värde (R)

let firstname = "Micke"
firstname = "Samuel"        //<- kan ändras men inte deklareras igen

const pi = 3.14
pi = "3.1111"           // <- const kan inte skrivas över