"use strict";
const casosPrueba = [
    { id: 1, titulo: "Login exitoso", prioridad: " Alta", ejecutado: true },
    { id: 2, titulo: "Login con usuario incorrecto", prioridad: "Alta", ejecutado: true },
    { id: 3, titulo: "Login con contraseña incorrecta", prioridad: "Media", ejecutado: true },
    { id: 4, titulo: "Login con usuario correcto y contraseña incorrecta", prioridad: "Media", ejecutado: true },
    { id: 5, titulo: "Login con usuario y contraseña incorrecta", prioridad: "Baja", ejecutado: true },
];
const contarporPrioridad = (casos) => {
    let prioridadAlta = 0;
    let prioridadMedia = 0;
    let prioridadBaja = 0;
    casos.forEach((el) => {
        if (el.prioridad === "Alta") {
            prioridadAlta = prioridadAlta + 1;
        }
        else if (el.prioridad === "Media") {
            prioridadMedia = prioridadMedia + 1;
        }
        else if (el.prioridad === "Baja") {
            prioridadBaja = prioridadBaja + 1;
        }
    });
    return {
        cantAlta: prioridadAlta,
        cantMedia: prioridadMedia,
        cantBaja: prioridadBaja
    };
};
console.log(contarporPrioridad(casosPrueba));
//llama al parametro, q
/*casos.forEach(elemento)  =>{
 if (elemento.priority === "Alta") {
   prioridadAlta = prioridadAlta +1:
 }else if (el.priority === "media") {
   prioridadMedia = prioridadMedia +1:

 }else */
/*const listarPendientes = (casos:Array<CasoPrueba>):Array<CasoPrueba>) => {
  let notExecuted = [];

  casos.forEach(el)*/
