import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image 
            src="/images/pokeball.png"
            width="45"
            height="45"
            alt="PokeNext"
          />
          <div className={styles.half_color}>
            <span class="half_color" attribute="P">P</span>
            <span class="half_color" attribute="o">o</span>
            <span class="half_color" attribute="k">k</span>
            <span class="half_color" attribute="e">e</span>
            <span class="half_color" attribute="N">N</span>
            <span class="half_color" attribute="e">e</span>
            <span class="half_color" attribute="x">x</span>
            <span class="half_color" attribute="t">t</span>
          </div>
        </div>
        <nav>
          <ul className={styles.link_items}>
            <li>
              <Link href="/">
                  <a>Home</a>
                </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}