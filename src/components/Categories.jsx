import React from 'react';

function Categories({items}) {

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((el, index) => <li key={`${el}_${index}`}>{el}</li>)}
            </ul>
        </div>
    );

}

export default Categories;
