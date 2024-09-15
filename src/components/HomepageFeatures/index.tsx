import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About Me',
    description: (
      <>
        Tech enthusiast with can-do attitude. Support me in <a className={styles.link} href="https://www.patreon.com/kaholau" target="_blank" rel="noopener noreferrer">Patreon</a> or
         give me a star on <a className={styles.link} href="https://github.com/laukaho/" target="_blank" rel="noopener noreferrer">GitHub</a>
      </>
    ),
  },

];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
