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

export default function Home({labs, latests}) {
  console.log(labs)
  console.log(latests)

  var indents = [];
  for (var i = 0; i < 4 - latests.length; i++) {
    indents.push(<Card key={i} className="empty"/>);
  }
  
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
                {latests.map((post) => (
                  <Card key={post.filePath} title="Test" image="url(/images/test.png)" category="App" description="A point-and-click mystery set in the bible belt of Sweden"/>
                ))}
                {indents}
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
                {labs.map((post) => (
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

  let labs = posts.filter(post => post.data.type == "blog")
  let latests = posts.filter(post => post.data.type == "product")

  latests.sort((ele1, ele2) => { 
    if(ele1.data.date > ele2.data.date){
      return -1;
    }
    if(ele1.data.date < ele2.data.date){
      return 1;
    }
    return 0;
  })


  return { props: { labs, latests } }
}