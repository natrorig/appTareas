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
console.log(listarTareas("En Progreso")) //lista las tareas En Progreso
console.log(listarTareas("pepe")) //lista todas las tareas
  

//    DESAFIO 4 //

function agregarTareas (titulo, estado) {
    for (const [indice] of tareas.entries()) { 
        //iterar entre los indices de tareas para ver el titulo
        if (titulo === tareas[indice].Titulo){
            return alert("Error: La tarea que intenta ingresar ya existe");  //manda error al usuario si ya existe
        } else {
            tareas.push ({Titulo: titulo, Estado: estado}); //si no existe, agrega la tarea
            alert("Tarea agregada correctamente");
            return tareas
        }
    }
}
console.log (agregarTareas("Repasar JS", "Pendiente")); //control negativo
console.log (agregarTareas("Aprender guitarra", "Pendiente")); //control positivo


//    DESAFIO 5    //

// Crear una funcion que devolvera las tareas en donde el titulo coincida con el parametro dado. 
// Ejemplo: existeTarea(“js”) // Devera devolver el array con los objetos que coincidan con el string sin importar su estado

const existeTarea = (titulo) => {
    for (const [indice] of tareas.entries()) { 
        //iterar entre los indices de tareas para ver el titulo
        if (titulo === tareas[indice].Titulo){
            return tareas[indice]  //devuelve el objeto que coincide con el string
        } else {
            return alert("No existe esa Tarea")
        }
}
