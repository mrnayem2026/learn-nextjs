import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Album"
            className="w-[700px] h-[400px]"
          />
        </figure>
        <div className="card-body w-2/4">
          <h2 className="text-4xl font-mono font-semibold text-sky-400">
            5 VSCode extensions/tricks to speed up React/Nextjs development
            workflow
          </h2>
          <p>
            When it comes to React and Next.js development, optimizing your
            workflow is key to maximizing productivity and efficiency. Visual
            Studio Code (VSCode), a powerful and widely used code editor, offers
            a multitude of extensions and <br /> <br /> tricks that can enhance
            your development experience and speed up your React/Next.js
            projects. In this blog post, we will explore five essential VSCode
            extensions and tricks specifically designed to streamline your
            React/Next.js development workflow .........................
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-outline">  <Link href="/blog">Learn more</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
}
