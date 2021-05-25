import Head from 'next/head'
import Image from 'next/image'
import Header from "../comps/Header"
import Footer from "../comps/Footer"
import styles from '../styles/Home.module.css'

import Card from "../comps/Card";

export default function Tools() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ka Ho Lau</title>
        <meta name="description" content="KaHoLau, games, develoepr, engineer, computer graphic, app, web, 3d, 2d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <main className={styles.main}>
            <div className="placeholder"></div>
            <div className="section">
                <div className="container">
                    <div className="wrap">
                        <h1 className="font-lg vert-margin-top">Tools</h1>
                        <h2 className="grey">life is short. don't repeating your works anymore.</h2>
                        <div className="push"></div>
                        <div className="cards">
                            <Card title="Test" image="url(/images/test.png)" category="Tool"/>
                            <Card title="Test" image="url(/images/test.png)" category="Tool"/>
                            <Card title="Test" image="url(/images/test.png)" category="Tool"/>
                            <Card title="Test" image="url(/images/test.png)" category="Tool"/>
                            <Card title="Test" image="url(/images/test.png)" category="Tool"/>
                            <Card title="Test" image="url(/images/test.png)" category="Tool"/>
                            <Card className="empty"/>
                            <Card className="empty"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="push"></div>
        </main>
        <Footer/>
    </div>
  )
}
