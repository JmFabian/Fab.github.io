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

function FcrearH1(){
    var elemento =document.getElementById("idCrearH1");
    var nuevoH1 =document.createElement("H1");
    var texto = document.createTextNode("tenga un excelente dia");
    nuevoH1.appendChild(texto);
    elemento.appendChild(nuevoH1);
  
  }

function FUsoFor1(){
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal=vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
  const miBoton = document.getElementById('miBoton'); // Reemplaza 'miBoton' con el ID de tu botón

    console.log("¡La función del botón se ejecutó!");
    // Aquí va el código de tu función
  
    // Deshabilitar el botón después de la primera ejecución
    miBoton.disabled = true;
    miBoton.hidden = true;
    miBoton.textContent = 'Ya se ejecutó'; // Opcional: cambiar el texto del botón


}  // fin de function

function FEliminarConcat()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  let rpta =prompt("Estas seguro de eliminar el texto concatenado?(S/N)",'');
  if (rpta=="S" || rpta=="s")  //  doble || significa o
    { let rpta =prompt("ingrese el numero de fila que quiere eliminar",'');
       vTextoClass[rpta].remove();  // eliminar la class de posicion [3]
      alert("CONCATENCION ELMINADA");
    }  
  else
    { if(rpta=="N" || rpta=="n")
      { alert("NO SE elimnará");
      }
      else
      { alert("OPCION INCORRECTA-INgresa nuevamente");
      }
    }
  //removeChild funciona cuando un nodo(class, id, etx) esta dentro de otro
}
function Fcapturarnombre(){

    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
    const vTexto3 = document.getElementById("CLAVE");


vTexto1.style.color="red";

var valor1 =vTexto1.value;// value obtine el contenido de la caja de texto nombre
var valor2 =""; //tipo string
vTexto3.value=valor1;// asigna el nombre a la clave
document.getElementById("observacion").value = valor1;//textarea ya captura el nombre

  //foreach recorre todo el contenido del array de la clase datosPersonales
  vTexto2.forEach(input => {
 valor2 =valor2 +  `${input.name} : ${input.id}: ${input.value}       \n`;// alt+96 
 input.style.border="2px solid orange";
  //para comillas tipotexto permiten colocar variables del form y convertirlas a texto mediante $
  });
vTexto2[1].style.border="2px solid green";

document.getElementById('observacion').value = valor2;
document.getElementById('observacion').style.color="blue";
console.log('El valor del nombre es:', valor1);




}

function FValidarCiclo(){

const varciclo =document.getElementsByName("ciclo");

for (let i = 0; i < varciclo.length; i++) {
  if (varciclo[i].checked==true){
document.getElementById('observacion').value = varciclo[i].value;
return;

  }
  
}


}

function FcreardatosCiclo(){

const radios = document.querySelectorAll('input[name="ciclo"]');
radios.forEach(function(radio){
  radio.addEventListener('change',function(event){
    console.log("ciclo seleccionado:", event.target.value);
    const cantidad = event.target.value;

    document.getElementById('observacion').value = cantidad;
  });



  
}
);



}

function Fcasillas(){

  const cursos = document.querySelectorAll('input[name="cursos"]');
  cursos.forEach(function(checkbox){
    checkbox.addEventListener('change',function(event){
      console.log("curso seleccionado:", event.target.value);
      const cantidad = event.target.value;
  
      document.getElementById('observacion').value = cantidad;
    });
  
  
  
    
  }
  );
  
  
  
  }
  
///////////hola//////


document.addEventListener("DOMContentLoaded",()=>{
const radios = document.querySelectorAll('input[name="ciclo"]');
radios.forEach(function(radio){
  radio.addEventListener('change',function(event){
    console.log("ciclo seleccionado:", event.target.value);
    const cantidad = event.target.value;

    document.getElementById('observacion').value = cantidad;
  });


}
);
  
  });

/////////a//////
  document.addEventListener("DOMContentLoaded", () => {
    const numCole = document.getElementById("numColegios");
    document.getElementById("numColegios").addEventListener("input",(event)=> {
      let content ="";
      const cantR=event.target.value;
      const vTexto1 = document.getElementById("EjmDOM1"); //para validar el valor
      vTexto1.innerText= cantR;   
      document.getElementById('observacion').value = cantR; //para validar el valor
      for(let i=0; i<cantR ;i++)
      {
        content=content + `<div> <label> Colegio ${i+1} </label>
                            <input type="text" id="cole[${i}]" > </div>`;
      }
    document.getElementById("DetalleColegios").innerHTML=content;
    
    });
    });


function Fverificacion(){

  let nombre1 =prompt("ingrese su nombre",'');
  let nombre2 =prompt("ingrese su nombre",'');
  let apellido1 =prompt("ingrese su apellido",'');
  let apellido2 =prompt("ingrese su apellido",'');

  let longitud1 = nombre1.length;
  let longitud2 = nombre2.length;
  let longitudapellido1 = apellido1.length;
  let longitudapellido2 = apellido2.length;

  let textoconcat="";

if( longitud1<longitud2 )
  {alert("el primer nombre:"+nombre1+"es menor al segundo nombre:"+nombre2);
    textoconcat=nombre2+nombre1;
  }
else
{   if(longitud1>longitud2)
    {
      alert("el primer nombre:"+nombre1+"es mayor al segundo nombre:"+nombre2);
      textoconcat=nombre1+nombre2;

    }
      else
      {
        alert("el primer nombre:"+nombre1+"es IGUAL en longitud al segundo nombre:"+nombre2);
        textoconcat=nombre1+nombre2;// da lo mismo en concatenacion

      }
}
alert("nombres concatenados:"+textoconcat);


if( longitudapellido1<longitudapellido2 )
  {alert("el primer apellido:"+apellido1+"es menor al segundo apellido:"+ apellido2);
    textoconcat=apellido2+apellido1;
  }
else
{   if(longitudapellido1>longitudapellido2)
    {
      alert("el primer apellido:"+apellido1+"es mayor al segundo apellido:"+apellido2);
      textoconcat=apellido1+apellido2;

    }
      else
      {
        alert("el primer apellido:"+apellido+"es IGUAL en longitud al segundo apellido:"+apellido2);
        textoconcat=apellido1+apellido2;// da lo mismo en concatenacion

      }
}
alert("apellidos concatenados:"+textoconcat);


}

  
  