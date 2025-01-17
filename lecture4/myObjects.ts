const user = {
    name: 'John',
    age: 30,
    isActive: true
}

function createUser({name: string, age: number, isActive: boolean}){

}

createUser(user);

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399};
}


// let discuss a werid behaviour 
const obj1 = {name: "john", age: 30, isActive: true, address: "new york"}
//createUser({name: "john", age: 30, isActive: true, address: "new york"});
createUser(obj1);
// line 20 will give an error because we are passing an extra property in the object
// but line 21 will not give an error because we are passing the object directly
// so how to solve this issue?
// we can use the spread operator to solve this issue
function createUser2({name: string, age: number, isActive: boolean, ...rest}){

}
// now we can pass any number of properties in the object


export {}