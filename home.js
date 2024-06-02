console.log('Home page loaded!')

function test(){
    // alert("this is your first alert!");
    const errorEle = document.getElementById("error");
    console.log(errorEle)
    errorEle.style.display = "block";
}

function hide() {
    const errorEle = document.getElementById("error");
    errorEle.style.display = "none";
}

function promptFunc(){
    let detail = prompt("please enter your first name","Sourav");
    document.getElementById("msg").innerHTML="your first name is "+ detail;
}