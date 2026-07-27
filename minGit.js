// a simple Commit class would have and id to reference it and a change containing the snapshot of change made.
function Commit(id, parent, message) {
    this.id = id
    this.parent = parent
    this.message = message
}
// lets make a new class for a branch. A branch, as we saw, has a name and a reference to some commit
function Branch(name, commit) {
    this.name = name;
    this.commit = commit
}

// simple class called Git which will basically represent a repo.
function Git(name) {
    this.name = name;
    this.lastCommitId = -1
    this.HEAD = null;
    this.branches = []
    var master = new Branch('master', null) // null is passed as we don't have any commit yet.
    this.branches.push(master)
    this.HEAD = master  // reference the current branch (master when repo is created)
}

// Lets add the ability on our Git class to create a commit or commit (verb)
Git.prototype.commit = function (message) {
    var commit = new Commit(++this.lastCommitId, this.HEAD.commit, message)
    this.HEAD.commit = commit
    return commit;
}
Git.prototype.log = function () {
    var commit = this.HEAD.commit
    var history = []
    while (commit) {
        history.push(commit)
        commit = commit.parent
    }
    return history
}
Git.prototype.checkout = function (branchName) {
    // Loop through all branches and see if we have a branch
    // called `branchName`.
    for (let i = this.branches.length; i--;) {
        if (this.branches[i].name === branchName) {
            console.log("Swithed to exsisting branch " + branchName)
            this.HEAD = this.branches[i];
            return this;
        }
    }

    var newBranch = new Branch(branchName, this.HEAD.commit);
    this.branches.push(newBranch)
    this.HEAD = newBranch;
    return this;
}

// ----------TEST------------------------

var repo = new Git("myrepo");

repo.commit("first commit");
repo.commit("second commit");
console.log(repo.log()); // 2 commits, master

repo.checkout("feature");
repo.commit("feature commit");
console.log(repo.log()); // 3 commits, feature branch

repo.checkout("master");
console.log(repo.log()); // wapas 2 commits — master untouched