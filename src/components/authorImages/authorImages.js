"use client"

import { useEffect, useState } from "react";
import DebugJson from "../dev/debugJson/debugJson";


const AuthorImages = ({name, authors}) => {

    const [data, setData] = useState([]); // Vi sætter data state til at være et tomt array som udgangspunkt.

    const [authorName, setAuthorName] = useState(name);

    useEffect(() => {

        // Vi opretter en "async" funktion og udnytter dermed "await" til vores fetch.
        const fetchData = async () => {

            // Vi fetcher fra vores endpoint.
            const response = await fetch(`http://localhost:3000/api/images?author=${authorName}`);

            // Vi omdanner vores response fra tekst til json.
            const result = await response.json();

            // Vi opdatere data state, ved hjælp af setData() useState hook´en.
            setData(result);

        }

        // Vi kalder fetch data funktionen.
        fetchData();

    }, [authorName]);

    return (
        <div >
            <div>
                <h1>{authorName} Images</h1>

                {authors.map((item, index) => (
                    <button key={index} onClick={() => setAuthorName(item.author)}>{item.author}</button>
                ))}

            </div>

            {data.map((item, index) => (
                <DebugJson key={index} content={item} /> // Bemærk at vi skriver item.author, vi kunne vælge at skrive hele objektet ud med item 
            ))}


        </div>
    )
}
export default AuthorImages;