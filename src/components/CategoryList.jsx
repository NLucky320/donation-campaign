import React from 'react';
import useDonationData from '../Hooks/useDonationData';
import Cards from './Cards';

const CategoryList = () => {
    const { data, loading } = useDonationData();
    console.log(data)
    return (
        <div className='mt-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                data.map(card=> <Cards key={card.id} card={card} ></Cards>)
          }
        </div>
    );
};

export default CategoryList;