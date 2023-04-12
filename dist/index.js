"use strict";
// class, private,public & protected, Getters(get) & setters
Object.defineProperty(exports, "__esModule", { value: true });
// class User {
//   public  email: string
//    private name: string
//     readonly city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Bengaluru";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    // using Getters (get)
    getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // using Setters (set)
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const manu = new User("manu@gmail.com", "manu");
