//javascript object
//---------------------
//object:-an object is a realworld entity/thing every object has its own properties

//functional orientation of object

let camaraBrand="canon"
let camaraPrice=35000
let camaracolor="black"

//to overcome this problem we are using objects concept in js


//representation of object
let camara={
    "brand":"canon",
    "price":35000,
    "color":"black",
    "mfg":2021
}
//accessing all items
console.log(camara)
//for accessing single item
console.log(camara.brand)
console.log(camara["price"])

//accessing non-exists properities

console.log(camara.megapixels) //undefined

//access the properities using [] for dynamic 
let prop='color'
let pep='brand'
console.log(camara.prop) //undefined
console.log(camara[prop]) //black
console.log(camara[pep])

//nested object

let student={
    name:"venky",
    age:"23",
    course:"cse",
    address:{
        street:"jubile hills",
        city:"hyderabad",
        state:"ts"
    }
}
console.log(student["address"]["state"])
console.log(student["address"]["city"])

//crud operations with object

//create operation
let mobile={}
mobile.brand="realme"
mobile.color="navy"
mobile.price=9999
mobile.brand="apple"
console.log(mobile)

//read and update operation
console.log(mobile["price"])
mobile.price=10000
console.log(mobile)

//delete operation
delete mobile.color
console.log(mobile)







