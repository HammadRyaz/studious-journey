
export const classes = () => {

    // class Person {
    //     constructor(username, role) {
    //         this.username = username;
    //         this.role = role;
    //     }

    // }
    // Person.prototype.getDetail = function () {
    //     return {
    //         name: this.username,
    //         role: this.role
    //     }
    // }


    // class Admin extends Person {
    //     constructor(username, role, auth) {
    //         super(username, role);
    //         this.auth = ['delete', 'edit', 'create', 'create-user', 'change-role']
    //     }
    // }
    // Admin.prototype.getDetail = function () {
    //     const personGetDetail = Person.prototype.getDetail.call(this)
    //     return {
    //         ...personGetDetail,
    //         auth: ['delete', 'edit', 'create', 'create-user', 'change-role']
    //     }
    // }


    // const u1 = new Person("Hammad", "user")
    // console.log(u1)
    // const a1 = new Admin("Hamster", "admin");

    // console.log(a1)

    // Private ----------------------
    class Holiday {
        #destination = "lahore"
        constructor(destination, price) {
            this.#destination = destination
            this.price = price
        }
        get destination() {
            return this.#destination
        }
        set destination(newDestination) {
            if (newDestination != "")
                return this.#destination = newDestination
            else
                throw new Error("destination not valid")
        }
    }

    const safari = new Holiday('Kenya', 1000)
    safari.destination = "lahore"
    console.log(safari.destination)
}
classes()