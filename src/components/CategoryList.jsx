import React from 'react';

import Cards from './Cards';

const CategoryList = ({filteredData}) => {

    console.log(filteredData)
    return (
        <div className='mt-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                filteredData.map(card=> <Cards key={card.id} card={card} ></Cards>)
          }
        </div>
    );
};

export default CategoryList;