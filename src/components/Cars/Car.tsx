import CarModel from '../../models/CarModel';
import ManufacturerType from '../../models/ManufacturerType';
import ModelType from '../../models/ModelType';

interface CarProps {
    car: CarModel;
    manufacturers: ManufacturerType[];
    models: {[key: number]: ModelType[]};
    showingUSD: boolean;
    onToggleShowingUSD: () => void;
}

const Car: React.FC<CarProps> = ({ car, manufacturers, models, showingUSD, onToggleShowingUSD }) => {
    const make = manufacturers.find(man => man.id === car.makerId)?.name;
    const model = models[car.makerId]?.find(m => m.id === car.modelId)?.name;

    return (
        <div>
            <img src={car.photo} alt={make} />
            <div>
                <div><h2>{make}</h2> <h3>{model}</h3> <p>{car.year}</p></div>
                <div>
                    <div>
                        <i className="fas fa-star"></i>
                        <span>{car.engineVolume} {car.fuelType}</span>
                    </div>
                    <div>
                        <i className="fas fa-star"></i>
                        <span>{car.mileage}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <i className="fas fa-star"></i>
                        <span>{car.gearType}</span>
                    </div>
                    <div>
                        <i className="fas fa-star"></i>
                        <span>{car.rightWheel ? 'მარჯვენა' : 'მარცხენა'}</span>
                    </div>
                </div>
                <div>
                    {showingUSD ? car.priceUSD : car.priceGEL} <button onClick={onToggleShowingUSD}>{showingUSD ? '$' : '₾'}</button>
                </div>
            </div>
        </div>
    )
}

export default Car;
