//TP para el 13 de Enero por NATALIA RIGAZIO//
//  DESAFIO 1  //

const tareas = [{Titulo: "Estudiar html", Estado: "Terminado",},
    {Titulo: "Estudiar CSS",Estado: "En Progreso",},
    {Titulo: "Estudiar JS",Estado: "Pendiente",},
  ];
  
console.log(tareas);
  
//  DESAFIO 2  //

function agregarTareas (titulo, estado) {
    tareas.push ({Titulo: titulo, Estado: estado});
    alert("Tarea agregada correctamente");
    return tareas
}

console.log (agregarTareas("Repasar JS", "Pendiente"));

//   DESAFIO 3  //
  
function listarTareas (estado) {
    if (estado === "En Progreso" || estado === "Pendiente" || estado === "Terminado") {
        const listadoTareas = tareas.filter(tareas => tareas.Estado === estado);
        return listadoTareas;
  
    } else {
        return tareas;
    }
}
console.log(listarTareas("En Progreso"))
console.log(listarTareas("pepe"))
  

//    DESAFIO 4 //

function agregarTareas (titulo, estado) {
    for (let indice of tareas) { 
        //iterar entre los indices de tareas para ver el titulo
        if (titulo === tareas[indice].Titulo){
            alert("Error: La tarea que intenta ingresar ya existe");  
        } else {
        tareas.push ({Titulo: titulo, Estado: estado});
        alert("Tarea agregada correctamente");
        return tareas
        }
    }
}
console.log (agregarTareas("Repasar JS", "Pendiente"));

  
//   const modificarDos = (estado) => {
//     if (
//       estado === "En Progreso" ||
//       estado === "Pendiente" ||
//       estado === "Terminado" ||
//       estado === "Por trabajar"
//     ) {
//       const modificar = tareas.filter((tareas) => tareas.Estado === estado);
//       return alert("Ya existe");
//     } else {
//       const variacion = tareas.push({ Estado: verificacion });
//       console.log(estado);
//     }
//   };
  
//   console.log(modificarDos);
 
