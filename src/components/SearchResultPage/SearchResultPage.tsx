import React from 'react';
import SearchResultPageHeader from './SearchResultPageHeader';
import CarModel from '../../models/CarModel';
import Cars from '../Cars/Cars';
import PeriodType from '../../models/PeriodType';
import SortOrderType from '../../models/SortOrderType';
import ManufacturerType from '../../models/ManufacturerType';
import ModelType from '../../models/ModelType';

interface SearchResultPageProps {
    cars: CarModel[];
    period: PeriodType;
    sortOrder: SortOrderType;
    onPeriodChanged: (period: PeriodType) => void;
    onSortOrderChanged: (sortOrder: SortOrderType) => void;
    manufacturers: ManufacturerType[];
    models: {[key: number]: ModelType[]};
    showingUSD: boolean;
    onToggleShowingUSD: () => void;
}

const SearchResultPage: React.FC<SearchResultPageProps> = (props) => {
  return (
    <div>
        <SearchResultPageHeader 
            count={props.cars.length}
            period={props.period}
            sortOrder={props.sortOrder}
            onPeriodChanged={props.onPeriodChanged}
            onSortOrderChanged={props.onSortOrderChanged}
        />
      <Cars 
        data={props.cars}
        manufacturers={props.manufacturers}
        models={props.models}
        showingUSD={props.showingUSD}
        onToggleShowingUSD={props.onToggleShowingUSD}
      />
    </div>
  );
};

export default SearchResultPage;
