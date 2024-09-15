import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <div className={clsx(styles.avatar)}>
            <img src={useBaseUrl('/img/avatar.jpg')} />
          </div>
        </Heading>
        <Heading as="h1">{siteConfig.title}</Heading>
        <Heading as="h2"><i>Suffer to learn.</i></Heading>
        <Heading as="h3" className={clsx(styles.social)}>
          <a href="https://www.linkedin.com/in/ka-ho-lau-10872982/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-xl" ></i>
          </a>
          <a href="https://github.com/laukaho/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-xl" ></i>
          </a>
          <a href="https://x.com/kaholau_dev" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter fa-xl" ></i>
          </a>
          <a href="https://www.patreon.com/kaholau" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-patreon fa-xl"></i>
          </a>
        </Heading>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Home | ${siteConfig.title}">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
