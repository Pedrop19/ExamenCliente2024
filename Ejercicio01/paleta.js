let contenedorPaletaElement = document.getElementById("contenedorPaleta");
let filasElement = document.getElementById("filas");
let columnasElement = document.getElementById("columnas");
let btnDibujarPaletaElement = document.getElementById("dibujarPaleta");
let controlDatosElement = document.getElementById('controlDatosEntrada');
let btnBorrarPaletaElement = document.getElementById("borrarPaleta");
let colorElegido;


btnDibujarPaletaElement.addEventListener('click', event => {
    event.preventDefault();
    if (filasElement.value < 20 || columnasElement.value < 20) {
        controlDatosElement.style.display = 'block';
    } else {
        controlDatosElement.style.display = 'none';
        filasElement.disabled = true;
        columnasElement.disabled = true;
        btnBorrarPaletaElement.style.visibility = "visible";
        let filas = filasElement.value;
        let columnas = columnasElement.value;
        console.log(filas)
        console.log(columnas)
        event.preventDefault();
        let tableElement = document.createElement('table');
        tableElement.classList.add("tabla")
        for (let i = 0; i < filas; i++) {
            let fila = tableElement.insertRow(i);
            for (let j = 0; j < columnas; j++) {
                let celda = fila.insertCell(j);
                celda.className = "cuadro";
                celda.setAttribute("data-original-color", "#fff");

            }
        }
        contenedorPaletaElement.appendChild(tableElement);
        contenedorPaletaElement.addEventListener('click', event => {
            let pincelActivo = false
            let tdElements = document.querySelectorAll("#paletaColores table tr td");
            console.log(pincelActivo)


            let estadoPincelElement = document.getElementById("estadoPincel");
            if (estadoPincelElement.innerHTML == "Desactivado" && pincelActivo == false) {
                estadoPincelElement.innerHTML = "Activado";
                pincelActivo = true;
                console.log(tdElements);
                console.log(pincelActivo)
            } else {
                estadoPincelElement.innerHTML = "Desactivado"
                colorElegido = null;
                pincelActivo = false;
                console.log(pincelActivo)
            }

            if (pincelActivo == true) {
                tdElements.forEach((tdElement) =>
                    tdElement.addEventListener('click', event => {
                        colorElegido = tdElement.dataset.color;
                        let celdas = document.querySelectorAll(".cuadro")
                        celdas.forEach((celda) =>
                            celda.addEventListener('mouseover', event => {
                                event.target.style.backgroundColor = colorElegido;
                            })
                        )
                    })
                )
            } else {
                colorElegido = null;
                console.log("Estoy aqui")
                tdElements.forEach((tdElement) =>
                    tdElement.addEventListener('click', event => {
                        colorElegido = null;
                    })
                )
            }
        })

        btnBorrarPaletaElement.addEventListener('click', event => {
            event.preventDefault()
            window.location.reload()
        })
    }


})


