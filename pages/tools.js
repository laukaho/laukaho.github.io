import React from "react"

import Head from 'next/head'
import Image from 'next/image'
import Header from "../comps/Header"
import Footer from "../comps/Footer"

import Card from "../comps/Card";

import {POSTS_PATH, postFilePaths} from "../utils/mdxUtils"
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
export default function Tools({posts}) {
  var indents = [];
  for (var i = 0; i < 4 - posts.length%4; i++) {
    indents.push(<Card key={i} className="empty"/>);
  }
  
  return (
    <div>
      <Head>
        <title>Ka Ho Lau</title>
        <meta name="description" content="KaHoLau, games, develoepr, engineer, computer graphic, app, web, 3d, 2d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <main className="main">
            <div className="placeholder"></div>
            <div className="section">
                <div className="container">
                    <div className="wrap">
                        <h1 className="font-lg vert-margin-top">Tools</h1>
                        <h2 className="grey">life is short. don't repeating your works anymore.</h2>
                        <div className="push"></div>
                        <div className="cards">
                          {posts.map((post) => (
                            <Card key={post.filePath} title="Test" image="url(/images/test.png)" category="App" description="A point-and-click mystery set in the bible belt of Sweden"/>
                          ))}
                          {indents}
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

  var posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)
      return {
        content,
        data,
        filePath,
      }
  }).filter(post => post.data.category == "tool")

  
  posts.sort((ele1, ele2) => { 
    if(ele1.data.date > ele2.data.date){
      return -1;
    }
    if(ele1.data.date < ele2.data.date){
      return 1;
    }
    return 0;
  })

  return { props: { posts } }
}

