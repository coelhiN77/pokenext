import styles from '../styles/Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="170"
        height="170"
        alt={pokemon.name}
      />
      <div className={styles.id}>
        <p>{pokemon.name} - #{pokemon.id}</p>
      </div>

      <div className={styles.title}>
      </div>

        <Link href={`/pokemon/${pokemon.id}`}>
          <a className={styles.btn}>▶ DETAILS</a>
        </Link>
    </div>
  )
}