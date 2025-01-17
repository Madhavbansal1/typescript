// function getValue(myval : number): boolean{
//     if(myval > 10){
//         return true;    
//     }
//     return "200";
// }

// we will also return two type of data from a function in ts
// how to do that? discuss it later

const getHello = (s: string): string => {
    return s + " Hello";
}

const hero = ["thor", "ironman", "captain america"];
hero.map((h): string => {
    return h;
})

function e(msg: string): void{
    // void means it will not return anything
    console.log(msg)
}
function handleError(msg: string): never {
    // never means it will not return anything and it will not return any type of value
    // use for throw new Error
    throw new Error(msg);
}
export { }


