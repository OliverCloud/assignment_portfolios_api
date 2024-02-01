
import styles from "./page.module.css";
import ImageSearch from "@/components/imageSearch/imageSearch";


const Page = () => {
    return (
        <main className={styles.container}>
            <ImageSearch />
        </main>
    )
}
export default Page;