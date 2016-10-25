//Import whole module
import MathFunctions from './modules/math'
//Import specific function
import {subtract} from './modules/math'
import $ from 'jquery'

console.log(`3+5 = ${MathFunctions.add(3,5)}`)
console.log(`5-3 = ${subtract(5,2)}`)
console.log(`3*5 = ${MathFunctions.multiply(3,5)}`)
console.log(`5/3 = ${MathFunctions.divide(5,3)}`)

//ES6 stuff
let lis = $('ul.list li')
Array.from(lis).forEach(li => {
    console.log(li.innerHTML);
});

let array = [2,3,4,10,12]
//finds first match
console.log(array.find(x => x < 10))

//variable decleration
//const = constant (can't reassign it)
//let = block scoped
const PI = 3.141593

//function default values
let calcCircle = (x, y = PI) => {
  return 2*x*y
}

console.log(calcCircle(5))
console.log(calcCircle(5,3))

//http://es6-features.org/
