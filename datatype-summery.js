// primitive data types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const isloggedin = false 
const outsidetemperature = null
let useremail;

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid) // false


// reference data types , non primitive data types 
// 3 types: Object, Array, Function

const heros = ["shaktiman", "naagraj", "doga"]

  let myobj = {
  name : "Tushar",
  age : 23
 
  }

  const myfunction = function(){
    console.log("hello world")
  }

  console.log(typeof heros) // object