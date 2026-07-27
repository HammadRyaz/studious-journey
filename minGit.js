
// simple class called Git which will basically represent a repo.
function Git(name) {
    this.name = name;
}

// a simple Commit class would have and id to reference it and a change containing the snapshot of change made.
function Commit(id, message) {
    this.id = id
    this.message = message
}
