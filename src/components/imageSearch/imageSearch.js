"use client"
import { useSearchParams } from "next/navigation";
import SearchField from "../searchField/searchField";
import SearchResult from "../searchResult/searchResult";
import styles from "./imageSearch.module.css";
import { useEffect, useState } from "react";

const ImageSearch = () => {

    const searchParams = useSearchParams();
    const [result, setResult] = useState([]);

    useEffect(() => {

        console.log('use effekt')
        const Params = new URLSearchParams(searchParams);
        fetch('http://localhost:3000/api/images?searchterm=' + Params.get('searchterm'))
        .then(res => res.json())
        .then(data => {

            console.log('asd', data);

            if(data[0].data.length > 0) {

                setResult(data[0]);
            }
            

        });

    }, [searchParams]);

    console.log('restult',result);
    
    return (
        <div className={styles.container}>
            <h1>Image Search {result.length}</h1>
            <SearchField />
            
            <SearchResult result={result}/>
       
        </div>
    )
}
export default ImageSearch;