import React from 'react';
import Giscus from '@giscus/react';

export default function GiscusComments() {
  return (
    <Giscus
      id="comments"
      repo="OWNER/REPO"
      repoId="REPO_ID"
      category="General"
      categoryId="CATEGORY_ID"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
