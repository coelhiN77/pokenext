import Image from 'next/image'
import styles from '../../styles/Pokemon.module.css'
import Link from 'next/link'

export const getStaticPaths = async() => {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }

}

export const getStaticProps = async(context) => {
  const id = context.params.pokemonId
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data },
  }
}

export default function Pokemon({ pokemon }) {
  return (
    <>
      <section className={styles.body}>
        <div style={{
            zIndex: -1,
            position: "fixed",
            width: "100%",
            height: "100%"                
          }}>
            <Image 
              src="/images/wallpaper_details1.jpg"
              alt="details"
              layout="fill"
              objectFit='cover'
            />
          </div>
          <div className={styles.pokemon_container}>
            <div className={styles.title}>
              <h1>{pokemon.name}</h1>
            </div>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              width="310"
              height="300"
              alt={pokemon.name}
            />
            <div className={styles.number}>
              <h3>Number: #{pokemon.id}</h3>
            </div>
            <div>
              <div className={styles.type}>
                <h3>Type:</h3>
              </div>
              <div className={styles.types_container}>
                {pokemon.types.map((item, index) => (
                  <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                ))}
              </div>
            </div>
            <div className={styles.data_container}>
              <div className={styles.data_height}>
                <h4>Height:</h4>
                <p>{pokemon.height * 10} cm</p>
              </div>
              <div className={styles.data_weight}>
                <h4>Weight:</h4>
                <p>{pokemon.weight / 10} kg</p>
              </div>
            </div>

          <div className={styles.back}>
            <Link href="/">
                <a>Back</a>
            </Link>
          </div>
          </div>
      </section>
    </>
  )
}