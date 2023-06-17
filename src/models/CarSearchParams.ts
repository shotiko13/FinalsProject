import PeriodType from "./PeriodType";
import SortOrderType from "./SortOrderType";

class CarSearchParams {
    constructor(public forRent: boolean, public manufacturerId: number | null, 
        public modelMajorId: number | null, public modelMinorId: number | null,
        public categoryId: number | null, public priceFrom: number | null, public priceTo: number | null,
        public period: PeriodType,
        public sortOrder: SortOrderType,
        public page: number | null) {
    }
}

export default CarSearchParams;
