import styled from "styled-components";

import DocsLayout from "../layouts/DocsLayout";

import CodeBlock from "./CodeBlock";
import ReactMarkdown from "react-markdown";

// const wrapMarkup = html => ({
//   __html: html
// });

const DocsContent = ({ content, subsection }) => {
  console.log(content);
  return (
    <DocsLayout subsection={subsection}>
      <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
      {/* <div className="markdown" dangerouslySetInnerHTML={wrapMarkup(content)} /> */}
    </DocsLayout>
  );
};

export default DocsContent;
