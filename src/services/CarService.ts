import CarModel from "../models/CarModel";
import CarSearchParams from "../models/CarSearchParams";

const gearTypeNames: {[key: number]: string} = {
    1: 'მექანიკა',
    2: 'ავტომატიკა',
    3: 'ტიპტრონიკი',
    4: 'ვარიატორი'
};

const fuelTypeNames: {[key: number]: string} = {
    2: 'ბენზინი',
    3: 'დიზელი',
    6: 'ჰიბრიდი',
    7: 'ელექტრო',
    8: 'ბუნებრივი გაზი',
    9: 'თხევადი გაზი',
    10: 'დატენვადი ჰიბრიდი'
};

class CarService {
    makeUrl(params: CarSearchParams): string {
        let url = 'https://api2.myauto.ge/ka/products?';

        if (params.forRent !== null) url += `ForRent=${params.forRent}&`;

        if (params.manufacturerId !== null) {
            url += `Mans=${params.manufacturerId}`;

            if (params.modelMajorId !== null) url += `.${params.modelMajorId}`;
            if (params.modelMinorId !== null) url += `.${params.modelMinorId}`;

            url += '&';
        }

        if (params.categoryId !== null) {
            url += `Cats=${params.categoryId}&`;
        }

        if (params.priceFrom !== null) url += `PriceFrom=${params.priceFrom}&`;
        if (params.priceTo !== null) url += `PriceTo=${params.priceTo}&`;
        if (params.period !== null) url += `Period=${params.period}&`;
        if (params.sortOrder !== null) url += `SortOrder=${params.sortOrder}&`;
        if (params.page !== null) url += `Page=${params.page}`;

        return url;
    }

    carResponseToPhoto(car: any): string {
        return `https://static.my.ge/myauto/photos/${car.photo}/thumbs/${car.product_id}_1.jpg?v=${car.photo_ver}`
    }

    carResponseToModel(response: any): CarModel { // TODO add fields as needed
        return new CarModel(response.man_id, response.model_id, response.prod_year,
            this.carResponseToPhoto(response), response.price_value, response.price_usd, response.car_run_km,
            response.views, response.for_rent, response.right_wheel, gearTypeNames[+response.gear_type_id],
            fuelTypeNames[+response.fuel_type_id], response.engine_volume / 1000,
            response.customs_passed
        );
    }

    async getCars(params: CarSearchParams): Promise<CarModel[]> {
      try {
        const url = this.makeUrl(params);

        const response = await fetch(url);
        const data = await response.json();
  
        const cars: CarModel[] = data.data.items.map((carData: any) => {
            return this.carResponseToModel(carData);
        });

        return cars;
      } catch (error) {
        console.error('Error fetching cars:', error);
        return [];
      }
    }
}
  
export default CarService;
