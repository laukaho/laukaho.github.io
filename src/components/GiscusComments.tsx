import React from 'react';
import Giscus from '@giscus/react';

export default function GiscusComments() {
  return (
    <Giscus
      id="comments"
      repo="laukaho/laukaho.github.io"
      repoId="MDEwOlJlcG9zaXRvcnkzNzU0Mzc0NTE="
      category="General"
      categoryId="DIC_kwDOFmC4i84Crkwm"
      mapping="url"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
