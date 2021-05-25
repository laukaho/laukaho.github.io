import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

import Header from "../comps/Header";
import Footer from "../comps/Footer";
import Banner from "../comps/Banner";
import Card from "../comps/Card";
import Lab from "../comps/Lab";

import {POSTS_PATH, postFilePaths} from "../utils/mdxUtils"
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Home({posts}) {
  console.log(posts)
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
            <Banner />
          </div>
        </div>
        <div className="push"></div>
        <div className="section">
          <div className="container">
            <div className="wrap">
              <h1 className="font-md aqua vert-margin">Explore</h1>
              <div className="cards">
                <Card title="Test" image="url(/images/test.png)" category="App" description="A point-and-click mystery set in the bible belt of Sweden"/>
                <Card title="Test" image="url(/images/test.png)" category="App" description="A point-and-clic"/>
                <Card title="Test" image="url(/images/test.png)" category="App" description="A point-and-click mystery set weden"/>
                <Card title="Test" image="url(/images/test.png)" category="App" description="A point-and-cliclt of Sweden"/>
              </div>
            </div>
          </div>
        </div>
        <div className="push"></div>
        <div className="section">
          <div className="container">
            <div className="wrap">
              <h1 className="font-md aqua vert-margin">Labs</h1>
              <div className="labs">
                {posts.map((post) => (
                  <Lab key={post.filePath} post={post} path={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`} />
                ))}
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

export function getStaticProps() {

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}