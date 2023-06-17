import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CodeBlock = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;