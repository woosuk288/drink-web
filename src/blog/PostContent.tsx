import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

type PostContentProps = {
  content: any[];
};

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 100px 0;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p,
  blockquote,
  ul ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    line-height: 1.5;
  }

  * + h1 {
    margin-top: 80px;
  }
  * + h2 {
    margin-top: 64px;
  }
  * + h3 {
    margin-top: 48px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-weight: 800;
    margin-bottom: 30px;
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 40px 16px;
    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

function PostContent({ content }: PostContentProps) {
  // console.log('content: ', content);

  return (
    <MarkdownRenderer>
      {content.map((entry, index) => {
        if (entry.type === 'text') {
          return <ReactMarkdown key={index}>{entry.value}</ReactMarkdown>;
        } else if (entry.type === 'image') {
          return (
            <a
              href={entry.value}
              target="_blank"
              rel="noreferrer"
              key={'image  : ' + index}
            >
              <img src={entry.value} alt="attached image" />
            </a>
          );
        }
      })}
    </MarkdownRenderer>
  );
}

export default PostContent;
