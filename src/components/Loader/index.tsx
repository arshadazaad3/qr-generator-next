import type { NextPage } from "next";

const Loader: NextPage = () => {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <h1 className="font-mono text-xl code">
          <span className="text-purple-700">Loading...</span>
        </h1>
      </main>
    </div>
  );
};

export default Loader;
