function DisplayNumbers() {
    var str = "";
    for (var x = 1; x <= 10; x++) {
        str += x + "\n";

    }
    alert(str);
}
function CheckForPrime() {
    var num = parseInt(document.getElementById("txtNo").value);
    var flag = 0;
    for (var x = 2; x <= num / 2; x++) {
        if (num % x == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        alert("Its not prime");
    }
    else {
        alert("Its prime");
    }

}
function DisplayHello() {
    alert("This is a message from head section");
}
function AddNumbers() {
    var num1 = parseInt(document.getElementById("txtNo1").value);
    var num2 = parseInt(document.getElementById("txtNo2").value);
    document.getElementById("txtResult").value =
        num1 + num2;

}
function SubtractNumbers() {
    var num1 = parseInt(document.getElementById("txtNo1").value);
    var num2 = parseInt(document.getElementById("txtNo2").value);
    document.getElementById("txtResult").value =
        num1 - num2;

}
//function one() {
//    {
//        const x = 10;
//        console.log(x);

//    x = 100;
//    console.log(x);
//}
function ConvertToUpper() {
    alert(txtName.value.toUpperCase());
}
