let newUser = {
    _USERS: [],
    form: document.querySelector('#userForm'),
    userContainer: document.querySelector('#userContainer'),
    inputs: {
        userName: document.querySelector("#name"),
        userRole: document.querySelector("#role"),
        userImg: document.querySelector("#image"),
    },
    init: function () {
        this.form.addEventListener("submit", this.addUser.bind(this))
    },
    addUser: function (e) {
        e.preventDefault();
        this._USERS.push({
            _username: this.inputs.userName.value,
            _userrole: this.inputs.userRole.value,
            _userimg: this.inputs.userImg.value,
        })
        this.form.reset()
        this.printUser()

    },
    printUser: function (e) {
        this.userContainer.innerHTML = ""
        this._USERS.forEach(element => {
            const usersDiv = document.createElement("div");
            this.userContainer.appendChild(usersDiv);
            usersDiv.classList.add("users");
            const imageDiv = document.createElement("img");
            usersDiv.appendChild(imageDiv);
            imageDiv.id = "userIMG";
            const usernameDiv = document.createElement("div");
            usersDiv.appendChild(usernameDiv);
            usernameDiv.id = "userName";
            const roleDiv = document.createElement("div");
            usersDiv.appendChild(roleDiv);
            roleDiv.id = "userRole"
            imageDiv.setAttribute("src", element._userimg)
            imageDiv.setAttribute("alt", "User avatar")
            usernameDiv.textContent = element._username
            roleDiv.textContent = element._userrole
        });

    },

}
newUser.init()