'use client'
import Image from 'next/image'
import styles from './styles/page.module.css'
import KodrConnect from './components/walletConnect';
import hatching_rex_animation from './components/hatching';


export default function Home() {
  const animation = hatching_rex_animation();

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <div className={styles.connect}>
        <h1 className={styles.title}>
          Rexagotchi: {animation}
        </h1>
          <KodrConnect />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Kodr'}
          <span className={styles.logo}>
            <Image src="/kodr.svg" alt="Kodr Logo" width={15} height={15} />
          </span>
        </a>
      </footer>
    </div>
  )
}
