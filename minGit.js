
// simple class called Git which will basically represent a repo.
function Git(name) {
    this.name = name;
}

// a simple Commit class would have and id to reference it and a change containing the snapshot of change made.
function Commit(id, message) {
    this.id = id
    this.message = message
}

// Lets add the ability on our Git class to create a commit or commit (verb)
Git.prototype.commit = function (message) {
    var commit = new Commit()
    return commit;
}
