
import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import useDonationData from '../Hooks/useDonationData';


const Home = () => {
    const [value, setValue] = useState('');
    const { data, loading } = useDonationData();
    const [filteredData, setFilteredData] = useState([]);
 
    useEffect(() => {
    setFilteredData(data)
    
    
    }, [data])
    
    
    // console.log(value)
    const handleSearch = () => {
        if (value.trim() != '') {
            const filtered = data.filter(item => item.category.toLowerCase().includes(value.toLowerCase()));
            setFilteredData(filtered)
        }
        else {
            setFilteredData(data)
        }
        
    }
    return (
        <div>
            <Banner setValue={setValue} handleSearch={handleSearch}></Banner>
            <CategoryList filteredData={filteredData}></CategoryList>
        </div>
    );
};

export default Home;