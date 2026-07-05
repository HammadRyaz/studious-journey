// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++   
//     }
// } 

function gamer(name, score) {
    return {
        name: name,
        score: score
    }
}

const alice = gamer('Alice', 10)
console.log(alice)