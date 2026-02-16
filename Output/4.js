var a = 20;
function func1() {
    console.log(a)// undefined due to hoisting
    var a = "this is func1";
    console.log(a)// this is func1
}


function func2() {
    console.log("fun2", a)// error due to let
    let a = "This is func2"
}


func1()
func2()



