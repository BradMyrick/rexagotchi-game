'use client'
import Image from 'next/image'
import styles from './styles/page.module.css'
import KodrConnect from './components/walletConnect';
import HatchingRexAnimation from './components/hatching';


export default function Home() {
  const animation = HatchingRexAnimation();

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <div className={styles.connect}>
          <h1 className={styles.title}>
            Rexagotchi: 
          </h1>
          <KodrConnect />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://kodr.pro"
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
