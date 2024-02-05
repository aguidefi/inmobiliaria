const contenedorVenta = document.querySelector('#venta > div');
const contenedorAlquiler = document.querySelector('#alquiler > div');

function verPropiedad (contenedor, informacion) {
  for(let item of informacion.slice(0,3)) {
    contenedor.innerHTML +=
    `
              <div class="col-md-4 mb-4">
                <div class="card">
                  <img
                    src="${item.src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      ${item.nombre}
                    </h5>
                    <p class="card-text">
                      ${item.descripcion}
                    </p>
                    <p>
                      <i class="fas fa-map-marker-alt"></i> ${item.ubicacion}
                    </p>
                    <p>
                      <i class="fas fa-bed"></i> ${item.habitaciones.split('|')[0]} |
                      <i class="fas fa-bath"></i> ${item.habitaciones.split('|')[1]}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${item.costo}</p>
                    ${item.smoke ? `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                    </p>` 
                    :
                    `<p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>`
                    }
                    ${item.pets ? `<p class="text-success">
                    <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>` 
                    :
                    `<p class="text-danger">
                    <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>`
                    }
                  </div>
                </div>
              </div>
    `
  }
}

verPropiedad (contenedorVenta, propiedadesVenta);
verPropiedad (contenedorAlquiler, propiedadesAlquiler);
