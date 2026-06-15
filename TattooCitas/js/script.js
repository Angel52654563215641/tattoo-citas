const estados = {

    // JUNIO

    "2026-06-01":"ocupado",
    "2026-06-02":"ocupado",
    "2026-06-03":"disponible",
    "2026-06-04":"posible",

    // JULIO

    "2026-07-01":"ocupado",
    "2026-07-02":"disponible",
    "2026-07-03":"posible"

};
function crearCalendario(
    contenedor,
    anio,
    mes
){

    const calendario =
        document.getElementById(contenedor);

    const primerDia =
        new Date(anio, mes - 1, 1).getDay();

    const ultimoDia =
        new Date(anio, mes, 0).getDate();

    let ajuste =
        primerDia === 0 ? 6 : primerDia - 1;

    for(let i = 0; i < ajuste; i++){

        const vacio =
            document.createElement("div");

        calendario.appendChild(vacio);

    }

    for(
        let dia = 1;
        dia <= ultimoDia;
        dia++
    ){

        const fecha =
            `${anio}-${String(mes).padStart(2,"0")}-${String(dia).padStart(2,"0")}`;

        const estado =
            estados[fecha] ||
            "disponible";

        const div =
            document.createElement("div");

        div.classList.add(
            "dia",
            estado
        );

        div.textContent =
            dia;

        calendario.appendChild(div);

    }

}
crearCalendario(
    "junio",
    2026,
    6
);

crearCalendario(
    "julio",
    2026,
    7
);
const estados = {
   "2026-06-15":"ocupado",
   "2026-06-16":"posible"
}