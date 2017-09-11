import {User} from './user';

export class UserList {
    users: User[];

    constructor() {
        this.users = [];
    }
    
    add(u: User) {
        //this.users.push(u);
    }

    del(name: string) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].name == name) {
                this.users.splice(i, 1);
            }
        }
    }

    auth(name: string, password: string): User {
        for (let u of this.users) {
            if (u.name == name && u.password == password) {
                return u;
            }
        }
        return null;
    }
}

