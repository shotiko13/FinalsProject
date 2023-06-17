class CarModel { // TODO add fields as needed
    constructor(public makerId: number, public modelId: number, public year: number,
        public photo: string, public priceGEL: number, public priceUSD: number, public mileage: number,
        public views: number, public forRent: boolean, public rightWheel: boolean,
        public gearType: string, public fuelType: string, public engineVolume: number) {
    }
}

export default CarModel;
