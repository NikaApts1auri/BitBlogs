import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Suspense } from "react";
import LoadingFallback from "./components/LoadingFallBack";
import MainView from "./components/main/view";
import AuthorizationView from "./components/authorization/view";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Layout />}>
    <Route
      index
      element={
        <Suspense fallback={<LoadingFallback />}>
          <MainView />
        </Suspense>
      }
    />
    <Route
      path="authorization"
      element={
        <Suspense fallback={<LoadingFallback />}>
          <AuthorizationView />
        </Suspense>
      }
    />
  </Route>
</Routes>

    </BrowserRouter>
  );
}

export default App;
