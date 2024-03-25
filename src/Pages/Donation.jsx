import React, { useState } from 'react';

import useLocalStorage from '../Hooks/useLocalStorage';

import DonationCard from './Shared/DonationCard';
import { Button, ButtonGroup } from '@material-tailwind/react';

const Donation = () => {
    const { localData } = useLocalStorage();
    const [showAll,setShowAll]=useState(false)
    // console.log(localData)
    const handleShowAll = () => {
        setShowAll(!showAll);
    }

    if (localData.length === 0) {
        return <p>no data found</p>
    }
    return (
        <>
        <div className='grid grid-cols-2 gap-8 max-w-6xl mx-auto mt-6'>
            {
                localData.slice(0,showAll?localData.length:4).map(data=>(<DonationCard key={data.id} data={data}></DonationCard>))
          }  
            </div>
            {
                localData.length > 4 ? ( 
                    <ButtonGroup color="green" className='text-center mt-6 items-center justify-center'>
                <Button onClick={handleShowAll}>{ !showAll?'Show All':'Show Less'}</Button>
       
      </ButtonGroup>) :null
              }
        </>
    );
};

export default Donation;