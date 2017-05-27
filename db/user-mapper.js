class UserMapper {

    constructor() {
        this.db = require('diskdb');
        this.connect = this.db.connect(__dirname + '/data', ['users', 'current_user']);
    }

    getUser(username) {
        return this.db.users.findOne({username: username});
    }
}

module.exports = new UserMapper();
