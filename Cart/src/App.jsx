import React from "react";

const Container = React.lazy(() => import("container/Container"));

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Container />
    </React.Suspense>
  );
}

function Loading() {
  return <div>Loading...</div>;
}

export default App;