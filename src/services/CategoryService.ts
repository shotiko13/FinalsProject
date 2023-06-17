import CategoryType from "../models/CategoryType";

class CategoryService {
    async getCategories(): Promise<CategoryType[]> {
        try {
            const response = await fetch('https://api2.myauto.ge/ka/cats/get');
            const data = await response.json();
            type catType = { category_id: number, seo_title: string }
            const categories = data.data.map(({category_id, seo_title}: catType) => { return { id: category_id, name: seo_title } });
            return categories;
        }
        catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    }
}

export default CategoryService;
