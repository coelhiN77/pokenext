import Image from 'next/image'
import styles from '../styles/About.module.css'
import Footer2 from '../Components/Footer2'

export default function About() {
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
            src="/images/wallpaper_about.png"
            alt="poke wallpaper"
            layout="fill"
            objectFit='cover'
          />
        </div>
      <div className={styles.container}>
        <h1>About the project</h1>
        <p>The Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon of the world.</p>
        <div className={styles.half_color}>
            <span class="half_color" attribute="P">P</span>
            <span class="half_color" attribute="r">r</span>
            <span class="half_color" attribute="o">o</span>
            <span class="half_color" attribute="j">j</span>
            <span class="half_color" attribute="e">e</span>
            <span class="half_color" attribute="c">c</span>
            <span class="half_color" attribute="t">t</span>

            <span class="half_color" attribute="ﾠ">ﾠ</span>

            <span class="half_color" attribute="c">c</span>
            <span class="half_color" attribute="r">r</span>
            <span class="half_color" attribute="e">e</span>
            <span class="half_color" attribute="a">a</span>
            <span class="half_color" attribute="t">t</span>
            <span class="half_color" attribute="e">e</span>
            <span class="half_color" attribute="d">d</span>

            <span class="half_color" attribute="ﾠ">ﾠ</span>

            <span class="half_color" attribute="b">b</span>
            <span class="half_color" attribute="y">y</span>

            <span class="half_color" attribute="ﾠ">ﾠ</span>

            <span class="half_color" attribute="c">c</span>
            <span class="half_color" attribute="o">o</span>
            <span class="half_color" attribute="e">e</span>
            <span class="half_color" attribute="l">l</span>
            <span class="half_color" attribute="h">h</span>

            <span class="half_color" attribute="i">i</span>
            <span class="half_color" attribute="N">N</span>

            <span class="half_color" attribute="ﾠ">ﾠ</span>
            
            <span class="half_color" attribute="W">W</span>
            <span class="half_color" attribute="e">e</span>
            <span class="half_color" attribute="b">b</span>
          </div>
        <Image 
          src="/images/charizard.png"
          width="300"
          height="300"
          alt="Charizard"
        />
      </div>
    </section>
  </>
  )
}