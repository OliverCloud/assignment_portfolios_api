'use client';

import GalleryImages from '../galleryImages/galleryImages';
import styles from './galleriesCollection.module.css';
import { useEffect, useState } from 'react';

const GalleriesCollection = () => {

    const [data, setData] = useState([]); // Vi sætter data state til at være et tomt array som udgangspunkt.

    const [galleryName, setGalleryName] = useState('obscura');  // Vi sætter galleryName state til at være "obscura" som udgangspunkt.

    useEffect(() => {

        // Vi opretter en "async" funktion og udnytter dermed "await" til vores fetch.
        const fetchData = async () => {

            // Vi fetcher fra vores endpoint.
            const response = await fetch(`http://localhost:3000/api/galleries`);

            // Vi omdanner vores response fra tekst til json.
            const result = await response.json();

            // Vi opdatere data state, ved hjælp af setData() useState hook´en.
            setData(result);

        }

        // Vi kalder fetch data funktionen.
        fetchData();

    }, []);


    return (
        <div className={styles.container}>

        <div className={styles.header}>
            <h1>{galleryName} Collection</h1>
            <p>Fetching Data</p>
        </div>

        {/* Vi udskriver indholdet af data */}
        {data.map((item, index) => (
            <button key={index} onClick={() => setGalleryName(item.name)}>{item.name}</button>
        ))}

        <GalleryImages gallery={galleryName}/>
        </div>
        
    )
}
export default GalleriesCollection;