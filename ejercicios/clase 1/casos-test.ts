const casosPrueba: Array<object> = [
  { id: 1, titulo: "Login exitoso", prioridad: "Alta", ejecutado: true },
  { id: 2, titulo: "Login con usuario incorrecto", prioridad: "Alta", ejecutado: true },
  { id: 3, titulo: "Login con contraseña incorrecta", prioridad: "Media", ejecutado: false },
  { id: 4, titulo: "Login con usuario correcto y contraseña incorrecta", prioridad: "Media", ejecutado: true },
  { id: 5, titulo: "Login con usuario y contraseña incorrecta", prioridad: "Baja", ejecutado: true },
];


const contarporPrioridad = (casos: Array<object>) => {
  let prioridadAlta = 0;
  let prioridadMedia = 0;
  let prioridadBaja = 0;

  casos.forEach((el: any) => {
    if (el.prioridad === "Alta") {
      prioridadAlta = prioridadAlta + 1;
    } else if (el.prioridad === "Media") {
      prioridadMedia = prioridadMedia + 1;
    } else if (el.prioridad === "Baja") {
      prioridadBaja = prioridadBaja + 1;
    }
  });

 return {
    cantAlta: prioridadAlta,
    cantMedia: prioridadMedia,
    cantBaja: prioridadBaja
  };
};
const listarPendientes = (casos:Array<object>) => {
let noEjecutado = [];

  casos.forEach((el) => {
    if(!el.ejecutado) {
      noEjecutado.push(el);

        
    }
  });
  //return noEjecutado;//
}
console.log(listarPendientes(casosPrueba));
//recorrer elarray para encontras un valor especifico//
console.log(contarporPrioridad(casosPrueba));

const formatearCaso= (caso:object) => {

if (caso.ejecutado=== true){
  return `${caso.id} - ${caso.titulo} - ${caso.prioridad} - Hecho`;
} else {
  return  `${caso.id} - ${caso.titulo} - ${caso.prioridad} - Pendiente`;
  }

}
console.log(formatearCaso(casosPrueba[0]))

casosPrueba.forEach((el: any) => {
  console.log(formatearCaso(el));
})