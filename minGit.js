// a simple Commit class would have and id to reference it and a change containing the snapshot of change made.
function Commit(id, parent, message) {
    this.id = id
    this.parent = parent
    this.message = message
}

// simple class called Git which will basically represent a repo.
function Git(name) {
    this.name = name;
    this.lastCommitId = -1
    this.HEAD = null;
}

// Lets add the ability on our Git class to create a commit or commit (verb)
Git.prototype.commit = function (message) {
    var commit = new Commit(++this.lastCommitId, message)
    this.HEAD = commit
    return commit;
}
Git.prototype.log = function () {
    var commit = this.HEAD
    var history = []
    while (commit) {
        history.push(commit)
        commit = commit.parent
    }
    return history
}