'use strict'

let ShowArray = (Array) => {
    for (let i = 0; i < Array.length; i++) {
        for (let j = 0; j < Array.length; j++) {
            alert( Array[i] + String(Array[j]) )
        }
    }
    return
}

let list = [0, 2, 4, 8]

ShowArray(list)


let showArrayy = (Array) => {
    for (let i = 0; i < Array.length; i++) {
        for (let j = i; j < Array.length; j++) {
            if (Array[i] !== Array[j]) {
                alert( String(Array[i]) + Array[j] )
            }
        }
    }
    return
}   

let listt = [0, 2, 4, 8]

showArrayy(listt)






