import React, {memo} from 'react';
import PropTypes from "prop-types";

const Categories = memo(function Categories({activeCategory, items, onClickCategory}) {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {items && items.map((el, index) => (
                    <li className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickCategory(index)}
                        key={`${el}_${index}`}>{el}</li>)
                )}
            </ul>
        </div>
    );


})
Categories.propTypes = {
 activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCategory: PropTypes.func

};
Categories.defaultProps = {
    activeCategory: null,
    items: []
};
export default Categories;
