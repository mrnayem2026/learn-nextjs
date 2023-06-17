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
      </div>
    </div>
  );
};

export default BlogPage;
