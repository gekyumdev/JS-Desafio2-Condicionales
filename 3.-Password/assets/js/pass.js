function verificacion(){
    num1=document.getElementById('num1').value
    num2=document.getElementById('num2').value
    num3=document.getElementById('num3').value

    pass=num1+num2+num3

    check=document.getElementById('check')

    if (password === "911") {
        check.textContent = "Password 1 es correcto";
        check.style.color = "green";
    } else if (password === "714") {
        check.textContent = "Password 2 es correcto";
        check.style.color = "green";
    } else {
        check.textContent = "Password incorrecto";
        check.style.color = "red";
    }
}