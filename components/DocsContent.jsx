import styled from "styled-components";

import DocsLayout from "../layouts/DocsLayout";

import { mobileBreakpoint } from "../constants";

const MarkdownStyles = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    width: 65%;
  }
`;

import ButtonBar from "./ButtonBar";

import CodeBlock from "./CodeBlock";
import ReactMarkdown from "react-markdown";

// const wrapMarkup = html => ({
//   __html: html
// });

const DocsContent = props => {
  return (
    <DocsLayout
      subsection={props.subsection}
      renderProps={extraProps => {
        return (
          <>
            <MarkdownStyles>
              <ReactMarkdown
                source={props.content}
                renderers={{ code: CodeBlock }}
              />
              <ButtonBar {...extraProps} {...props} />
            </MarkdownStyles>
          </>
        );
      }}
    >
      {/* <ReactMarkdown source={props.content} renderers={{ code: CodeBlock }} /> */}
      {/* <div className="markdown" dangerouslySetInnerHTML={wrapMarkup(content)} /> */}
    </DocsLayout>
  );
};

export default DocsContent;
