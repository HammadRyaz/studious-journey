// function roll() {
//     return Math.floor((Math.random() * 6) + 1)
// }

// console.log(roll());

function roll(min = 1, max = 5) {
    return Math.floor(Math.random() * (max - min) + min)
}
const username = ['Aliza', "Nina", 'Siesta', 'Jin', 'Goku']
const age = [20, 21, 25, 26, 27]

let user = {
    name: username[roll(0, username.length)],
    age: age[roll(0, age.length)]
}
console.log(user);