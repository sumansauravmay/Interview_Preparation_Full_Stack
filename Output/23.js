
const user = {
    name: 'Aman Bhoria!',
    logMessage() {
        console.log(this.name); // What is logged? 
    }
};
setTimeout(user.logMessage, 1000);
// Output: Undefined(We've passed the reference in setTimeout not the actual function so as a result it doesn't have the user's context while executing. To get the name we've to pass a callback like: setTimeout(() => user.logMessage(), 1000);)


setTimeout(() => user.logMessage(), 1000)
//output: Aman Bhoria!