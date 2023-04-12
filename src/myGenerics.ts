// Generics in typescript

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

// identityThree(true)

function identityFour<M>(val: M): M {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

// identityFour<Bottle>({}) // gives error

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T,>(products: T[]): T => {  // <T,> comma after T is a generic syntax
    // do some database operations
    const myIndex = 4
    return products[myIndex];
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, "4")

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T) {
        this.cart.push(products)
    }
}

export {}
