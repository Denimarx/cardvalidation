const validator = {

  isValid: function (cardnumber) {  
    let CCNumber = cardnumber.split('');  
    let numreverse = CCNumber.reverse();
    let numpares = 0;
    let numimpar = 0;

    for ( let i = 1; i<CCNumber.length; i=i+2) {
      console.log(i)

      let parpordos = numreverse[i]*2;
      
         if (parpordos >= 10) {
           numpares = numpares + parpordos-9
          } else {
            numpares = numpares + parpordos
          }
          console.log(numpares)
        }
    for (let i=0; i<numreverse.length; i=i+2) {
        numimpar += parseInt(numreverse[i])
    }
    let ifItsValid = (numimpar + numpares)%10
    if (ifItsValid ===0) {
      return true
    } else {
      return false
    }
  },
  maskify:  (cardnumber) => {
    let num = cardnumber.split('')
    let string = ''
    const primeros = (cardnumber.length) - 4;
  for( let i=0; i<cardnumber.length; i++) {
   
    if (i < primeros) {
      string  += '#'
    } else {
      string = string + num[i]
    }
  }
  return string

}
}



/*
maskify: function(cardnumber) {
  return cardnumber.split('').map((letra,i) => i<cardnumber.length - 4 ? '#':letra).join('');
}
};


*/

export default validator;





/*
1.capturar el cardnumber ingresado ( signo michi para los primeros numeros menos los 4 ultimos)
--no acepta espacios ni letras
-- debe ingresar nombre, numero de tarjeta  (cvv y vto)
2.invertir los digitos
3.posiciones pares multiplicarlos por 2
4. las sumas >10 restarle 9 ( o sumar ambos digitos)
5. sumar los numeros de posiciones impares y pares (resultado de restarle 9)
6. suma %10 ===0 tarjeta es valida, sino es INVALIDA
*/
