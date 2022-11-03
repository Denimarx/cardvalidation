import validator from './validator.js';

  const cardnumber = document.getElementById('cardnumber');
  const btninput = document.getElementById("btn-validate");
  const modalcontainer = document.getElementById('modal-container');
  const respuesta = document.getElementById("parrafo");
  const close = document.getElementById('close');
  const limpiar = document.getElementById('limpiar');
  const inputall = document.getElementById('inputall');

  btninput.addEventListener('click', () => {
    modalcontainer.classList.add('show');
  });


  btninput.addEventListener('click', () => {
    const isValid2= validator.isValid(cardnumber.value);
    const maskify= validator.maskify(cardnumber.value);
      console.log(isValid2)
      if (isValid2 === true) {
       respuesta.innerHTML = `La tarjeta  ${maskify}   es Válida`;
    } else {
      respuesta.innerHTML = `La tarjeta  ${maskify}   es Inválida`;
    }  
  });


    close.addEventListener('click', () => {
      inputall.reset();
      modalcontainer.classList.remove('show');
    });

    limpiar.addEventListener('click', () => {
      inputall.reset();
    });

    
