// DATA TYPES
// STRING 
console.log('Hello World 24!')
console.log('Hello World'[10])
console.log('Hello World'.length)

let str = 'Nilay'
console.log(str[str.length -1])

// NUMBERS 

console.log(1+1)
console.log(1-1)
console.log(11*2)
console.log(10/2)
console.log(3%2)

// BOOLEAN 

console.log(5 < 10)
console.log(5 > 10)

// NULL & UNDEFINED 

console.log(null)
console.log(undefined)
console.log('n'/5)

// VARIABLES
let name = 'Nilay'
let isRaining = true
let temperature = 20
let planet = 'Earth'

temperature += 2
console.log(temperature)

//const temp = 20
//temp += 2 this causes an error


//Convert celsius to fahrenheit
let celsius = 10
let fahrenheit = celsius * 1.8 + 32
console.log(fahrenheit)

//Equality
console.log(1 == '1')
console.log('1' === 1)

//CONDITIONALS
let subscribe = true
let loggedIn = true
if(subscribe === true){
    console.log('show the video')
}
else if(loggedIn === true){
    console.log('tell user to subscribe')
}
else{
    console.log('tell user to log into account')
}

let cash = 50
let price = 40

if(cash > price){
    console.log(`you paid extra, here is ${cash - price} dollars change`)
}
else if(cash === price){
    console.log('you paid the exact amount have a nice day')
}
else{
    console.log(`not enough money - you still owe ${price - cash} dollars`)
}

//Logical Operators
let isStoreOpen = true

if(cash >= price && !isStoreOpen === false){
    console.log('print the receipt')
}


//truthy and falsy values
if(''){
    console.log('truthy value')
}
else{
    console.log('falsy value')
}

//Ternary Operators
let hot = true
hot ? console.log('it is hot') : console.log('it is cold')

let str2 = subscribe && loggedIn ? 'show video' : 'hide video'
console.log(str2)

let str3 = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
console.log(str3)

//LOOPS
let count = 1
while(count <= 100){
    console.log(count)
    count += 1
}

for(i = 0; i < 3; i++){
    console.log(i + 1)
}

for(i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(` ${i} -> Frontend Simplified`)
    }
    else if(i % 3 == 0){
        console.log(` ${i} -> Frontend`)
    }
    else if(i % 5 == 0){
        console.log(` ${i} -> Simplified`)
    }
    else{
        console.log(` ${i} -> ${i}`)
    }
}

const str4 = "Frontend Simplified"
for(i = 0; i < str4.length; i++){
    console.log(str4[i])
}

//FUNCTIONS