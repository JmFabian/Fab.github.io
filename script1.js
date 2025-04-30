let varGlobal1="texto de varriable global"

function FCambioColor() {
    let vTexto1 =document.getElementById("EjmDOM1");
vTexto1.textContent="texto cambiado con la funcion Fcambiocolor()";
vTexto1.style.color="yellow"; //tambien puedes ponerle background color//
vTexto1.insertAdjacentHTML("afterend","el texto se repite xd");
vTexto1.insertAdjacentHTML("beforeend",varGlobal1)
console.log("texto por consola")



}

function FCambioClase1() {

        let vTexto2=document.getElementsByClassName("classDOM1");
        vTexto2[1].innerHTML="Elemento[1] del arreglo de clase classDOM1";
        console.log("tamaño del array=",vTexto2.length);
    

}

function FCambiodeTag1() {

    let vTexto3=document.getElementsByTagName("h2");
    vTexto3[1].innerHTML="Elemento h2 cambiado por TagDOM1 no me da creo xd";
    vTexto3[1].style.color="red";

}





