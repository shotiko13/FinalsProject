import React, { useEffect, useState } from 'react';
import './App.css';
import Filters from './components/Filters/Filters';
import SearchResultPage from './components/SearchResultPage/SearchResultPage';
import CarModel from './models/CarModel';
import CarSearchParams from './models/CarSearchParams';
import PeriodType from './models/PeriodType';
import SortOrderType from './models/SortOrderType';
import FiltersFields from './models/FiltersFields';
import ModelService from './services/ModelService';
import CategoryService from './services/CategoryService';
import ManufacturerType from './models/ManufacturerType';
import CarService from './services/CarService';
import CategoryType from './models/CategoryType';
import ModelType from './models/ModelType';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';

function App() {
      const [cars, setCars] = useState<CarModel[]>([]);

      const [manufacturers, setManufacturers] = useState<ManufacturerType[]>([]);
      const [modelsByManufacturer, setModelsByManufacturer] = useState<{[key: number]: ModelType[]}>({});
      const [categories, setCategories] = useState<CategoryType[]>([]);

      const [lastFilterFields, setLastFilterFields] = useState<FiltersFields>({
        forRent: false,
        manufacturerId: null,
        modelId: null,
        categoryId: null,
        priceFrom: null,
        priceTo: null
      });

      const [period, setPeriod] = useState<PeriodType>('1h');
      const [sortOrder, setSortOrder] = useState<SortOrderType>(1);
      const [lastPage, setPage] = useState(1);

      const [showingUSD, setShowingUSD] = useState(false);

      const [isRendered, setIsRendered] = useState(false);

      const carService = new CarService();

      const search = async (filtersFields: FiltersFields, period: PeriodType, sortOrder: SortOrderType, page: number) => {
        const params: CarSearchParams = {
          forRent: filtersFields.forRent,
          manufacturerId: filtersFields.manufacturerId,
          modelMajorId: filtersFields.modelId,
          modelMinorId: null, // TODO ask if we need this at all
          categoryId: filtersFields.categoryId,
          priceFrom: filtersFields.priceFrom,
          priceTo: filtersFields.priceTo,
          period,
          sortOrder,
          page
        };

        const carsResponse = await carService.getCars(params);

        setCars(carsResponse);
      };

      const handleFilterSearch = (fields: FiltersFields) => {
        setLastFilterFields(fields);

        search(fields, period, sortOrder, lastPage);
      };

      const handlePeriodChanged = (period: PeriodType) => {
        setPeriod(period);

        search(lastFilterFields, period, sortOrder, lastPage);
      };

      const handleSortOrderChanged = (sortOrder: SortOrderType) => {
        setSortOrder(sortOrder);

        search(lastFilterFields, period, sortOrder, lastPage);
      };

      const handlePageChanged = (page: number) => { // TODO put this UI somewhere
        setPage(page);

        search(lastFilterFields, period, sortOrder, page);
      }

      useEffect(() => {
        if(isRendered) return;

        const fetchData = async () => {
          try {
            const modelService = new ModelService();
            const categoryService = new CategoryService();

            const [manufacturersData, categoriesData, modelsData] = await Promise.all([
              modelService.getManufacturers(),
              categoryService.getCategories(),
              modelService.getAllModels()
            ]);

            setManufacturers(manufacturersData);
            setCategories(categoriesData);
            setModelsByManufacturer(modelsData);

            search(lastFilterFields, period, sortOrder, lastPage);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setIsRendered(true);
          }
        };
    
        fetchData();
      }, [lastFilterFields, period, sortOrder, lastPage, isRendered, setIsRendered]);

      return (
        <div className="App">
          <div className='d-flex'>
            <Header />
            <Filters
              onSearch={handleFilterSearch}
              manufacturers={manufacturers}
              categories={categories}
              showingUSD={showingUSD}
              onToggleShowingUSD={() => setShowingUSD(!showingUSD)}
            />
            <SearchResultPage 
              cars={cars}
              period={period}
              sortOrder={sortOrder}
              onPeriodChanged={handlePeriodChanged}
              onSortOrderChanged={handleSortOrderChanged}
              manufacturers={manufacturers}
              models={modelsByManufacturer}
              showingUSD={showingUSD}
              onToggleShowingUSD={() => setShowingUSD(!showingUSD)}
            />
          </div>
          
        </div>
      );
}

export default App;
