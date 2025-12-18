import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI & Machine Learning',
    description: (
      <>
        Focused on AI enablement, Vector Search, and helping developers build smarter applications with MongoDB Atlas and modern LLM workflows.
      </>
    ),
  },
  {
    title: 'Developer Relations',
    description: (
      <>
        Leading Strategic Developer Advocates at MongoDB, creating comprehensive learning resources, workshops, and technical content for enterprise developers.
      </>
    ),
  },
  {
    title: 'Technical Leadership',
    description: (
      <>
        25+ years of experience spanning enterprise infrastructure, hands-on engineering, and technical mentorship. Proven ability to translate complex technologies into practical solutions.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

