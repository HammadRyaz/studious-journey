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
// const player = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++   
//     },
//     skills : ['html','css','js']
// } 
// const player2 = {}
// Object.assign(player2,player)
// player2.name = "Hammad";
// player2.skills[0] = "react";

// console.log("1 :- " ,player)
// console.log("2 :- " ,player2)


//  Deep Copy
// const player = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++   
//     },
//     skills : ['html','css','js']
// }
// const player2 = structuredClone(player)
// player2.name = "Hammad";
// player2.skills[0] = "react";

// console.log("1 :- " ,player)
// console.log("2 :- " ,player2)



//  Deep Copy with fucntion
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.skills = ["html", "css", "js"];
    }

    incrementScore() {
        this.score++;
    }
}
const player = new Player("Dave");
player.incrementScore()

const copy = structuredClone(player);
Object.setPrototypeOf(copy , P)
copy.incrementScore()

console.log(player)
console.log(copy)
console.log(copy instanceof Player); 