import IVehicles from "../../src/interfaces/IVehicles";

export default class motorcycle implements IVehicles{
    getCarga(): void {
        console.log("Já pegamos o lanche ou produto")
    }
    startRoute(): void {
        this.getCarga()
        console.log("Iniciando a entrega!")
    }
}