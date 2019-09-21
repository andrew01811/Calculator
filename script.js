var screen = document.getElementById("screen");
var results = document.getElementById("results");
const zero = document.getElementById("n0")
const one = document.getElementById("n1")
const two = document.getElementById("n2")
const three = document.getElementById("n3")
const four = document.getElementById("n4")
const five = document.getElementById("n5")
const six = document.getElementById("n6")
const seven = document.getElementById("n7")
const eigth = document.getElementById("n8")
const nine = document.getElementById("n9")
const dot = document.getElementById("dot")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const x = document.getElementById("x")
const div = document.getElementById("div")
const equal = document.getElementById("equal")
const del = document.getElementById("del")
const ac = document.getElementById("ac")

zero.addEventListener("click", look);
one.addEventListener("click", look);
two.addEventListener("click", look);
three.addEventListener("click", look);
four.addEventListener("click", look);
five.addEventListener("click", look);
six.addEventListener("click", look);
seven.addEventListener("click", look);
eigth.addEventListener("click", look);
nine.addEventListener("click", look);
dot.addEventListener("click", look);
minus.addEventListener("click", look);
plus.addEventListener("click", look);
x.addEventListener("click", look);
div.addEventListener("click", look);
equal.addEventListener("click", look);
del.addEventListener("click", look);
ac.addEventListener("click", look);


function write(something) {
    screen.insertAdjacentHTML("beforeend", something);
}

function look(e) {
    switch (e.toElement.id) {
        case "n0":
            write("0")
            break;
        case "n1":
            write("1")
            break;
        case "n2":
            write("2")
            break;
        case "n3":
            write("3")
            break;
        case "n4":
            write("4")
            break;
        case "n5":
            write("5")
            break;
        case "n6":
            write("6")
            break;
        case "n7":
            write("7")
            break;
        case "n8":
            write("8")
            break;
        case "n9":
            write("9")
            break;
        case "dot":
            write(".")
            break;
        case "minus":
            write("-")
            break;
        case "plus":
            write("+")
            break;
        case "x":
            write("*")
            break;
        case "div":
            write("/")
            break;
        case "equal":
            equals(screen.innerHTML)
            break;
        case "ac":
            nothing()
            break;
        case "del":
            elim()
            break;
    }
    /* console.log(e.toElement.id) */
} 

function equals(num) {
    if (screen.innerHTML === "") {
        nothing()
    }
    /* console.log(eval(num)) */
    else {
    var result = eval(num);
    var date = new Date();
    var month = date.getMonth() + 1
    var minutes = date.getMinutes()
    if (minutes === 0|| minutes === 1 || minutes === 2 || minutes === 3 || minutes === 4 || minutes === 5 || minutes === 6 || minutes === 7 || minutes === 8 || minutes === 9) {
        minutes = "0" + new Date().getMinutes()
    }
    screen.innerHTML = result
    results.insertAdjacentHTML(
        "beforeend", "<div class= results-js>" + 
        "<b>Result:</b>" + " " + result + "<br>" + 
        "<b>Date:</b> " + date.getHours() + ":" + minutes + "-" + date.getDate() + "/" + month + "/" + date.getFullYear() + "</div>")
    }
} 

function nothing() {
    screen.innerHTML = "";
}

function elim() {
    var n = String(screen.innerHTML).length - 1
    var quit = screen.innerHTML.slice(0, n)
    /* console.log(n) */
    screen.innerHTML = quit
}

/* const data = [];
data.push({
     "user": 
    "result": result,
    "date": new Date()
})
var n = data.length - 1  */
