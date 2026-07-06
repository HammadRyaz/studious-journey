
export const classes = () => {

    class Person {
        constructor(username, role) {
            this.username = username;
            this.role = role;
        }

    }
    Person.prototype.getDetail = function () {
        return {
            name: this.username,
            role: this.role
        }
    }

    const u1 = new Person("Hammad", "user")
    console.log(u1.getDetail())
    class Admin extends Person {
        constructor(username, role, auth) {
            super(username, role);
            this.auth = ['delete', 'edit', 'create', 'create-user', 'change-role']
        }
        getDetail() {
            const personGetDetail = super.getDetail()
            return {
                name: this.username,
                role: this.role,
                auth: ['delete', 'edit', 'create', 'create-user', 'change-role']
            }
        }
    }

    const a1 = new Admin("Hamster", "admin");
    console.log(a1.getDetail())
}
classes()