
import styles from "./searchResult.module.css";

const SearchResult = ({result}) => {

    const resultItems = result.data;
    return (
        <div className={styles.container}>
            <h1>Search Result</h1>
            {
                resultItems?.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>{item.author}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default SearchResult;