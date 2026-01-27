// json.stringify tab use hota h jab local storage may pass set karwani ho 
// kiun kay localstorage string ko smjhta h.

// or jab value get karni ho to json.parse use karte hn array of object may convert karwa kar 
// stringify(covert object to json string)
// parse(convert string to object(must be valid json))
let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to set");
localStorage.setItem(key ,value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if(key === "red" || key === "blue" ){
    localStorage.removeItem(key)
}

if (key == 0){
    localStorage.clear()
}

