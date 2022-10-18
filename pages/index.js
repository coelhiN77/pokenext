import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import Image from 'next/image'
import Footer from '../Components/Footer'


export async function getStaticProps() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"                
      }}>
        <Image 
          src="/images/wallpaper_pok.jpg"
          alt="wallpaper about"
          layout="fill"
          objectFit='cover'
        />
      </div>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poké<span>mon</span></h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Footer />
    </>
  )
}
