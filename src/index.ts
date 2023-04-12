// class, private,public & protected, Getters(get) & setters

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

    protected _courseCount = 1

    readonly city: string = "Bengaluru"
    constructor(
        public email: string,
        public name: string,
        //  private userID: string
    ) {
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    // using Getters (get)

    getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // using Setters (set)

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

}

class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const manu = new User("manu@gmail.com", "manu")
// manu.city = "Bengaluru" // gives error as it is readonly

// manu.deleteToken() gives error as it is private property


export {}
