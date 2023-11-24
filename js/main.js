function inversion() {

    // 1. Ocultar la imagen y mostrar el panel con los datos de la simulacion

    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");

    // 2. Capturamos y mostramos los datos que no se calculan

    const campoNombre = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;
    const nombresShow = document.getElementById("nombres-show");
    const emailShow = document.getElementById("email-show");

    nombresShow.innerText = campoNombre;
    emailShow.innerText = campoEmail;

    // 3. capturamos los datos de inversion y tiempo, creamos las variables de ganancia y ganancia total

    const campoInversion = document.getElementById("inversion").value;
    const campoTiempo = document.getElementById("tiempo").value;
    const totalShow = document.getElementById("total-show");
    const gananciaTotalShow =document.getElementById("ganancia-show");
    const tiempoShow = document.getElementById("tiempo-show");
    const interesShow = document.getElementById("interes-show");

    let ganancia = 0;
    let gananciaTotal = 0;

    // 4. Validamos o comparamos el tiempo de inversion segun este mostramos la ganancia el total y los demas datos

    switch (campoTiempo) {
        case "1":
            ganancia = (campoInversion * 0.8)/100 * 12;
            gananciaTotal = parseInt(campoInversion) + parseInt(ganancia);

            totalShow.innerText = ganancia;
            gananciaTotalShow.innerText = gananciaTotal;
            tiempoShow.innerText = "12 meses";
            interesShow.innerText = "0.8%";
            break;
        case "2":
            ganancia = (campoInversion * 1.3)/100 * 12;
            gananciaTotal = parseInt(campoInversion) + parseInt(ganancia);

            totalShow.innerText = ganancia;
            gananciaTotalShow.innerText = gananciaTotal;
            tiempoShow.innerText = "24 meses";
            interesShow.innerText = "1.3% ";
            break;

        case "3":
            ganancia = (campoInversion * 1.7)/100 * 12;
            gananciaTotal = parseInt(campoInversion) + parseInt(ganancia);

            totalShow.innerText = ganancia;
            gananciaTotalShow.innerText = gananciaTotal;
            tiempoShow.innerText = "36 meses ";
            interesShow.innerText = "1.7% ";    
            break;
    }
}