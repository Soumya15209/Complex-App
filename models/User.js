var User = function(data) {
    this.data = data;
    this.errors = [];
}

User.prototype.validate = function() {
    if (this.data.username == "") { this.errors.push("Username must not be empty") }
    if (this.data.email == "") { this.errors.push("Please enter a vaild mail id") }
    if (this.data.password == "") { this.errors.push("Password must not be empty") }
}

User.prototype.register = function() {

    this.validate()
}

module.exports = User