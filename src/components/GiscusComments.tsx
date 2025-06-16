import React from 'react';
import Giscus from '@giscus/react';

export default function GiscusComments(): JSX.Element {
  return (
    <Giscus
      repo="laukaho/laukaho.github.io"
      repoId="REPO_ID"
      category="General"
      categoryId="CATEGORY_ID"
      mapping="pathname"
      reactionsEnabled="1"
      theme="preferred_color_scheme"
    />
  );
}
