import Link from "next/link";
import React from "react";

const BlogPage = () => {
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
      </div>
    </div>
  );
};

export default BlogPage;
