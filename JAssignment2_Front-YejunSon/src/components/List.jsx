import { useState, useEffect } from 'react';
import Listelement from './Listelement';
import {fetchWithBaseUrl} from '../api'

export default function List({section}) {
    const sectionName = section;
    const [list, setList] = useState([]);
    
    useEffect(() => {
        const getList = async () => {
            try {
                const api = sectionName === 'Recipes' ? 'recipes' : 'books';
                const data = await fetchWithBaseUrl(api);
                console.log(data);

                setList(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getList();
    }, []);


    
    return (
        <ul>
            {list.map((data, index) => (
                <Listelement
                    section = {section}
                    key={index}
                    data={data}
                />
            ))}
        </ul>
    )
};