import IVehicles from "../../src/interfaces/IVehicles";

export default class Car implements IVehicles{
    getCarga(): void {
        console.log("O Lanche do cliente já foi pego")
    }
    startRoute(): void {
        this.getCarga()
        console.log("Iniciando trajeto até cliente com lanche pego no estabelecimento!")
    }
}