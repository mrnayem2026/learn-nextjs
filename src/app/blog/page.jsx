import Link from "next/link";
import React from "react";
import CodeBlock from "../component/CodeBlock";

const BlogPage = () => {
  const code = `
import React from 'react';
const NewComponent = () => (
    <div>I am a new component</div>
);
export default NewComponent;

  `;
  const code2 = `
<div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
  `;

  const code3 = `
  div>ul>li*5
  `;

  const code4 = `
  div>ul>li.item#id$*5.
  `;

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-center text-7xl font-serif font-bold">
        5 VSCode extensions/tricks to <br /> speed up React/Nextjs <br />{" "}
        development workflow
      </h1>
      <div className="flex justify-center items-center  h-screen">
        <img
          src="https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="max-w-full max-h-[900px]"
          alt=""
        />
      </div>

      {/* content of blog  */}
      <div>
        {/* top content  */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-justify text-3xl font-sans py-5  ">
            If you are using Visual Studio Code, there are a couple of <br />
            extensions and tricks that I think can significantly improve <br />
            development time and make the process a much more enjoyable <br />
            experience. In this article, I will be sharing 5 extensions/tricks I{" "}
            <br />
            am currently using in my React/Nextjs project within VSCode. <br />
          </p>
          <div>
            <ul className="underline list-decimal text-xl font-bold ">
              <li>
                <Link href="https://medium.com/geekculture/5-vscode-extensions-tricks-to-speed-up-react-nextjs-development-workflow-1b3b5773840d#5dd5">
                  ES7+ React/Redux/React-Native snippets
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/geekculture/5-vscode-extensions-tricks-to-speed-up-react-nextjs-development-workflow-1b3b5773840d#d69a">
                  Emmet
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/geekculture/5-vscode-extensions-tricks-to-speed-up-react-nextjs-development-workflow-1b3b5773840d#5be2">
                  Tailwind CSS Intellisense
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/geekculture/5-vscode-extensions-tricks-to-speed-up-react-nextjs-development-workflow-1b3b5773840d#1b40">
                  Prettier
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/geekculture/5-vscode-extensions-tricks-to-speed-up-react-nextjs-development-workflow-1b3b5773840d#e54e">
                  Auto rename tag
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 1st extensions  */}
        <div>
          <h1 className="text-5xl font-black text-center py-6">
            1. ES7+ React/Redux/React-Native snippets
          </h1>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl">
              This extension provides easy access to commonly used snippets in a{" "}
              <br />
              React project. For example, to create a new functional component{" "}
              <br />
              one have to usually copy and paste or type out the following:
            </p>
            <div className="py-6">
              <CodeBlock language="javascript" code={code}></CodeBlock>
            </div>
            <p className="text-xl">
              With this extension, you can easily create a new component with
              rafce abbreviation.
            </p>
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/1*ydNsaXZiZBtEoxPJK5QGQw.gif"
              alt="Code 1"
              className="py-3"
              srcset=""
            />

            <p className="text-xl py-12">
              If you work with Redux, there are a lot of boilerplate codes that{" "}
              <br />
              need to be written to connect the component to the store. With the{" "}
              <br />
              extension, you can save a lot of typing or copy-pasting using the
              <span className="bg-gray-300 p-1 m-2 rounded-lg">
                {" "}
                rfcredux
              </span>{" "}
              abbreviation.
            </p>
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/1*nSYdau-OFSbwL2XV3q1QHA.gif"
              alt="Code 1"
              className="py-3"
              srcset=""
            />
          </div>
        </div>

        {/* 2nd extensions  */}
        <div className="py-12">
          <h1 className="text-5xl font-black text-center py-6">2. Emmet</h1>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl">
              Emmet, specifically Emmet abbreviation is a CSS-path-liked special{" "}
              <br />
              expression that can be parsed in the IDE and transformed into a{" "}
              <br />
              structured code block. For example, in order to create a div with{" "}
              <br />
              an unordered list and 5 list elements inside, the HTML code looks
              something like below:
            </p>
            <div className="py-9">
              <CodeBlock language="javascript" code={code2}></CodeBlock>
            </div>
            <p className="text-xl">
              With Emmet abbreviation and expansion, we can do so with the
              following expression: <code>{code3}</code>
            </p>
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/1*t2LoUL-x5AvSJJlX-20vPA.gif"
              alt="Code 1"
              className="py-3"
              srcset=""
            />

            <p className="text-xl py-12">
              Expanding on that, imagine now you need to add a class name to{" "}
              <br />
              each of the li element and a unique id for each item, you can do{" "}
              <br />
              so with the abbreviation: <code>{code4}</code>
            </p>
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/1*RHPsIaC-6zCKlFySCkqvlw.gif"
              alt="Code 1"
              className="py-3"
              srcset=""
            />
            <p className="text-xl py-12">
              There is no extension needed for Emmet snippets and expansion as <br />
              it is built right into VSCode now. You can refer to the cheat <br />
              sheet here for more examples of using Emmet abbreviation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
