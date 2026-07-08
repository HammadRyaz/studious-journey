export const symbols = () => {
    // const secret = Symbol("HSKJAD-221BN803-HDBW92");

    // const user = {
    //     name: "Hammad",
    //     [secret]: secret.toString(),
    //     age: 20
    // }
    // console.log(user[secret])

    /*
   Challenge:
       1. Add a hidden property to the book object 
          holding a librarian’s note to say the book 
          has gone missing. 
       2. Log out the new property.
   */
    // const book = {
    //     title: "The Catcher in the Rye",
    //     author: "J.D. Salinger",
    //     year: 1951
    // }
    // const librarianNote = Symbol()
    // book[librarianNote] = "the book has gone missing. "
    // console.log(book[librarianNote])

    // const obj = {};
    // const key1 = { id: 1 };
    // const key2 = { id: 2 };
    // obj[key1] = "first user";
    // obj[key2] = "second user";
    // console.log(obj);

    // const usrMap = new Map(); // Map in JS
    // usrMap.set(key1, "first")
    // usrMap.set(key2, "second")
    // console.log(usrMap)


    // ----------with and without --------------
    const userObj = {};
    userObj["name"] = "Hammad";
    userObj[1] = "one"; // key auto string ban jayegi
    userObj[true] = "yes"; // ye bhi string ban jayegi

    // console.log(Object.entries(userObj)); // sb kuch aik string bn gya hai
    // Object.keys(userObj).forEach((key, val) =>
    //     console.log("key : ", key, ": ", typeof key),
    // );

    const userMap = new Map();
    userMap.set("name", "Hammad");
    userMap.set(1, "id");
    userMap.set(true, "login");

    // console.log(userMap);
    // userMap.forEach((val, key) =>
    //     console.log("key : ", key, ": ", typeof key)
    // )

    // ===============================================================
    // Exercise------1 Scrimba

    const athlete1 = { name: 'Alice', averageTime10KmMins: 58.3 }
    const athlete2 = { name: 'Dave', averageTime10KmMins: 53.2 }
    const athlete3 = { name: 'Micky', averageTime10KmMins: 64.5 }
    const athlete4 = { name: 'Judy', averageTime10KmMins: 66.0 }

    /* Challenge */

    /* 1. Create a map object "athletes" to store the athletes. */
    const athletes = new Map();
    function addAthlete(athlete, time) {
        /* 2. This function should add athletes to the "athletes" map. */
        athletes.set(athlete, time)
    }

    function getSummary() {
        /* This function should make the following appear in the console */

        //Alice's average time is 58.3 but today Alice achieved 57.3
        //Dave's average time is 53.2 but today Dave achieved 61.1
        //Micky's average time is 64.5 but today Micky achieved 59.9
        //Judy's average time is 66 but today Judy achieved 61.6
        console.log(athletes)
        athletes.forEach((val, key) =>
            console.log(`${key.name} average time is ${key.averageTime10KmMins} but today Judy achieved ${val}`)
        )
    }

    addAthlete(athlete1, 57.3)
    addAthlete(athlete2, 61.1)
    addAthlete(athlete3, 59.9)
    addAthlete(athlete4, 61.6)

    getSummary()
};

symbols();
