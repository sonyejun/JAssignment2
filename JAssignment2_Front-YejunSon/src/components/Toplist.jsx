import { useState, useEffect } from 'react';
import Listelement from './Listelement';
import {fetchWithBaseUrl} from '../api'

export default function Toplist({section}) {
    const sectionName = section;
    const [latestData, setLatestData] = useState([]);
    
    useEffect(() => {
        const getLatestData = async () => {
            try {
                const api = sectionName === 'Recipes' ? 'latestrecipes' : 'latestbooks';
                const data = await fetchWithBaseUrl(api);
                console.log(data);

                setLatestData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getLatestData();
    }, []);


    
    return (
        <ul>
            {latestData.map((data, index) => (
                <Listelement
                    section = {section}
                    key={index}
                    data={data}
                />
            ))}
        </ul>
    )
};