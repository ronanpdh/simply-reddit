import React, { useState, useEffect } from 'react';
// import Home from '../../pages/Home/Home';

function useFetchData(url) {

    const [data, setData] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch("https://www.reddit.com/r/all.json", {
                method: 'GET',     
            }); 
            
            const dataResponse = await response.json(); 
            setData(dataResponse.data.children);  
            console.log(dataResponse); 

        } catch (error) {
            console.log('Unable to fetch Reddit Data', error); 
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return data; 
}

export default useFetchData; 
