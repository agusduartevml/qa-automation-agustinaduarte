//asincronismo. pueden haber acciones con tiempo indeterminado//
//promesa, objeto cuyo valor todavia no esta disponible//

//función que simula una peticion y devuelve una promesa tipada//
function obtenerUsuarioAsync(): Promise<string> {
return new Promise ((resolve, reject) => {
    setTimeout(() => {

        //primer parametro recibe codigo que se va a ejecutar//
        const exito = true;
        if (exito) {
            resolve("Ana");            
        } else {
           reject("No se puede obtener el usuario")
        }
    }, 3000); //el tiempo//
});
}

function consumiendoPromesa () {
    const usuario = obtenerUsuarioAsync (); //guardo la promesa en una variable//
    usuario.then((result) => {
        console.log("Exito", result);
    }).catch((err) =>{
        console.log("Error", err);
})
}

//ahora con async await función async /await con manejode errores/

async function consumiendoPromesaConAwait (): Promise<void> {

}

consumiendoPromesa();
console.log("hola mundo");
//imprime el hola mundo primero//