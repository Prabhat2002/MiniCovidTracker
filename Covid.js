import React, { useEffect, useState } from 'react';
import './index.css'
const Covid = () => {
    const [oldData, newData] = useState([]);
    const covidDATA = async () => {
        try {
            const resp = await fetch('https://api.covid19india.org/data.json');
            const realdata = await resp.json();
            newData(realdata.statewise[0]);
        } catch (error) {
            console.log('Error');
        }
    }
    useEffect(() => {
        covidDATA();
    }, []);
    return (
        <>
            <div className='Card1'>
                <h3>Total Confirmed</h3>
                <h2>{oldData.confirmed}</h2>
            </div>
            <div className='Card2'>
                <h3>Total Recovered</h3>
                <h2>{oldData.recovered}</h2>
            </div>
            <div className='Card3'>
                <h3>Total Active</h3>
                <h2>{oldData.active}</h2>
            </div>
            <div className='Card4'>
                <h3>Total Death</h3>
                <h2>{oldData.deaths}</h2>
            </div>
            <div className='Card5'>
                <h3>Last Updated</h3>
                <h2>{oldData.lastupdatedtime}</h2>
            </div>
        </>
    )
};
export default Covid;