var output = (num) => {
    document.getElementById("result").value+=num;
}
var result = () => {
    let a = document.getElementById("result").value;
    if(a.match(/[a-z$#@&^!]/))
    {
        var error="Error! Enter numbers only."
        document.getElementById("error").innerHTML=error;
    }
    else{
        let b = eval(a)
        document.getElementById("value").innerHTML = a;
        document.getElementById("result").value = b;
        document.getElementById("error").innerHTML="";
    }
}
var clr = () => {
    document.getElementById("result").value = "";
    document.getElementById("error").innerHTML="";
    document.getElementById("value").innerHTML = "";
}