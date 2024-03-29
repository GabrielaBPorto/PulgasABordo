import Head from 'next/head'
import { Button, Table } from 'antd'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Pulgas a bordo</title>
        <meta name="description" content="Estoque do bar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <div className="App">
      <img src="https://www.example.com/random-image.jpg" alt="Random" />
      <Button type="primary" style={{ margin: '16px' }}>
        Update Stock
      </Button>
      <Button type="default" style={{ margin: '16px' }}>
        Reduce Stock
      </Button>
      <table> </table>
      </div>
      </main>
    </>
  )
}
