import React, {memo, useState} from 'react';

const Categories = memo(function Categories({activeCategory, items, onClickItem}) {

    const onSelectItem = (index) => {
        onClickItem(index);
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items && items.map((el, index) => (
                    <li className={activeCategory === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${el}_${index}`}>{el}</li>)
                )}
            </ul>
        </div>
    );


})

export default Categories;
