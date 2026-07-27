// a simple Commit class would have and id to reference it and a change containing the snapshot of change made.
function Commit(id, message) {
    this.id = id
    this.message = message
}



// simple class called Git which will basically represent a repo.
function Git(name) {
    this.name = name;
    this.lastCommitId = -1
}


// Lets add the ability on our Git class to create a commit or commit (verb)
Git.prototype.commit = function (message) {
    var commit = new Commit(++this.lastCommitId, message)
    return commit;
}

var repo = new Git("my-repo")
console.log(repo.commit("Check Commits Works or Not"))
console.log(repo)