'use client'
import { useDebouncedCallback } from "use-debounce";
import styles from "./searchField.module.css";
import React from "react";
import { usePathname,  useRouter, useSearchParams } from "next/navigation";


const SearchField = () => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const onChangeHandler = useDebouncedCallback((e) => {

        let searchterm = e.target.value;

        const params = new URLSearchParams(searchParams);
        if (searchterm) {
            params.set('searchterm', searchterm);
        } else {
            params.delete('searchterm');
        }

        console.log(params.toString());

        replace(`${pathName}?${params.toString()}`);

    }, 300);

    return (
        <div className={styles['container']}>
            <input className={styles['search-field']} type="text" placeholder="Search" onChange={onChangeHandler} />
            <button className={styles.btn} type="submit">Search</button>
        </div>
    )
}
export default SearchField;