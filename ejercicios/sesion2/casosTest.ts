interface CasoDeTest {
    id: number;
    titulo: string;
    prioridad: string;
    ejecutado: boolean; 
}
const casos: Array<CasoDeTest> = [
  { id: 1, titulo: "Login exitoso", prioridad: "Alta", ejecutado: true },
  { id: 2, titulo: "Login con usuario incorrecto", prioridad: "Alta", ejecutado: true },
  { id: 3, titulo: "Login con contraseña incorrecta", prioridad: "Media", ejecutado: false }]

  function obtenerCasosDeTest(): Promise<CasoDeTest[]> {
return new Promise <CasoDeTest[]> ((resolve, reject) => {
    setTimeout(() => {

        //primer parametro recibe codigo que se va a ejecutar//
        const exito = true;
        if (exito) {
            resolve(casos);            
        } else {
           reject("Error")
        }
    }, 500); 
    });
}
  

    const formatearCaso= (caso:CasoDeTest) => {

if (caso.ejecutado=== true){
  return `${caso.id} - ${caso.titulo} - ${caso.prioridad} - Hecho`;
} else {
  return  `${caso.id} - ${caso.titulo} - ${caso.prioridad} - Pendiente`;
  }
    }
async function main(): Promise <void> {
const resultado= await obtenerCasosDeTest();
resultado.forEach((el) => {
    console.log(formatearCaso(el));
});
}
main ();