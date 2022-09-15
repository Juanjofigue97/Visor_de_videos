var today = new Date();
var now = today.toLocaleDateString('en-US');
var horasNow = today.getHours();
var segundosNow = today.getMinutes();

// if (segundosNow<10){
//     segundosNow += '0';
// }

var fecha = `${now} ${horasNow}:${segundosNow}`;
// console.log(fecha);

const nombre_Usuario = async () =>{
    const { value: nombre } = await Swal.fire({
      title: 'Escribe tu Nombre Completo',
      input: 'text',
      inputPlaceholder: 'ej: Maria Andrea Portilla Castillo ',
      inputValidator: (value) => {
        return new Promise((resolve) => {
          // console.log(value.length);
          if (value.length !== 0) {
            resolve()
          } else {
            resolve('Tienes que colocar un nombre valido')
          }
        })
      }
    })
    if (nombre){
      const { value: Agencia } = await Swal.fire({
        title: 'Selecciona tu agencia',
        input: 'select',
        inputOptions: {
          'Administración Central':'Administración Central',
          'Nariño': 'Nariño',
          'Cauca': 'Cauca',
          'Putumayo': 'Putumayo',
          'Valle del Cauca': 'Valle del Cauca'
        },
        inputPlaceholder: 'Selecciona tu Agencia',
      })
      if (nombre && Agencia) {
        var str= "Nombre : " + nombre + "\n" +
        "Agencia : " + Agencia;
        localStorage.Usuario = nombre;
        localStorage.Agencia = Agencia;
        adddGS();
        // Swal.fire(`You selected: ${nombre} \n ${Agencia}`);
        Swal.fire({
          title:'Tus datos',
          icon: 'success',
          html: '<pre>' + str + '</pre>',
          customClass: {
            popup: 'format-pre'
          }
        })
      }
}};

function mostrar(){
    nombre_Usuario()
    .then(name =>{
        if(name == '123'){
            swal({
                text:'Escribe un nombre valido porfavor \ntu nombre completo: ',
            })
            nombre_Usuario();
        }
        // console.log(typeof(name));
        localStorage.Usuario = name;
        swal({
            text: `Que agencia de Cofinal perteneces`,
            content: "input",
        })
        .then(agencia =>{
            localStorage.Agencia = agencia;
            swal("Datos","Nombre del usuatio: " + name + "\nAgencia: " + agencia, "success");
            // adddGS();
        })
    })
}


document.body.onload = function() {
  // console.log(localStorage.Usuario);
  
  if(localStorage.Usuario == null){
    nombre_Usuario();
  }
  adddGS();
}

function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbyP3Xu4-PeAAZebALYT9Do3V4nFC8chxzcw3yBOm6cx9Kw5k_A/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

function adddGS(){

    const url = "https://script.google.com/macros/s/AKfycbyP3Xu4-PeAAZebALYT9Do3V4nFC8chxzcw3yBOm6cx9Kw5k_A/exec";

    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({IP:localStorage.Usuario,Video:sessionStorage.title1,Fecha:fecha,Agencia:localStorage.Agencia}) // body data type must match "Content-Type" header
    });
}



// document.getElementById("volumen").addEventListener("click",adddGS);

// document.getElementById("btn").addEventListener("click",testGS);
