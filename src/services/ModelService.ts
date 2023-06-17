import ManufacturerType from "../models/ManufacturerType";
import ModelType from "../models/ModelType";

class ModelService {
    async getManufacturers(): Promise<ManufacturerType[]> {
        try {
            const response = await fetch('https://static.my.ge/myauto/js/mans.json');
            const data = await response.json();
            type manufacturerResponseType = { man_id: number, man_name: string }
            const manufacturers = data.map((man: manufacturerResponseType) => { return { id: +man.man_id, name: man.man_name } });
            return manufacturers;
        }
        catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    }

    async getModelsByManufacturerId(id: number): Promise<ModelType[]> {
        try {
            const response = await fetch(`https://api2.myauto.ge/ka/getManModels?man_id=${id}`);
            const data = await response.json();
            type modelType = { model_name: string, model_id: number }
            const models = data.data.map((model: modelType) => { return { id: model.model_id, name: model.model_name } });
            return models;
        }
        catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    }

    async getManufacturerIds(): Promise<number[]> {
        const manufacturers = await this.getManufacturers();

        return manufacturers.map((manufacturer) => manufacturer.id);
    }

    async getAllModels(): Promise<{[key: number]: ModelType[]}> {
        const ids = await this.getManufacturerIds();

        let result: {[key: number]: ModelType[]} = {};

        await Promise.all(ids.map(async (id) => { 
            const models = await this.getModelsByManufacturerId(id);
            
            result[id] = models;
        } ));

        return result;
    }
}

export default ModelService;
