function addName(firstName,secondName) {
    console.log('First Name: ', firstName)
    console.log('Second Name: ', secondName)
}

addName('Abu','Bakar')


//can be written as below (using arguments)
function addName2() {
    console.log('First Name: ', arguments[0])
    console.log('Second Name: ', arguments[1])
}

addName2('Daus','Bakar')

//can also be written as below too (using const / variable)

const fullName = new Function('firstname','lastname','console.log(firstname,lastname)')

fullName('Daus','Fitri')



//for lots of name

function addName3() {
    for(i=0;i<arguments.length;i++){
        console.log('Name: ', arguments[i])
    }
}

addName3('asda','aasffw','wtyr','erqrt','eqtqgb')

//sum cara 1 guna const dan new Function

const sum = new Function('x','y','return x+y')
console.log(sum(1,2))

//sum cara 2 (normal function)

function sum2(x,y) {
    console.log(x+y)
}
sum2(2,6)

//sum cara 3 (arrow function)

const sum3 = (x,y) => {
    console.log(x+y)
}
sum3(4,9)


//function hasilkan random number

function randomize() {
    const rndNum = ~~(Math.random() * 1000)
    if(rndNum > 200) {
        console.log('More than 200, number: ',rndNum)
    } else {
        console.log('Number: ', rndNum)
    }
}

randomize()