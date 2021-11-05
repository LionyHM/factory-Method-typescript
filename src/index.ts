import biketransport from "../class/transport/biketransport"
import cartransport from "../class/transport/cartransport"
import motorcycletansport from "../class/transport/motorcycletansport"
import Transport from "../class/transport/transport"

declare var process

let transport: Transport

if(process.argv.includes("--uber")){
    transport = new cartransport()
}else if(process.argv.includes("--log")){
    transport = new motorcycletansport
}else if(process.argv.includes("--eats")){
    transport = new biketransport
}
else{
    console.error("Comando não encontrado")
}


if(transport){
    transport.startTransport()
}