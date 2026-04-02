class User {
    constructor(side) {
        this.side = side;
    }
    printUI(message) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("msg", this.side);
                const container = document.querySelector(".container");
                container.appendChild(userDiv);
                resolve(userDiv.textContent = message)
            }, 2000);
        })
    }
    remove(side) {
        if (this.role == "admin") {
            const allMsges = document.querySelectorAll(side);
            allMsges.forEach((msg) => msg.remove());
        }
    }
}
User.prototype.role = "user";
class Admin extends User {
    constructor(side) {
        super(side);
        this.side = side;
    }
}
Admin.prototype.role = "admin";
const naruto = new User("right");
const boy = new User("right");
const hinata = new User("left");
const admin = new Admin();

function playSound() {
    const audio = new Audio('WhatsappSound.mp3')
    audio.play();
}

async function run() {
    /* console.log(await naruto.printUI("Hehe, thought you were ignoring me 😤"));
    console.log(await hinata.printUI("I’d never ignore you, baka 😳"));
    playSound();
    console.log(await naruto.printUI("Then why didn’t you reply yesterday huh 😏"));
    console.log(await hinata.printUI("I fell asleep waiting for your text 😴"));
    playSound();
    console.log(await naruto.printUI("Aww that’s actually kinda cute ngl 🥺"));
    console.log(await hinata.printUI("Stop teasing meee 😭"));
    playSound();
    console.log(await naruto.printUI("Hehe okay okay 😁"));
    console.log(await hinata.printUI("What are you doing now?"));
    playSound();
    console.log(await naruto.printUI("Eating ramen 🍜 as always hehe"));
    console.log(await hinata.printUI("Figures 😅 one day you’ll turn into ramen 😂"));
    playSound();
    console.log(await naruto.printUI("At least then you’d love me even more 😏"));
    console.log(await hinata.printUI("N-Naruto-kun! 😳🤭"));
    playSound();
    console.log(await naruto.printUI("Hehe gotcha 😁🫰"));
    console.log(await hinata.printUI("You’re impossible sometimes 😌"));
    playSound();
    console.log(await naruto.printUI("But you still like me tho 😎"));
    console.log(await hinata.printUI("M-maybe… just a little 😳💖"));
    playSound();
    console.log(await naruto.printUI("Dattebayo!! 🌀💛")); */
    console.log(await boy.printUI("Hey Hinata… can I tell you something? 😳"));
    console.log(await hinata.printUI("Hmm? What is it? 🫣"));
    playSound();

    console.log(await boy.printUI("It’s just… you make my day brighter every time we talk ☀️"));
    console.log(await hinata.printUI("W-what do you mean? 😳"));
    playSound();

    console.log(await boy.printUI("I mean… I kinda… like you 😅"));
    console.log(await hinata.printUI("W-whaaat 😭 You’re just teasing me again, right?"));
    playSound();

    console.log(await boy.printUI("No, I’m serious Hinata… I really like you 💖"));
    console.log(await hinata.printUI("...I don’t know what to say 😳"));
    playSound();

    console.log(await boy.printUI("You don’t have to say anything… just tell me how you feel 😔"));
    console.log(await hinata.printUI("I… I like you too 🥺💞"));
    playSound();

    console.log(await boy.printUI("Wait, really?! 😭"));
    console.log(await hinata.printUI("Yes… I was just too shy to say it first 😳"));
    playSound();

    console.log(await boy.printUI("You have no idea how happy I am right now 😭❤️"));
    console.log(await hinata.printUI("Hehe~ you’re such a dork 😅"));
    playSound();

    console.log(await boy.printUI("So… can I call you mine now? 😏"));
    console.log(await hinata.printUI("M-maybe… just a little bit 🫶💖"));
    playSound();

    console.log(await boy.printUI("Deal 😎💘"));

}
run()





// hinata.printUI("Naruto Kon");
// naruto.printUI("Yes Hinata");
// hinata.printUI("Where arre you?");
// naruto.printUI("In Your Heart");
// hinata.printUI("NarutooKun🤭");
// naruto.printUI("Hehe 😁😁🫰");

// admin.remove(".left")

// Call Back Hell
/*
function getUser(name, timeout, fnc) {
    setTimeout(() => {
        fnc(name);
    }, timeout);
}
console.log("Geting User ----1");

getUser("Hammad", 2000, (name) => {
    console.log("User : ", name);
    console.log("Geting User ----2");
    getUser("Naruto", 3000, (name) => {
        console.log("User : ", name);
        console.log("Geting User ----3");
    })
    getUser("Naruto", 4000, (name) => {
        console.log("User : ", name);
    })
}) */




// Promise .then .catch
/*
function getUser(name, timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(name)
        }, timeout);
    })
}
console.log("Geting  User 1.........");
getUser("Hamster", 2000).then((result) => {
    console.log(result);
    console.log("Geting  User 2.........");
    return getUser("Cat", 3000);
}).then((result) => {
    console.log(result);
    console.log("Geting  User 3.........");
    return getUser("Hinata", 4000);
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}) */


// async await 
