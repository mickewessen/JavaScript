export function print(value) {
    console.log(value)
}

// export const validate = value => {
//     if(value !== '')
//         return true
//     else
//         return false
// }

export const validate = (value, min = 2, callback ) => {
    if(value.length >= min)
        return true
    else
        return false
} 


export const containNumbers = value => {
    return /\d/.test(value)
}