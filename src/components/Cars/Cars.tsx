import Car from './Car'; // Import the Car component
import CarModel from '../../models/CarModel';
import React from 'react';
import ManufacturerType from '../../models/ManufacturerType';
import ModelType from '../../models/ModelType';

interface CarsProps {
    data: CarModel[];
    manufacturers: ManufacturerType[];
    models: {[key: number]: ModelType[]};
    showingUSD: boolean;
    onToggleShowingUSD: () => void;
}

const Cars: React.FC<CarsProps> = ({ data, manufacturers, models, showingUSD, onToggleShowingUSD }) => {
  return (
    <div>
      {data.map((car, index) => (
        <Car 
          key={index}
          car={car}
          manufacturers={manufacturers}
          models={models}
          showingUSD={showingUSD}
          onToggleShowingUSD={onToggleShowingUSD}
        />
      ))}
    </div>
  );
};

export default Cars;