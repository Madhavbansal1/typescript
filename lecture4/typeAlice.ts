
// how to define typealice in typescript
type user ={
    name: string,
    age: number,
    isActive: boolean
}

function createUser({name, age, isActive}: user): user{
    return {name, age, isActive}; 
}


// ready only , ? & use case scenario

type user2 ={
    readonly _id: number
    name: string,
    email: string,
    isActive: boolean,
    creaditcard?: number // ? means optional
}

let myuser:user2 = {
    _id: 1,
    name: "madhav",
    email: "madhav@gmail.com",
    isActive: true
}

myuser.name = "john";
//myuser._id = 3;  this will give an error because _id is readonly


type cardnumber = {
    cardNumber: number
}
type carddate = {
    carddate: string
}

type cardDetails = cardnumber & carddate & {
    cvv: number
}  // combine both in a single type using &