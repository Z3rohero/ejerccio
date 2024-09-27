


 // Función para calcular el factorial de un número
const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

// Función para calcular la permutación
const permutacion = (n, r) => {
    if (r > n) {
        return "R no puede ser mayor que n";
    }
    return factorial(n) / factorial(n - r);
};


//Atrapa los valores y llama la funcion permutacion y lo ultimo alert
const calculePermutacion = () => {
    const value_number_1 = parseInt(document.getElementById('number_1').value);
    const value_number_2 = parseInt(document.getElementById('number_2').value);    
    const resultado = permutacion(value_number_1,value_number_2);
    alertSwal(resultado);
}

//validad  que nada mas sea numeros
const validarNumero = (inputValue) => { 
    const result = inputValue.value.replace(/[a-zA-Z]/g, '');
    inputValue.value = result
};

//Una alerta para mostra el resultadop
const  alertSwal = (respuesta) => {
    let html = `<span>Esta es la permutacion: ${respuesta}</span>`
        Swal.fire({
            html:html,
            showCancelButton: true,
            confirmButtonText: "Aceptar",
        
          }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById('number_1').value = ""
                document.getElementById('number_2').value = ""
            }        
          });
       ;    
   

 

}
