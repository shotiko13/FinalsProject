import PeriodType from "../../models/PeriodType";
import SortOrderType from "../../models/SortOrderType";

interface SearchResultPageHeaderProps {
    count: number;
    period: PeriodType;
    sortOrder: SortOrderType;
    onSortOrderChanged: (sortOrder: SortOrderType) => void;
    onPeriodChanged: (period: PeriodType) => void;
}

const periodToTextDictionary = {
    '1h': 'ბოლო საათი',
    '2h': 'ბოლო 2 საათი',
    '3h': 'ბოლო 3 საათი',
    '1d': 'ბოლო დღე',
    '2d': 'ბოლო 2 დღე',
    '3d': 'ბოლო 3 დღე',
    '1w': 'ბოლო კვირა',
    '2w': 'ბოლო 2 კვირა',
    '3w': 'ბოლო 3 კვირა'
}

const sortOrderToTextDictionary = [
    'თარიღი კლებადი', 'თარიღი ზრდადი', 
    'ფასი კლებადი', 'ფასი ზრდადი', 
    'გარბენი კლებადი', 'გარბენი ზრდადი'
]

const periodOptions: PeriodType[] = ['1h', '2h', '3h', '1d', '2d', '3d', '1w', '2w', '3w'];
const sortOrderOptions = [1, 2, 3, 4, 5, 6];

const SearchResultPageHeader: React.FC<SearchResultPageHeaderProps> = props => {
    return (<div>
        <div>
            {props.count} განცხადება
        </div>
        <div>
            <div>
                <select 
                    value={props.period}
                    onChange={(e) => props.onPeriodChanged(e.target.value as PeriodType)}
                >
                    {periodOptions.map((option, id) => (
                        <option key={id} value={option}>
                            {periodToTextDictionary[option]}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <select 
                    value={props.sortOrder}
                    onChange={(e) => props.onSortOrderChanged(+e.target.value as SortOrderType)}
                >
                    {sortOrderOptions.map((option) => (
                        <option key={option} value={option}>
                            {sortOrderToTextDictionary[option - 1]}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    </div>
)}

export default SearchResultPageHeader;
