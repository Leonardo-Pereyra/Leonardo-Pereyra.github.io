const historial = JSON.parse(localStorage.getItem('historial')) || [];

//funcion para limpiar historial
let limpiarStorage = document.getElementById("limpiar-storage");
limpiarStorage.addEventListener("click", function() {
    limpiarhistorial();
})

function limpiarhistorial() {
    historial.splice(0, historial.length);
    localStorage.setItem('historial', JSON.stringify(historial));
    mostrarHistorial();
}
//funcion para mostrar historial
function mostrarHistorial() {
    let historialDiv = document.getElementById('historial');
    historialDiv.innerHTML = '';
    historial.forEach((elemento, index) => {
        historialDiv.innerHTML += `<p>${index + 1}. ${elemento}</p>`;
    });
}

let botonHistorial = document.getElementById("boton-historial");
botonHistorial.addEventListener("click", function() {
    mostrarHistorial();
});


//Masa
let selectorMasa = document.getElementById("Masa");
let inputMasa = document.getElementById("input-Masa");
let botonMasa = document.getElementById("btn-Masa");
let resultadoMasa = document.getElementById("resultado-Masa");



botonMasa.addEventListener("click", function(e) {
    e.preventDefault();

let unidadSeleccionada = parseInt(selectorMasa.value);
let cantidadMasa = parseFloat(inputMasa.value);   
    
    
    if(inputMasa.value === "") {
        Swal.fire({
            title: 'por favor ingrese una cantidad!',
            text: 'Do you want to continue',
            icon: 'warning',
            confirmButtonText: 'Cool',
            iconColor: '#007bff', 
            confirmButtonColor: '#007bff'
        })
        return;
    }else if (unidadSeleccionada === 0) {  
        Swal.fire({
            title: 'por favor ingrese una unidad de medida!',
            text: 'Do you want to continue',
            icon: 'warning',
            confirmButtonText: 'Cool',
            iconColor: '#007bff', 
            confirmButtonColor: '#007bff'
        }) 
        return;
    }
    

    
    if (unidadSeleccionada === 1) {
        let gramos = cantidadMasa * 1000;
        let libras = cantidadMasa * 2.20462;
        let onzas = cantidadMasa * 35.274;

        resultadoMasa.innerHTML = `<p>Gramos: ${gramos}</p><p>Libras: ${libras}</p><p>Onzas: ${onzas}</p>`;
        
        historial.push(resultadoMasa.innerHTML); 
    }
    else if (unidadSeleccionada === 2) {
        let kilogramos = cantidadMasa / 1000;
        let libras = cantidadMasa / 453.6;
        let onzas = cantidadMasa / 28.35;  
        
        resultadoMasa.innerHTML = `<p>Kilogramos: ${kilogramos}</p><p>Libras: ${libras}</p><p>Onzas: ${onzas}</p>`;

        historial.push(resultadoMasa.innerHTML);
    
    }
    else if (unidadSeleccionada === 3) {
        let kilogramos = cantidadMasa / 2.205;
        let gramos = cantidadMasa * 453.6;
        let onzas = cantidadMasa * 16;  
        
        resultadoMasa.innerHTML = `<p>Kilogramos: ${kilogramos}</p><p> Gramos: ${gramos}</p><p> Onzas: ${onzas}</p>`;

        historial.push(resultadoMasa.innerHTML);
    }
    else if (unidadSeleccionada === 4) {
        let kilogramos = cantidadMasa / 35.274;
        let gramos = cantidadMasa * 28.35;
        let libras = cantidadMasa / 16;  
        
        resultadoMasa.innerHTML = `<p>Kilogramos: ${kilogramos}</p><p> Gramos: ${gramos}</p><p> Libras: ${libras}</p>`;
        
        historial.push(resultadoMasa.innerHTML);
    }

    localStorage.setItem('historial', JSON.stringify(historial));
});

//Longitud
let selectorlongitud= document.getElementById("longitud");
let inputlongitud = document.getElementById("input-longitud");
let botonlongitud = document.getElementById("btn-longitud");
let resultadoLongitud = document.getElementById("resultado-longitud");

botonlongitud.addEventListener("click", function(e) {
    e.preventDefault();
    

let unidadSeleccionada = parseInt(selectorlongitud.value);
let cantidadlongitud = parseFloat(inputlongitud.value);  

    if(inputlongitud.value === "") {
        Swal.fire({
            title: 'por favor ingrese una cantidad!',
            text: 'Do you want to continue',
            icon: 'warning',
            confirmButtonText: 'Cool'
        })
        return;
    }else if (unidadSeleccionada === 0) {  
        Swal.fire({
            title: 'por favor ingrese una unidad de medida!',
            text: 'Do you want to continue',
            icon: 'warning',
            confirmButtonText: 'Cool',
            iconColor: '#007bff', 
            confirmButtonColor: '#007bff'
        }) 
        return;
    }
    
    
    if (unidadSeleccionada === 1) {
        let centimetros = cantidadlongitud * 100;
        let pies = cantidadlongitud * 3.28084; ;
        let pulgadas = cantidadlongitud*  39.3701;

        resultadoLongitud.innerHTML = `<p>Centimetros: ${centimetros}</p><p>Pies: ${pies}</p><p>Pulgadas: ${pulgadas}</p>`; 

        historial.push(resultadoLongitud.innerHTML);
    }
    else if (unidadSeleccionada === 2) {
        let metros = cantidadlongitud / 100;
        let pies = cantidadlongitud / 30.48;
        let pulgadas = cantidadlongitud/  2.54;
        
        resultadoLongitud.innerHTML = `<p>Metros: ${metros}</p><p>Pies: ${pies}</p><p>Pulgadas: ${pulgadas}</p>`; 

        historial.push(resultadoLongitud.innerHTML);
    }
    else if (unidadSeleccionada === 3) {
        let metros = cantidadlongitud / 3.281;
        let centimetros = cantidadlongitud * 30.48;
        let pulgadas = cantidadlongitud *  12;
        
        resultadoLongitud.innerHTML = `<p>Metros: ${metros}</p><p>Centimetros: ${centimetros}</p><p>Pulgadas: ${pulgadas}</p>`;
        
        historial.push(resultadoLongitud.innerHTML);
    } 
    else if (unidadSeleccionada === 4) {
        let metros = cantidadlongitud / 39.37;
        let centimetros = cantidadlongitud * 2.54;
        let pies = cantidadlongitud / 12;
        
        resultadoLongitud.innerHTML = `<p>Metros: ${metros}</p><p>Centimetros: ${centimetros}</p><p>Pies: ${pies}</p>`;
        
        historial.push(resultadoLongitud.innerHTML);
    }
    
    localStorage.setItem('historial', JSON.stringify(historial));
});

//Volumen
let selectorvolumen= document.getElementById("volumen");
let inputvolumen = document.getElementById("input-volumen");
let botonvolumen = document.getElementById("btn-volumen");
let resultadovolumen = document.getElementById("resultado-volumen");

botonvolumen.addEventListener("click", function(e) {
    e.preventDefault();


let unidadSeleccionada = parseInt(selectorvolumen.value);
let cantidadvolumen = parseFloat(inputvolumen.value);

    if(inputvolumen.value === "") {
        Swal.fire({
            title: 'por favor ingrese una cantidad!',
            text: 'Do you want to continue',
            icon: 'warning',
            confirmButtonText: 'Cool',
            background : "#ffffff"
            
        })
        return;
    }else if (unidadSeleccionada === 0) {  
        Swal.fire({
            title: 'por favor ingrese una unidad de medida!',
            text: 'Do you want to continue',
            icon: 'warning',
            confirmButtonText: 'Cool',
            iconColor: '#007bff', 
            confirmButtonColor: '#007bff'
        }) 
        return;
    }

    if (unidadSeleccionada === 1) {
        let mililitros = cantidadvolumen * 1000;
        let galones = cantidadvolumen / 3.785;
        let pintas = cantidadvolumen * 2.113;
    
        resultadovolumen.innerHTML = `<p>Mililitros: ${mililitros}</p><p>Galones: ${galones}</p><p>Pintas: ${pintas}</p>`;

        historial.push(resultadovolumen.innerHTML);
    }
    else if (unidadSeleccionada === 2) {
        let litros = cantidadvolumen / 1000;
        let galones = cantidadvolumen / 3785;
        let pintas = cantidadvolumen /  473.2;
        
        resultadovolumen.innerHTML = `<p>Litros: ${litros}</p><p>Galones: ${galones}</p><p>Pintas: ${pintas}</p>`;

        historial.push(resultadovolumen.innerHTML);
    }
    else if (unidadSeleccionada === 3) {
        let litros = cantidadvolumen * 3.785;
        let mililitros = cantidadvolumen * 3785;
        let pintas = cantidadvolumen * 8;
        
        resultadovolumen.innerHTML = `<p>Litros: ${litros}</p><p>Mililitros: ${mililitros}</p><p>Pintas: ${pintas}</p>`;

        historial.push(resultadovolumen.innerHTML);
    }
    else if (unidadSeleccionada === 4) {
        let litros = cantidadvolumen / 2.113;
        let mililitros = cantidadvolumen * 473.2;
        let galones = cantidadvolumen / 8;
        
        resultadovolumen.innerHTML = `<p>Litros: ${litros}</p><p>Mililitros: ${mililitros}</p><p>Galones: ${galones}</p>`;

        historial.push(resultadovolumen.innerHTML);
    }

    localStorage.setItem('historial', JSON.stringify(historial));
});
