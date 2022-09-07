let btnV = document.getElementById("btnValidar");

//let mayor=();




// if (campo1 > campo2 ) {
//     mayor=campo1;
// } else (campo2 > campo3 ) {
//     mayor=campo2;
// };
// console.log(mayor);

btnV.addEventListener("click",function(e){
    e.preventDefault();
    let campo1= parseInt(document.getElementById("n1").value);
    let campo2= parseInt(document.getElementById("n2").value);
    let campo3= parseInt(document.getElementById("n3").value);
    let res = document.getElementById("alertResultado");

    console.log(campo1);
    console.log(campo2);
    console.log(campo3);

    if (campo1>100 || campo1==0){
        document.getElementById("n1").style.borderColor = "#ed3b3b";
    } else {
        document.getElementById("n1").style.borderColor = "#00FF00";
    }
    if (campo2>100 || campo2==0){
        document.getElementById("n2").style.borderColor = "#ed3b3b";
    } else {
        document.getElementById("n2").style.borderColor = "#00FF00";
    }
    if (campo3>100 || campo3==0){
        document.getElementById("n3").style.borderColor = "#ed3b3b";
    } else {
        document.getElementById("n3").style.borderColor = "#00FF00";
    }

    if (campo1>campo2) {
        mayor=campo1
    } else {
        mayor=campo2
    }
    if (campo3>mayor) {
        mayor=campo3
    }

if (mayor>100) {
    res.innerHTML = "Los numeros no estan dentro del rango";
} else{
    res.innerHTML = mayor;
}
    
});
