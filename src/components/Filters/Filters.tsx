import React, { useState } from 'react';
import FiltersFields from '../../models/FiltersFields';
import ManufacturerType from '../../models/ManufacturerType';
import ModelService from '../../services/ModelService';
import CategoryType from '../../models/CategoryType';
import ModelType from '../../models/ModelType';

interface FiltersProps {
    onSearch: (fields: FiltersFields) => void;
    manufacturers: ManufacturerType[];
    categories: CategoryType[];
    showingUSD: boolean;
    onToggleShowingUSD: () => void;
}

const Filters: React.FC<FiltersProps> = ({ onSearch, manufacturers, categories, showingUSD, onToggleShowingUSD }) => {
    const [forRent, setForRent] = useState(false);
    const [manufacturer, setManufacturer] = useState<ManufacturerType | null>(null);
    const [model, setModel] = useState<ModelType | null>(null);
    const [category, setCategory] = useState<CategoryType | null>(null);

    const [priceFrom, setPriceFrom] = useState<number | null>(null);
    const [priceTo, setPriceTo] = useState<number | null>(null);

    const [models, setModels] = useState<ModelType[]>([]);

    const handleSearch = () => {
        const fields: FiltersFields = {
            forRent,
            manufacturerId: manufacturer?.id || null,
            modelId: model?.id || null,
            categoryId: category?.id || null,
            priceFrom,
            priceTo
        };

        onSearch(fields);
    };

    const modelService = new ModelService();

    const updateModelsList = async () => {
        setModel(null);

        if (manufacturer) {
            const modelData = await modelService.getModelsByManufacturerId(manufacturer.id);

            setModels(modelData);
        } else {
            setModels([])
        }
    };

    const onManufacturerChanged = (newManufacturerId: number | null) => {
        setManufacturer(manufacturers.find(man => man.id === newManufacturerId) || null);
        updateModelsList();
    }

    return (
      <div>
        <p className='mb-0 text-muted' style={{marginTop: '120px', marginLeft: '-85px'}}>მთავარი &gt; ძიება &gt; <span className='text-danger'>იყიდება</span></p>
        <div className="bg-white ml-1 border border-1 border-gray rounded-top shadow d-inline-block position-md-relative flex-shrink-0 mb-48px mr-md-20px " style={{ height: '750px', width: '258px', marginRight: '20px', marginTop: '20px', marginLeft: '-40px' }}>
          
          <div className="p-3 flex-grow-1 mt-4">            
            <label className='form-floating mb-2'>გარიგების ტიპი</label>
             <select className='form-select'
                 value={forRent ? 'rent' : 'sale'}
                 onChange={(e) => setForRent(e.target.value === 'rent')}
             >
                 <option key='sale' value='sale'>იყიდება</option>
                 <option key='rent' value='rent'>ქირავდება</option>
             </select>   
          </div>
          <hr/>
          <div className="p-3 flex-grow-1 mt-4">
          <label className='form-floating mb-2' >მწარმოებელი</label>
             <select className='form-select' value={manufacturer?.id || ''} onChange={(e) => onManufacturerChanged(+e.target.value || null)}>
                 <option value="">ყველა მწარმოებელი</option>
                 {manufacturers.map((option, id) => (
                     <option key={id} value={option.id}>
                         {option.name}
                     </option>
                 ))}
                 </ select>
          </div>
          <hr/>
          
          <div className="p-3 flex-grow-1 mt-4">
          <label className='form-floating mb-2'>კატეგორია</label>
             <select className='form-select' value={category?.id || ''} onChange={(e) => setCategory(categories.find(cat => cat.id === +e.target.value) || null)}>
                 <option value="">ყველა კატეგორია</option>
                 {categories.map((option, id) => (
                     <option key={id} value={option.id}>
                         {option.name}
                     </option>
                 ))}
             </select>
          </div>
          <hr/>
          <div className="p-3 flex-grow-1 mt-4">
          <label className='form-floating mb-2' htmlFor="priceRange">ფასი</label>
             <div className="input-group">
             <input className="form-control" type="number" placeholder="დან" value={priceFrom !== null ? priceFrom.toString() : ''} onChange={(e) => setPriceFrom(+e.target.value)} />
             <span className="input-group-text">-</span>
             <input className="form-control" type="number" placeholder="მდე" value={priceTo !== null ? priceTo.toString() : ''} onChange={(e) => setPriceTo(+e.target.value)} />
             </div>
             <div>
             <button onClick={onToggleShowingUSD}>{showingUSD ? '$' : '₾'}</button>
             </div>
          </div>
          <div className="p-3 flex-grow-1 mt-4">
        <button className="btn btn-primary font-size-12 text-gray-800 font-medium mb-8px mt-2-0px" style={{color: ''}} onClick={handleSearch}>
          ძებნა
        </button>
      </div>
        </div>
        </div>
      
      
        // <div>
        // <div>
        //     <label>გარიგების ტიპი</label>
        //     <select 
        //         value={forRent ? 'rent' : 'sale'}
        //         onChange={(e) => setForRent(e.target.value === 'rent')}
        //     >
        //         <option key='sale' value='sale'>იყიდება</option>
        //         <option key='rent' value='rent'>ქირავდება</option>
        //     </select>
        // </div>
        // <div>
        //     <label>მწარმოებელი</label>
        //     <select value={manufacturer?.id || ''} onChange={(e) => onManufacturerChanged(+e.target.value || null)}>
        //         <option value="">ყველა მწარმოებელი</option>
        //         {manufacturers.map((option, id) => (
        //             <option key={id} value={option.id}>
        //                 {option.name}
        //             </option>
        //         ))}
        //     </select>
        // </div>
        // <div>
        //     <label>მოდელი</label>
        //     <select value={model?.id || ''} onChange={(e) => setModel(models.find(mod => mod.id === +e.target.value) || null)}>
        //         <option value="">ყველა მოდელი</option>
        //         {models.map((option, id) => (
        //             <option key={id} value={option.id}>
        //                 {option.name}
        //             </option>
        //         ))}
        //     </select>
        // </div>
        // <div>
        //     <label>კატეგორია</label>
        //     <select value={category?.id || ''} onChange={(e) => setCategory(categories.find(cat => cat.id === +e.target.value) || null)}>
        //         <option value="">ყველა კატეგორია</option>
        //         {categories.map((option, id) => (
        //             <option key={id} value={option.id}>
        //                 {option.name}
        //             </option>
        //         ))}
        //     </select>
        // </div>
        // <hr />
        // <div>
        //     <label>ფასი</label>
        //     <div>
        //     <input type="number" placeholder="დან" value={priceFrom !== null ? priceFrom.toString() : ''} onChange={(e) => setPriceFrom(+e.target.value)} />
        //     <span>-</span>
        //     <input type="number" placeholder="მდე" value={priceTo !== null ? priceTo.toString() : ''} onChange={(e) => setPriceTo(+e.target.value)} />
        //     </div>
        //     <div>
        //     <button onClick={onToggleShowingUSD}>{showingUSD ? '$' : '₾'}</button>
        //     </div>
        // </div>
        // <button onClick={handleSearch}>ძებნა</button>
        // </div>
    );
};

export default Filters;
