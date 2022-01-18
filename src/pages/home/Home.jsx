import SearchInput from "../../components/SearchInput/SearchInput"
import styles from "./Home.module.css"

function Home() {
  return (
    <>
      <main>
        <h1>Home</h1>
        <SearchInput isHome={true} />
      </main>
      <section>
        <span>Popular listings</span>
        <article>
          <span className={styles.listings__title}>Buy</span>
        </article>
        <article>
          <span className={styles.listings__title}>Rent</span>

        </article>
      </section>
    </>
  )
}

export default Home
