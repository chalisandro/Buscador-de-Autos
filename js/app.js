// Variables
const resultado = document.querySelector('#resultado')
// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})

// Funciones
function mostrarAutos() {
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto
        const autoHtml = document.createElement('p');
        autoHtml.textContent =`
        ${marca} ${modelo} - ${year} -${puertas} Puertas - transmision ${transmision} - ${color} - ${precio} Dls
        `;

        // insertar en el html
        resultado.appendChild(autoHtml);
    })
}