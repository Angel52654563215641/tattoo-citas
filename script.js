const dias = [
    {
        fecha:"16 Junio",
        disponible:true
    },

    {
        fecha:"17 Junio",
        disponible:false
    },

    {
        fecha:"18 Junio",
        disponible:true
    },

    {
        fecha:"19 Junio",
        disponible:false
    }
];

const contenedor = document.getElementById("dias");

dias.forEach(dia => {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("dia");

    if(dia.disponible){
        tarjeta.classList.add("disponible");
    }else{
        tarjeta.classList.add("ocupado");
    }

    tarjeta.innerHTML = `
        <h3>${dia.fecha}</h3>
        <p>
            ${dia.disponible ? "Disponible" : "Ocupado"}
        </p>
    `;

    contenedor.appendChild(tarjeta);

});