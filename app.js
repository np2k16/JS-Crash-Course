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
function welcomePersonToFES(firstName, lastName){
    console.log(`Welcome to FES, ${firstName} ${lastName}`)
}

welcomePersonToFES('Nilay', 'Prajapati')
welcomePersonToFES('Sam', 'Patel')
welcomePersonToFES('Bob', "Saget")

function sumOfTwoNums(num1, num2){
    return num1 + num2
}

console.log(sumOfTwoNums(10, 10))

function convertCelsiusToFahrenheit(num){
    return num * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(0))
console.log(convertCelsiusToFahrenheit(10))
console.log(convertCelsiusToFahrenheit(30))

//ARRAYS
let arr = [20, 30, 40, 50, 100]
console.log(arr[0])
console.log(arr[arr.length-1])

arr.push(200)

console.log(arr)

let newArr = arr.filter(element => element < 50)

console.log(newArr)

let grades = ['A+', 'A', 'FAIL']
let newGrades = grades.filter(element => element !== 'FAIL')
console.log(newGrades)

newGrades = []
for(let i = 0; i < grades.length; i++){
    if(grades[i] !== 'FAIL'){
        newGrades.push(grades[i])
    }
}
console.log(newGrades)

let arr2 = [1, 4, 9, 16]
let newArr2 = arr2.map((element) => {
    console.log(element)
    return undefined
})

console.log(newArr2)

let dollars = [1, 5, 10, 30]
let cents = dollars.map(element => element * 100)
console.log(cents)

cents = []
for(i = 0; i < dollars.length; i++){
    cents.push(dollars[i] * 100)
}
console.log(cents)

//OBJECTS
let users = [{
    username: 'Nilay',
    password: 'test123',
    email: 'n.prajapati2016@gmail.com',
    subscription: 'VIP',
    discord: 'Nilay#0000',
    lessonsCompleted: [0, 1]
},
{
    username: 'Sam',
    password: 'sam123',
    email: 'sam@gmail.com',
    subscription: 'VIP',
    discord: 'sam#0000',
    lessonsCompleted: [0, 1]
}
]

console.log(users[0].username)
console.log(users[1].subscription)
console.log(users[0].lessonsCompleted.map(elem => elem * 2))

function login(email, password){
    for(i = 0; i < users.length; i++){
    if(users[i].email === email){
    console.log(users[i])
    if(users[i].password === password){
        console.log('log the user in')
    }
    else{
        console.log('incorrect password')
    }
    return
    }
    console.log('could not find credentials')
}
}
login('n.prajapati2016@gmail.com', 'test123')

function register(username, email, password, subscription, discord, lessonsCompleted){
    console.log(username)
    let user = {
        username: username,
        email: email,
        password: password,
        subscription: subscription,
        discord: discord,
        lessonsCompleted: lessonsCompleted
    }
    users.push(user)
}
register('zen', 'zen@fes.com', 'zen123', 'VIP', 'Zen#0001', [0,1])
console.log(users)

//DOM
console.log(document.querySelector('h1'))

console.log(document.getElementById('title'))

document.querySelector('#title').innerHTML += " Frontend Simplified"


document.querySelector('#title').style.fontSize='28px'

function toggleDarkMode(){
    document.querySelector('body').classList.toggle('dark-theme')
}