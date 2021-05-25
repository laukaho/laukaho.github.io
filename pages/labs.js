import Head from 'next/head'
import Image from 'next/image'
import Header from "../comps/Header"
import Footer from "../comps/Footer"
import styles from '../styles/Home.module.css'

import Lab from "../comps/Lab";

import {POSTS_PATH, postFilePaths} from "../utils/mdxUtils"
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Labs({posts}) {
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
                        <h1 className="font-lg vert-margin-top">Labs</h1>
                        <h2 className="grey">get my hands dirty! that's how creative comes.</h2>
                        <div className="push"></div>
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
