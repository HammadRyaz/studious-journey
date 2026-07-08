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

    const userObj = {};
    userObj["name"] = "Hammad";
    userObj[1] = "one"; // key auto string ban jayegi
    userObj[true] = "yes"; // ye bhi string ban jayegi

    console.log(Object.entries(userObj)); // sb kuch aik string bn gya hai
    Object.keys(userObj).forEach((key, val) =>
        console.log("key : ", key, ": ", typeof key),
    );

    const userMap = new Map();
    userMap.set("name", "Hammad");
    userMap.set(1, "id");
    userMap.set(true, "login");

    console.log(userMap);
    userMap.forEach((val, key) =>
        console.log("key : ", key, ": ", typeof key)
    )
};

symbols();
