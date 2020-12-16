/* 
    OBJECT

    key: value pair
*/

/*  Javascript Object */
var person = {
    "firstname": "Micke",
    "lastName": "Wessén",
    "age": 36
}

var person = {
    firstName: 'Micke',
    lastName: 'Wessén',
    age: 36,
    hair: ['blond','short'],
    adress: {
        adressLine: 'Parklyckevägen 4A',
        zipcode: '70227',
        city: 'Örebro'
    },

    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// console.log(person.fullName())
// console.log(person)

/* JSON = Javascript Object Notation 

    {
        "firstname": "Micke",
        "lastName": "Wessén",
        "age": 36
    }
    
*/

// JSON -> JS Object (C# JsonConvert.DeserializeObject<>())
    var json = '{ "firstName": "Micke","lastName":"Wessen","age":36 }'
    var parsedjson = JSON.parse(json)
    // console.log(parsedjson)

    //JS Object -> JSON (C# JsonConvert.SerializeObject())

    var json =JSON.stringify(person)
    console.log(json)

    console.log(person.adress.adressLine)
    console.log(person['adress']['adressLine'])

// destructing object

    // let firstName = person.firstname
    // let lastName = person.lastName
    // let age = person.age
    // let adressline = person.adress.adressLine

    let {firstName, lastName, age} = person
    console.log(firstName)


