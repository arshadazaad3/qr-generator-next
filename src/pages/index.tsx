import type { NextPage } from "next";
import React, { Suspense } from "react";
import { Loader } from "../components";

const HomePage = React.lazy(() => import("./home"));

const App: NextPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    </>
  );
};

export default App;
