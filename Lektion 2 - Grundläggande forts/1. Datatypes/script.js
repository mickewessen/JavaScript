/* 
    DATA TYPES

    JS              C#
    ----------------------------------------------------------------------------------
    String          String                                          Text
    Number          int, long, double, decimal, float, uint         Heltal, decimaltal
    Boolean         Boolean (bool)                                  Sant/Falskt - True/False
    Object          object, null                                    Objekt eller tomt värde
    Undefined                                                       Odefinerat värde
    Symbol
    null            null                                            

    I JS ÄR:
    Array, Object, Null = Object

*/



/* String */
var firstName = "Micke"
var firstName = 'Micke'
var firstName = `Micke`     // <-- Shift + ´

var text = "Jag är \"bäst\" i hela världen och helt underbar."
var text = 'Jag är "bäst" i hela världen och helt underbar.'
var text = `Jag är "bäst" i hela världen och 'helt' underbar.`

var firstName = 'Micke'
var lastName = 'Wessén'
var adress =  'Parklyckevägen 4A'
var city = 'Örebro'

var speach = 'Hej jag heter ' + firstName + ' '+ lastName + ' och bor på ' + adress + ' i ' + city + '.'
var speach = `Hej jag heter ${firstName} ${lastName} och bor på ${adress} i ${city}.`

var modified = speach.length
var modified = speach.toLowerCase()
var modified = speach.toUpperCase()
var modified = speach.toLowerCase().indexOf("hej")
var modified = speach.concat(' ', text)
var modified = speach.trim()

console.log(modified)



/* Boolean */
// true/false - 1/0

var status = true
var status = false



/* Numbers */

var value = 1
var value = 1.1
var value = 123e5
var value = 123e-5
var value = 0.123456789012345678
var value = 1234567890123456


/* 
    +   lägg till
    -   ta bort
    *   gångra
    /   dela
    %   hur mycket är kvar
    ++  öka med 1
    --  minska med 1

    =   lika med
    +=  lägg till (ersätter inte)
    -=  tar bort (ersätter inte)
    *=  gångrar (ersätter inte utan gångrar)
    /=  delar (ersätter inte)
    %=  hur mycket är kvar (ersätter inte)
*/



/* NULL och Undefined */

var ref                 // <-- undefined
var ref = null          //<-- värdet är null men ett object
var ref = undefined     //<-- Undefined


console.log(typeof ref)
console.log(ref)