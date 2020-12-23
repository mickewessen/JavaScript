/* 
    Arrays

    JS          C#
    ----------------------------
    Array []       Array   string[]
    Array []       List    List<string>

*/

    // const array = []
    // console.log(typeof array)

    // Går att ha flera olika datatyper i en array - Bör dock inte användas
    // array[0] ='Micke'
    // array[1] = { firstName: 'Micke'}
    // array[2] = 123
    // console.log(array)

    // const names = ['Micke','Samuel','Daniel']
    // console.log(names)
    // console.log(names.length)
    // console.log(names.indexOf('Samuel'))

    // const people = [
    //     { firstName: 'Micke', lastName: 'Wessén' },
    //     { firstName: 'Daniel', lastName: 'Wessén' },
    //     { firstName: 'Samuel', lastName: 'Wessén' }
    // ]

    // /* Sök igenom med array.forEach */
    // people.forEach(person => {
    //     if(person.firstName === 'Samuel')
    //         console.log(person)
    // })

    // /* Sök igenom med for of */
    // for(let person of people) {
    //     if(person.firstName === 'Samuel')
    //     console.log(person)
    // }

    // /* Sök igenom med vanlig for-loop */
    // for(let i=0; i < people.length; i++) {
    //     if(people[i].firstName === 'Samuel')
    //     console.log(people[i])
    // }

    // /* Filtrera ut data med .filter() */
    // let wessens = people.filter(person => {
    //     return person.lastName === 'Wessén'
    // })
    // console.log(wessens)

    // /*Mappa upp en specifik property till en ny Array .map() */

    // let firstnames = people.map(person => {
    //     return person.firstName === 'Micke'
    // })
    // console.log(firstnames)


    // const names =[]

    // /* .push()           - lägg till i slutet av listan med .push()*/
    // names.push('Micke')
    // names.push('Samuel')
    // console.log(names)

    // /* .pop()            - ta bort något i slutet av listan med .pop()*/
    // names.pop()
    // console.log(names)
    
    // /* .unshift()        - lägg till i början av listan med .unshift()*/
    // names.unshift('Daniel')
    // console.log(names)

    // /* .shift()          - ta bort något i början av listan med .shift()*/
    // names.shift()
    // console.log(names)
    
    // /* delete            - ta bort något från en specifik position med delete */
    // delete names[0]
    // console.log(names)


    const names = ['Micke','Samuel','Daniel']

    /* .sort()              - sorterar något i accending ordning dvs A-Z 0-9*/
        names.sort()
        console.log(names)

    /* .reverse()           - ändra ordning på listan med.reverse()*/
        names.reverse()
        console.log(names)   

    /* sorterar något i descending ordning dvs Z-A 9-0*/
        names.sort()
        names.reverse()
        console.log(names)    

    /* nestla olika metoder med varandra */
        names.sort().reverse()
        console.log(names)    

    /* .splice() */
        console.log(names)

    /* lägg till ett värde på en specifik position */
        names.splice(2, 0, 'Anna')

    /* ta bort ett värde från en specifik position */
        names.splice(2,1)
        console.log(names)


    /* .slice() kopiera ett värde till en ny array*/
        var fruits = ['apple','orange']
        var citrus = fruits.slice(1)

        console.log(citrus)
    