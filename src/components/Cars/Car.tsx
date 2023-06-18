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
        <div className="search-content" style={{ maxWidth: "800px" }}>
                <div className="d-flex justify-content-between align-items-center my-12px mt-md-0 mb-md-16px px-16px px-md-0">
                    <span className="d-flex font-size-12 font-size-md-14 font-size-m-16 text-gray-800 text-nowrap">260312 განცხადება</span>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center position-relative ml-4px ml-md-8px undefined">
                            <div className="d-flex align-items-center border-solid-1 hover-border-gray-850 border-radius-8 bg-transparent cursor-pointer h-36px h-md-40px pl-6px pl-md-12px pr-0 pr-md-8px font-size-12 font-size-md-13 text-gray-650 text-nowrap cursor-pointer border-gray-750">პერიოდი<span className="toggle-arrow d-flex transition-all ml-md-4px ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m15 11-3 3-3-3" stroke="#6F7383" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center position-relative ml-4px ml-md-8px undefined">
                            <div className="d-flex align-items-center border-solid-1 hover-border-gray-850 border-radius-8 bg-transparent cursor-pointer h-36px h-md-40px pl-6px pl-md-12px pr-0 pr-md-8px font-size-12 font-size-md-13 text-gray-650 text-nowrap cursor-pointer border-gray-750">სორტირება<span className="toggle-arrow d-flex transition-all ml-md-4px ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m15 11-3 3-3-3" stroke="#6F7383" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-16px px-md-0 position-relative ">
                    <div className="rounded mb-10px bg-white">
                        <div className="d-flex flex-column flex-m-row p-m-16px">
                            <div className="d-flex d-m-none justify-content-between align-items-center py-12px px-16px">
                                <div className="d-flex align-items-center font-size-12 text-gray-500 text-nowrap">თბილისი</div>
                                <div className="font-size-12 text-green-250 d-flex align-items-center">
                                    <div className="font-size-12 text-red-800 text-nowrap">განბაჟება <div className="d-inline-flex align-items-center icon-red-800 icon-w-8px">1,001<span className="d-flex ml-8px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14">
                                            <path id="_" data-name="$" d="M1.974-3.248H0A3.8,3.8,0,0,0,1.022-.742a3.783,3.783,0,0,0,2.45.966v1.19H4.3V.224A4.359,4.359,0,0,0,6.02-.2a3.707,3.707,0,0,0,1.071-.8,2.62,2.62,0,0,0,.553-.917A2.6,2.6,0,0,0,7.8-2.688a7.425,7.425,0,0,0-.049-.8,2.226,2.226,0,0,0-.315-.9,3.024,3.024,0,0,0-.826-.861,4.839,4.839,0,0,0-1.6-.693q-.2-.056-.371-.1L4.3-6.118V-8.6A1.033,1.033,0,0,1,5.11-8.2a1.472,1.472,0,0,1,.35.952H7.448a3.209,3.209,0,0,0-.308-1.26A2.783,2.783,0,0,0,6.454-9.4a3.178,3.178,0,0,0-.973-.56A5.033,5.033,0,0,0,4.3-10.234v-1.078H3.472v1.078a4.667,4.667,0,0,0-1.218.245,3.291,3.291,0,0,0-1.036.574A2.8,2.8,0,0,0,.5-8.5a2.782,2.782,0,0,0-.273,1.26A2.569,2.569,0,0,0,.462-6.069a2.325,2.325,0,0,0,.637.784,3.337,3.337,0,0,0,.9.5q.5.189,1.022.329.14.028.259.063t.189.063V-1.4a1.955,1.955,0,0,1-1.078-.588A1.72,1.72,0,0,1,1.974-3.248ZM4.3-1.4V-4.088a3.381,3.381,0,0,1,1.169.5.983.983,0,0,1,.343.819,1.152,1.152,0,0,1-.14.581,1.385,1.385,0,0,1-.357.413,1.641,1.641,0,0,1-.49.259A2.555,2.555,0,0,1,4.3-1.4ZM3.472-8.6v2.282a2.3,2.3,0,0,1-.966-.406.889.889,0,0,1-.294-.714,1.162,1.162,0,0,1,.1-.511A1.048,1.048,0,0,1,2.6-8.309a1.219,1.219,0,0,1,.406-.217A1.54,1.54,0,0,1,3.472-8.6Z" transform="translate(0.544 11.812)" fill="#272a37" stroke="rgba(0,0,0,0)" stroke-width="1">
                                            </path>
                                        </svg>
                                    </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href="">
                                <div className="list-item__thumbnail flex-shrink-0 w-m-200px mb-12px mb-m-0 px-16px px-m-0">
                                    <div className="list-item__thumbnail__container">
                                        <div className="list-item__thumbnail__items ratio-4-3 w-100">
                                            <div className="items"> 
                                                <div className="items__page">
                                                    <div className="items__image-wrapper">
                                                        <img className="items__image" src={car.photo} alt={make} />
                                                        <div className="position-relative d-flex flex-column align-items-center justify-content-center rgba-gray-800-80 h-100">
                                                            <span className="mb-16px">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                                    <path fill="#ffffff" d="M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                            <div className="d-flex align-items-end">
                                                                <span className="d-flex font-bold font-size-32 line-height-1 text-white">+ 7</span>
                                                                <span className="d-flex font-base font-size-16 line-height-1 text-white opacity-70 ml-4px mb-2px">ფოტო</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="items__button">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="pl-m-14px d-flex flex-column justify-content-between w-100">
                                <div className="d-flex flex-column flex-lg-row align-items-start justify-content-between mb-lg-12px px-16px px-m-0">
                                    <div className="d-flex align-items-center">
                                        <h2 className="d-flex font-medium text-gray-800 font-size-14">
                                            <a className="text-gray-800" target="_blank" rel="noopener noreferrer" href="">{make} {model}</a>
                                            <span className="ml-8px d-flex text-gray-500 font-medium text-nowrap">{car.year}</span>
                                        </h2>
                                    </div>
                                    <div className="d-none d-m-flex align-items-center mt-m-8px mt-lg-0">
                                        <div className="ml-lg-16px mr-24px">
                                            <div className="font-size-12 text-green-250 d-flex align-items-center">
                                                <div className="font-size-12 text-red-800 text-nowrap">
                                                {car.customsPassed ? <span className='text-success'>განბაჟებულია</span> : <span className='text-failure'>განბაჟება</span>} 
                                                    <div className="d-inline-flex align-items-center icon-red-800 icon-w-8px">
                                                        {showingUSD ? car.priceUSD : car.priceGEL}
                                                        <span className="d-flex ml-8px">
                                                        <button onClick={onToggleShowingUSD}>{showingUSD ? '$' : '₾'}</button>
                                                </span>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center font-size-12 text-gray-500 text-nowrap">თბილისი</div>
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
                                                    </span>{car.engineVolume}</div>
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
                                                    </span>{car.fuelType}</div>
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
                                                    <div className="d-inline-flex align-items-center undefined">{showingUSD ? car.priceUSD : car.priceGEL}<span className="d-flex ml-8px">
                                                    </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <span className="d-flex align-items-center justify-content-center w-24px h-24px rounded-circle cursor-pointer bg-gray-350 text-gray-800 icon-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14">
                                                            <path id="_" data-name="$" d="M1.974-3.248H0A3.8,3.8,0,0,0,1.022-.742a3.783,3.783,0,0,0,2.45.966v1.19H4.3V.224A4.359,4.359,0,0,0,6.02-.2a3.707,3.707,0,0,0,1.071-.8,2.62,2.62,0,0,0,.553-.917A2.6,2.6,0,0,0,7.8-2.688a7.425,7.425,0,0,0-.049-.8,2.226,2.226,0,0,0-.315-.9,3.024,3.024,0,0,0-.826-.861,4.839,4.839,0,0,0-1.6-.693q-.2-.056-.371-.1L4.3-6.118V-8.6A1.033,1.033,0,0,1,5.11-8.2a1.472,1.472,0,0,1,.35.952H7.448a3.209,3.209,0,0,0-.308-1.26A2.783,2.783,0,0,0,6.454-9.4a3.178,3.178,0,0,0-.973-.56A5.033,5.033,0,0,0,4.3-10.234v-1.078H3.472v1.078a4.667,4.667,0,0,0-1.218.245,3.291,3.291,0,0,0-1.036.574A2.8,2.8,0,0,0,.5-8.5a2.782,2.782,0,0,0-.273,1.26A2.569,2.569,0,0,0,.462-6.069a2.325,2.325,0,0,0,.637.784,3.337,3.337,0,0,0,.9.5q.5.189,1.022.329.14.028.259.063t.189.063V-1.4a1.955,1.955,0,0,1-1.078-.588A1.72,1.72,0,0,1,1.974-3.248ZM4.3-1.4V-4.088a3.381,3.381,0,0,1,1.169.5.983.983,0,0,1,.343.819,1.152,1.152,0,0,1-.14.581,1.385,1.385,0,0,1-.357.413,1.641,1.641,0,0,1-.49.259A2.555,2.555,0,0,1,4.3-1.4ZM3.472-8.6v2.282a2.3,2.3,0,0,1-.966-.406.889.889,0,0,1-.294-.714,1.162,1.162,0,0,1,.1-.511A1.048,1.048,0,0,1,2.6-8.309a1.219,1.219,0,0,1,.406-.217A1.54,1.54,0,0,1,3.472-8.6Z" transform="translate(0.544 11.812)" fill="#272a37" stroke="rgba(0,0,0,0)" stroke-width="1">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span className="d-flex align-items-center justify-content-center w-24px h-24px rounded-circle cursor-pointer bg-transparent text-gray-800-20 icon-gray-800-20">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="11px" viewBox="0 0 10 11">
                                                            <path id="GEL" d="M313.914-18v-1.689h-3.663a2.938,2.938,0,0,1-1.643-.46,3,3,0,0,1-1.089-1.3,4.608,4.608,0,0,1-.384-1.94,5,5,0,0,1,.343-1.987,2.543,2.543,0,0,1,1.112-1.225v3.372h.894v-3.64a2.492,2.492,0,0,1,.48-.044,2.936,2.936,0,0,1,.5.044v3.64h.894V-26.6a2.469,2.469,0,0,1,1.134,1.24,5.547,5.547,0,0,1,.343,2.132H315a6.022,6.022,0,0,0-.439-2.324,4.874,4.874,0,0,0-1.263-1.8,4.534,4.534,0,0,0-1.939-1.019V-29h-.894v.472l-.236-.007q-.081-.007-.236-.007-.347,0-.51.015V-29h-.894v.631a4.67,4.67,0,0,0-1.891.982,4.823,4.823,0,0,0-1.256,1.671A4.872,4.872,0,0,0,305-23.67a5.7,5.7,0,0,0,.229,1.61,4.62,4.62,0,0,0,.672,1.4,3.294,3.294,0,0,0,1.056.968v.058h-1.411V-18Z" transform="translate(-305 29)" fill="#272a37">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="/ka/pr/90993554/iyideba-manqanebi-jipi-audi-q5-2018-benzini-tbilisi?offerType=superVip">
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center border-top border-solid-1 border-solid-m-0 py-12px px-16px p-m-0 border-gray-100">
                                    <div className="d-flex align-items-center">
                                        <span className="bg-orange d-flex align-items-center rounded font-bold font-size-10 text-white text-uppercase h-20px px-10px mr-16px text-nowrap">s-vip</span>
                                        <div className="d-flex align-items-center font-size-12 text-gray-500 d-none">1104 ნახვა<span className="d-inline-flex w-2px h-2px round-circle bg-gray-500 mx-10px ">
                                        </span>ერთი წუთის წინ</div>
                                    </div>
                                    <div className="d-flex">


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center border-top border-solid-0 border-solid-lg-1 border-gray-300 px-lg-16px">
                            <div>
                                <a href="https://banners.myads.ge/?SiteID=1&amp;Do=NewClick&amp;ID=15746&amp;RedirectUrl=https%3A%2F%2Fmyauto.ge%2Fka%2Fleasing%2Fapp%2F%3FcarId%3D90993554%26manId%3D2%26modelId%3D1599%26fuelTypeId%3D2%26issueYear%3D2018%26payment%3D1155.68%26total%3D69341.06%26interest%3D20%26totalInterest%3D25720.26%26firstDeposit%3D10905.2%26months%3D60%26amount%3D54526%26approvedCompany%3D22%26utm_source%3DTBC_Leasing%26utm_medium%3DSearch%26utm_campaign%3DDamtkicebulia" target="_blank" rel="noreferrer" className="d-flex h-0 overfhlow-hidden">
                                    <div id="ado-9iM6ymO8kzyl7LiNEoagM9Xu0fZltz471LwweAQ9hjj.Y7" className="d-flex justify-content-center rounded overflow-hidden  ado-banner" data-id="15746" data-title="leasing_btn_22">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-radius-md-10 h-56px h-md-40px d-flex align-items-center justify-content-center mt-16px">
                    <ul className="pagination d-flex align-items-center list-unstyled">
                        <li>
                            <span className="actived-flex p-12px text-gray-400 opacity-50 font-size-18 font-size-md-14 font-medium cursor-pointer active pointer-events-none">1</span>
                        </li>
                        <li>
                            <span className="actived-flex p-12px text-gray-400 opacity-50 font-size-18 font-size-md-14 font-medium cursor-pointer ">2</span>
                        </li>
                        <li>
                            <span className="actived-flex p-12px text-gray-400 opacity-50 font-size-18 font-size-md-14 font-medium cursor-pointer ">3</span>
                        </li>
                        <li>
                            <span className="actived-flex p-12px text-gray-400 opacity-50 font-size-18 font-size-md-14 font-medium cursor-pointer ">4</span>
                        </li>
                        <li>
                            <span className="actived-flex p-12px text-gray-400 opacity-50 font-size-18 font-size-md-14 font-medium cursor-pointer ">5</span>
                        </li>
                        <li>
                            <span className="actived-flex p-12px text-gray-400 opacity-50 font-size-18 font-size-md-14 font-medium cursor-pointer ">6</span>
                        </li>
                        <li>
                            <span className="actived-flex p-12px text-gray-400 opacity-50 font-size-18 font-size-md-14 font-medium cursor-pointer ">7</span>
                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        
        /* // <div>
        //     <img src={car.photo} alt={make} />
        //     <div>
        //         <div>
        //             თბილისი
        //             {car.customsPassed ? <span className='text-success'>განბაჟებულია</span> : <span className='text-failure'>განბაჟება</span>}
        //         </div>
        //         <div><h2>{make}</h2> <h3>{model}</h3> <p>{car.year}</p></div>
        //         <div>
        //             <div>
        //                 <i className="fas fa-star"></i>
        //                 <span>{car.engineVolume} {car.fuelType}</span>
        //             </div>
        //             <div>
        //                 <i className="fas fa-star"></i>
        //                 <span>{car.mileage}</span>
        //             </div>
        //         </div>
        //         <div>
        //             <div>
        //                 <i className="fas fa-star"></i>
        //                 <span>{car.gearType}</span>
        //             </div>
        //             <div>
        //                 <i className="fas fa-star"></i>
        //                 <span>{car.rightWheel ? 'მარჯვენა' : 'მარცხენა'}</span>
        //             </div>
        //         </div>
        //         <div>
        //             {showingUSD ? car.priceUSD : car.priceGEL} <button onClick={onToggleShowingUSD}>{showingUSD ? '$' : '₾'}</button>
        //         </div>
        //     </div>
        // </div> */
    )
}

export default Car;
