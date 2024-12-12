import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Suspense, useEffect } from "react";
import LoadingFallback from "./components/LoadingFallBack";
import MainView from "./components/main/view";
import AuthorizationView from "./components/authorization/view";
import RegistrationView from "./components/registration/view";
import { ThemeProvider } from "./components/themeProvider";
import AboutView from "./components/about/view";
import AuthorView from "./components/author/view";
import { supabase } from "./components/supabase";
import { AuthProvider } from "./context/auth";
import { useAuthContext } from "./components/hooks/useAuthContext";

function App() {
  const { handleSetUser } = useAuthContext();

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        handleSetUser(session);
        console.log(session);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        handleSetUser(session);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthProvider>
      {" "}
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Suspense
                    fallback={<LoadingFallback />}
                  >
                    <MainView />
                  </Suspense>
                }
              />
              <Route
                path="authorization"
                element={
                  <Suspense
                    fallback={<LoadingFallback />}
                  >
                    <AuthorizationView />
                  </Suspense>
                }
              />
              <Route
                path="author"
                element={
                  <Suspense
                    fallback={<LoadingFallback />}
                  >
                    <AuthorView />
                  </Suspense>
                }
              />
              <Route
                path="about"
                element={
                  <Suspense
                    fallback={<LoadingFallback />}
                  >
                    <AboutView />
                  </Suspense>
                }
              />
              <Route
                path="registration"
                element={
                  <Suspense
                    fallback={<LoadingFallback />}
                  >
                    <RegistrationView />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
