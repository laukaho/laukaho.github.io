import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

import Header from "../../comps/Header";
import Footer from "../../comps/Footer";

import styles from '../../styles/LabLayout.module.css'
import { SRLWrapper } from "simple-react-lightbox";



export default function PostPage({ source, frontMatter }) {

    let tags = frontMatter.tags.split(",");
    const options = {
      settings: {
        disableKeyboardControls: true,
        disablePanzoom: true,
        disableWheelControls: true,
        lightboxTransitionSpeed: 0.01,
        slideTransitionSpeed: 0.001,
      },
      buttons: {
        showAutoplayButton: false,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: false,
        showPrevButton: false,
        showThumbnailsButton: false,
      },
      caption: {
        showCaption: false
      },
      thumbnails:{
        showThumbnails: false
      }
    };
    return (
    <div>
        <Head>
        <title>Ka Ho Lau</title>
        <meta name="description" content="KaHoLau, games, develoepr, engineer, computer graphic, app, web, 3d, 2d" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <SRLWrapper options={options}>
        <main className="main blog">
          <div className="placeholder"></div>
            <div className="section">
              <div className="push"></div>
                <div className={styles.container}>
                    <div className="wrap">
                      <h1 className={styles.title}>
                        {frontMatter.title}
                      </h1>

                      <div className={styles.info}>
                        <div className={styles.author}>{frontMatter.author}</div>
                        <div className={styles.date}>{frontMatter.date}</div>
                      </div>
                        <div className={styles.banner}>
                          <img src="/images/test.png"></img>
                        </div>
                      <div className={styles.content}>
                        <MDXRemote {...source} />
                      </div>
                      <div className={styles.tags}>
                        {tags.map((tag) => (
                            <div key={tag.trim()} className={styles.tag}>
                              {tag.trim()}
                            </div>
                          ))}
                      </div>
                    </div>
                </div>
            </div>
            <div className="push"></div>
        </main>
        </SRLWrapper>
        <Footer/>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}