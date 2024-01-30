'use client';
import AuthorImages from '../authorImages/authorImages';
import DebugJson from '../dev/debugJson/debugJson';
import styles from './authorsCollection.module.css';
import { useEffect, useState } from 'react';

const AuthorsCollection = () => {

    const [data, setData] = useState([]); // Vi sætter data state til at være et tomt array som udgangspunkt.

    useEffect(() => {

        // Vi opretter en "async" funktion og udnytter dermed "await" til vores fetch.
        const fetchData = async () => {

            // Vi fetcher fra vores endpoint.
            const response = await fetch(`http://localhost:3000/api/authors`);

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
            <h1>Authors Collection</h1>
            <p>Fetching Data</p>
        </div>

        {/* Vi udskriver indholdet af data */}
        {data.map((item, index) => (
            <DebugJson key={index} content={item.author} /> // Bemærk at vi skriver item.author, vi kunne vælge at skrive hele objektet ud med item 
        ))}

        <AuthorImages name={'Lena Riis'} authors={data}/>

        </div>
        
    )
}
export default AuthorsCollection;