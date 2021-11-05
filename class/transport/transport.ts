import IVehicles from "../../src/interfaces/IVehicles";

export default abstract class transport{

    startTransport(): void{
        const vehicle = this.createTransport()

        vehicle.startRoute()
    }


    protected abstract createTransport(): IVehicles


}