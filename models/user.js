let users = [];
let nextId = 1;

class User {
    constructor(name, email) {
        this.id = nextId++;
        this.name = name;
        this.email = email;
    }

    static findAll() {
        return users;
    }

    static findById(id) {
        return users.find(user => user.id == id);
    }

    static create(userData) {
        const newUser = new User(userData.name, userData.email);
        users.push(newUser);
        return newUser;
    }

    static update(id, updateData) {
        const userIndex = users.findIndex(u => u.id == id);
        if (userIndex !== -1) {
            users[userIndex].name = updateData.name || users[userIndex].name;
            users[userIndex].email = updateData.email || users[userIndex].email;
            return users[userIndex];
        }
        return null;
    }

    static delete(id) {
        const initialLength = users.length;
        users = users.filter(u => u.id != id);
        return users.length < initialLength;
    }
}

module.exports = User;