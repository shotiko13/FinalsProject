import CarModel from '../../models/CarModel';
import ManufacturerType from '../../models/ManufacturerType';
import ModelType from '../../models/ModelType';
import React from 'react';

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
        <div className="search-content mb-4" style={{ maxWidth: "800px" }}>
                
                <div className="px-16px px-md-0 position-relative">
                    <div className="rounded mb-10px bg-white">
                        <div className="d-flex flex-column flex-m-row p-m-16px">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="list-item__thumbnail flex-shrink-0 w-m-200px mb-12px mb-m-0 px-16px px-m-0">
                                    <div className="list-item__thumbnail__container">
                                        <div className="list-item__thumbnail__items ratio-4-3 w-100">
                                            <div className="items"> 
                                                <div className="items__page">
                                                    <div className="items__image-wrapper">
                                                        <img className="items__image" src={car.photo} alt={make} />
                                                    </div>
                                                    <div className="items__button">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="pl-m-14px d-flex flex-column justify-content-between w-100">
                                <div className="d-flex flex-column flex-lg-row align-items-start justify-content-between mb-lg-12px px-16px px-m-0">
                                    <div className="d-flex align-items-center">
                                        <h4 className="d-flex text-gray-800">
                                            <span className="text-gray-800 text-nowrap">{make} {model}</span>
                                            <span className="text-secondary text-nowrap">{car.year} წ</span>
                                        </h4>
                                    </div>
                                    <div>
                                    <div className="d-flex d-m-none justify-content-between align-items-center py-12px px-16px">
                                <div className="font-size-12 text-green-250 d-flex align-items-center">
                                    <div className="font-size-12 text-nowrap">
                                    {car.customsPassed ? <div className='text-success'>განბაჟებულია</div> : <div className='text-danger'>განბაჟება</div>}
                                    </div>
                                </div>
                                <div className="d-flex align-items-center font-size-12 text-gray-500 text-nowrap">თბილისი</div>
                            </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-m-row justify-content-between">
                                    <div className="d-block d-m-none d-lg-block w-lg-70 border-radius-8 border-solid-1 border-solid-m-0 px-12px p-m-0 mx-16px mx-m-0 mt-8px mt-m-0 border-gray-100">
                                        <div className="row justify-content-between justify-content-md-start mx-n8px mx-md-n12px my-m-n10px">
                                            <div className="w-50 px-8px px-md-12px py-10px">
                                                <div className="d-flex align-item-center font-size-12 font-size-md-13 text-gray-800">
                                                    <span className="d-flex mr-8px mr-md-12px">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.525 2c-.388 0-.703.35-.703.783 0 .433.315.783.703.783h1.808v1.707H5.686a.662.662 0 0 0-.465.19L4.004 6.665h-.667a.654.654 0 0 0-.658.65v1.23H1.5V7.134a.76.76 0 0 0-.75-.77.76.76 0 0 0-.75.77v4.95c0 .425.336.77.75.77a.76.76 0 0 0 .75-.77v-1.998H2.68v1.871c0 .36.294.65.658.65h.667l1.217 1.203c.124.121.29.19.465.19h5.17c.142 0 .28-.046.395-.13l1.88-1.393a.648.648 0 0 0 .263-.52v-1.871H14.5v1.998c0 .425.336.77.75.77a.76.76 0 0 0 .75-.77v-4.95a.76.76 0 0 0-.75-.77.76.76 0 0 0-.75.77v1.411h-1.106v-1.23a.646.646 0 0 0-.193-.46l-1.41-1.392a.662.662 0 0 0-.465-.19H8.74V3.566h1.807c.389 0 .704-.35.704-.783 0-.432-.315-.783-.704-.783H5.525zm-.783 5.775 1.217-1.202h5.094l1.025 1.011v4.049L10.637 12.7H5.959l-1.217-1.202a.662.662 0 0 0-.465-.19h-.282V7.964h.282a.662.662 0 0 0 .465-.19z" fill="#9CA2AA">
                                                            </path>
                                                        </svg>
                                                    </span>{car.engineVolume} {car.fuelType}</div>
                                            </div>
                                            <div className="w-50 px-8px px-md-12px py-10px">
                                                <div className="d-flex align-item-center font-size-12 font-size-md-13 text-gray-800">
                                                    <span className="d-flex mr-8px mr-md-12px">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="8" cy="8" r="6.3" stroke="#9CA2AA" stroke-width="1.4">
                                                            </circle>
                                                            <circle cx="8" cy="8" r="1.3" stroke="#9CA2AA" stroke-width="1.4">
                                                            </circle>
                                                            <path d="M12 8a4 4 0 0 0-8 0" stroke="#9CA2AA" stroke-width="1.4" stroke-linecap="round">
                                                            </path>
                                                            <path d="m9 7 1.5-1.5" stroke="#9CA2AA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                        </svg>
                                                     </span>{car.mileage} კმ</div>
                                            </div>
                                            <div className="w-50 px-8px px-md-12px py-10px">
                                                <div className="d-flex align-item-center font-size-12 font-size-md-13 text-gray-800">
                                                    <span className="d-flex mr-8px mr-md-12px">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="2.6" y="7.6" width="10.8" height="7.8" rx="1.2" stroke="#8C929B" stroke-width="1.2">
                                                            </rect>
                                                            <path d="M8 5v5" stroke="#8C929B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                            <path d="M8 12v1.5" stroke="#8C929B" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                            <circle cx="8" cy="2.5" r="1.8" stroke="#8C929B" stroke-width="1.4">
                                                            </circle>
                                                            <path d="M5 10v3M11 10v3" stroke="#8C929B" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                        </svg>
                                                    </span>{car.gearType}</div>
                                            </div>
                                            <div className="w-50 px-8px px-md-12px py-10px">
                                                <div className="d-flex align-item-center font-size-12 font-size-md-13 text-gray-800">
                                                    <span className="d-flex mr-8px mr-md-12px">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="8" cy="8" r="6.3" stroke="#9CA2AA" stroke-width="1.4">
                                                            </circle>
                                                            <circle cx="8" cy="8" r="1.3" stroke="#9CA2AA" stroke-width="1.4">
                                                            </circle>
                                                            <path d="m9.5 8 4-1.5M6.214 8 2 7.299M8 9.5V14" stroke="#9CA2AA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <div className='ml-2'>
                                                        {car.rightWheel ? 'მარჯვენა' : 'მარცხენა'}
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-lg-column align-items-center align-items-lg-end justify-content-between justify-content-lg-start p-16px p-m-0 w-100 w-lg-auto">
                                        <div className="d-flex flex-column mb-lg-12px">
                                            <div className="d-flex align-items-center justify-content-m-end mt-lg-n4px">
                                                <div className="d-flex align-items-center font-medium font-size-20 line-height-1 text-gray-800">
                                                    <div className="d-inline-flex align-items-center undefined">{showingUSD ? car.priceUSD : car.priceGEL}
                                                    <button onClick={onToggleShowingUSD}>{showingUSD ? '$' : '₾'}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {car.views} ნახვა
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Car;
