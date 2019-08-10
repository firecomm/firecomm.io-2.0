import styled from "styled-components";

import DocsLayout from "../layouts/DocsLayout";

const wrapMarkup = html => ({
  __html: html
});

const DocsContent = ({ content }) => {
  return (
    <DocsLayout>
      <div className="markdown" dangerouslySetInnerHTML={wrapMarkup(content)} />
    </DocsLayout>
  );
};

export default DocsContent;
