// 2 ways for typescript to add type 1. implicit and 2. explicit

// implicit
let fName = 'Max'

//explicit

let lName: string | number | boolean | undefined = 'Espinosa'
lName = 30932
lName = false
lName = undefined


import { twoSum } from "./typePractice"

twoSum({num1: 5, num2: 9, message: 'ts is useful, but sucks'})
