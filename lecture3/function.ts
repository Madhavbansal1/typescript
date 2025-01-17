function addTwo(num: number){
    return num + 2; 
}

console.log(addTwo(2)); // 4

function getUpper(val: string){
    return val.toUpperCase();
}

console.log(getUpper("hello")); // HELLO

function signUpUser(name: string, email: string, passwrod: number){
    // some code to sign up user
    console.log("User signed up successfully");

}

signUpUser("John", "john@gmail.com", 123456); // User signed up successfully


// arrow function

let loginUser = (email: string,passwrod: number, ispaid: boolean = false) =>{
    // some code to login user
    console.log("User logged in successfully");
}

loginUser("m@gmail.com", 123456); // User logged in successfully




// how to control the return type of a function ;;
function addTwo2(num: number){
    //return num + 2; 
    return "Hello";
}

// upper function have a problem that it return string instead of number


function addTwo3(num: number): number{
    return num + 2; 
    // return "Hello";
}
// aboove is the silution for that problem that it return string instead of number