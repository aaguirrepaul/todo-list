//const { require } = require('yargs');
const color = require('colors')
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){

    case 'crear':
        let tarea =  porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        
        let listado = porHacer.getlistado();
        console.log(listado);
        for(let tarea of listado){
             console.log('========Por hacer======='.green)
             console.log('Tarea: ',tarea.descripcion)
             console.log('Estado: ' , tarea.completado)
             console.log('========================'.green)
        }
    break;
    case 'actualizar':
        let actualiado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualiado);
    break;

    case 'borrar':
        let borrado = porHacer.borrarTarea(argv.descripcion);
        console.log("Tarea borrada: " , borrado);
        
    break;
     default:
         console.log("comando no reconocido");   
}  