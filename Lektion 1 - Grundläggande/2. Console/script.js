/* 
    CONSOLE
    Används för felsökning. Är typ den enda felsökningsmetod vi har att använda
    oss av!

    Ska bara användas i utvecklingsmiljön. Inte i produktionsmiljön.
    Dock finns vissa undantag.

    Det finns andra typer av felsökningsvertyg som heter ESLint.

    I webbläsaren: Inspektera -> Console

    Sätt att felsköka på:

    function myfunc() {
    console.log('1')

    if(true) {
            console.log('2')
        } else {
            console.log('3')
        }
    }

*/

console.log(".log() = informationstext")
console.warn('.warn() = varningsmeddelande')
console.error('.error() = felmeddelande')
