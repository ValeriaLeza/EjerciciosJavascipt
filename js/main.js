let btnV = document.getElementById("btnValidar");

btnV.addEventListener("click",function(e){
    e.preventDefault();
    let campo1= parseInt(document.getElementById("n1").value);
    let res = document.getElementById("alertResultado");

    console.log(campo1);

    let num =campo1 / 3;
    if ((Number.isInteger(num))) {
        res.innerHTML = campo1 + " es multiplo de 3";
    } else {
        res.innerHTML = campo1 + " no es multiplo de 3";
    }

    if (campo1>100 && campo1<200){
        document.getElementById("n1").style.borderColor = "#00FF00";
    } else {
        document.getElementById("n1").style.borderColor = "#ed3b3b";
        res.innerHTML = "El valor esta fuera del rango";
    }

});