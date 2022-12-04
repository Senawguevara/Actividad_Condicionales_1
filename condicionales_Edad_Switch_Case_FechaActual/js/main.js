addEventListener(`DOMContentLoaded`, (e)=>{

  let edad = prompt('Digite tu Edad');

  switch (edad) {
    case '18':
        alert('Es mayor de Edad')
                break;
  
    default:
        alert('La edad ingresada no cumple con los parametros')
        break;
  }


})