import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <main>
          <h1 className="title page">
          <Link href='tracklists/the-college-dropout'>
            Check out our favorite albums!
          </Link>
          </h1>
          
        </main>
      </div>
    </>
  )
}
