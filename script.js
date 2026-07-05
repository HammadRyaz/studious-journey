// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++   
//     }
// } 
// const gamer2  = gamer

// console.log(gamer)
// console.log(gamer2)


// Shallow Copy
const player = {
    name: 'Dave',
    score: 0,
    incrementScore: function(){
        this.score++   
    },
    skills : ['html','css','js']
} 
const player2 = {}
Object.assign(player2,player)
player2.name = "Hammad";
player2.skills[0] = "react";

console.log("1 :- " ,player)
console.log("2 :- " ,player2)