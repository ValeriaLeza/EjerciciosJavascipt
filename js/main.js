let btnV = document.getElementById("btnValidar");

btnV.addEventListener("click",function(e){
    e.preventDefault();
    let campo1= parseInt(document.getElementById("n1").value);
    let campo2= parseInt(document.getElementById("n2").value);
    let campo3= parseInt(document.getElementById("n3").value);
    let res = document.getElementById("alertResultado");

    if (campo1==campo2+campo3) {
        res.innerHTML = campo1 + " es la suma de: " + campo2 + " y "+ campo3;      
    }
    else if(campo2==campo1+campo3) {
        res.innerHTML = campo2 + " es la suma de: " + campo1 + " y "+ campo3;
        
    }
    else if (campo3==campo1+campo2) {
        res.innerHTML = campo3 + " es la suma de: " + campo1 + " y "+ campo2;
        
    }else {
        res.innerHTML = "Nungun numero es resultado de la suma de los otros dos."
    }
    
});