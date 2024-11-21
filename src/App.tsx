import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Suspense } from "react";
import LoadingFallback from "./components/LoadingFallBack";
import MainView from "./components/main/view";
import AuthorizationView from "./components/authorization/view";
import RegistrationView from "./components/registration/view";
import { ThemeProvider } from "./components/themeProvider";
import { useTranslation } from "react-i18next";
import AboutView from "./components/about/view";

function App() {

  const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
  };
  const { t } = useTranslation();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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



<Route
      path="about"
      element={
        <Suspense fallback={<LoadingFallback />}>
          <AboutView />
        </Suspense>
      }
    />


<Route
      path="registration"
      element={
        <Suspense fallback={<LoadingFallback />}>
          <RegistrationView />
        </Suspense>
      }
    />

  </Route>
</Routes>

    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
