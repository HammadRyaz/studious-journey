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
// class Player {
//     constructor(name) {
//         this.name = name;
//         this.score = 0;
//         this.skills = ["html", "css", "js"];
//     }

//     incrementScore() {
//         this.score++;
//     }
// }
// const player = new Player("Dave");
// player.incrementScore()

// const copy = structuredClone(player);
// Object.setPrototypeOf(copy , P)
// copy.incrementScore()

// console.log(player)
// console.log(copy)
// console.log(copy instanceof Player); 



// class Youtuber{
//     constructor(name, subs){
//         this.name = name || "Ali";
//         this.subs = subs
//         this.views = 10
//     }
//     setViews(){
//         this.views++
//     }
   
// }

// const ali = new Youtuber("","1k")
// ali.setViews()

// //  Deep Copy!
// const hammad = structuredClone(ali);
// Object.setPrototypeOf(hammad, Youtuber.prototype)
// hammad.name="Hammad"
// hammad.setViews()



// console.log("ALi: " ,ali)
// console.log("Hammad: " ,hammad)



// object.assign
// const obj = {
//     name : "Hammad",
//     age : 3
// }
// const obj2 = {}
// Object.assign(obj2,obj)

// obj.age = 10;
// obj2.age = 11;


// console.log("Obj : ", obj)
// console.log("obj2 : " ,obj2)

// structurdClone ---------
// const obj = {
//     name : "Hammad",
//     age : 3,
//     skills : ["html","css","js"]
// }
// const obj2 = structuredClone(obj)

// obj.age = 10;
// obj2.age = 11;
// // obj2.skills = ["react","node","git"] // Poor Refernce Replace ho skti
// obj2.skills[0] = "react" //  lkn koi aik value nahi
// obj.skills[1] = "python"
// console.log("Obj : ", obj)
// console.log("obj2 : " ,obj2)


const obj = {
    name : "Hammad",
    age : 3,
    skills : ["html","css","js"],
    increaseAge : function(){
        this.age++
    }
}

// const obj2 = structuredClone(obj)
const obj2 = {}
Object.assign(obj2,obj)

obj.age = 10;
obj2.age = 11;
// obj2.skills = ["react","node","git"] // Poor Refernce Replace ho skti
obj2.skills[0] = "react" //  lkn koi aik value nahi
obj.skills[1] = "python"

console.log("Obj : ", obj)
console.log("obj2 : " ,obj2)
