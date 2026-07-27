
function Commit(id, parent, message) {
    this.id = id;
    this.parent = parent
    this.message = message
}

function Branch(name, commit) {
    this.name = name
    this.commit = commit
}

function Git(name) {
    this.name = name;
    this.lastCommitId = -1
    this.HEAD = null

    this.branches = []
    var master = new Branch('master', null)
    this.branches.push(master)
    this.HEAD = master
}

Git.prototype.commit = function (message) {
    var commit = new Commit(++this.lastCommitId, this.HEAD.commit, message)
    this.HEAD.commit = commit
    return commit
}

Git.prototype.log = function () {
    var commit = this.HEAD.commit;
    var history = [];
    while (commit) {
        history.push(commit);
        commit = commit.parent;
    }
    return history;
}

Git.prototype.checkout = function (newBranch) {

    for (var i = this.branches.length; i--;) {
        if (this.branches[i].name === newBranch) {
            console.log("Switch to exsisting branch " + newBranch)
            this.HEAD = this.branches[i]
            return this
        }
    }

    var branch = new Branch(newBranch, null)
    this.branches.push(branch)
    this.HEAD = branch
    return this;
}




// ----------TEST------------------------
var git = new Git("my-repo")
git.commit("First Commit")
git.commit("second Commit")
git.commit("third Commit")

git.checkout('test-branch');
git.commit("First commit of Test Branch")

git.checkout("master")



console.log(git.log())