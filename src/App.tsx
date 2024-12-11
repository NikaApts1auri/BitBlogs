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
import { AuthProvider } from "./context/auth"; // Import AuthProvider here

function App() {
  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } =
        await supabase.auth.getSession();
      if (error) {
        console.error(
          "Error fetching session:",
          error
        );
        return;
      }

      const session = data?.session;
      console.log(
        "Session from getSession:",
        session
      );
    };

    fetchSession();
  }, []);

  return (
    <AuthProvider>
      {" "}
      {/* Ensure this wraps your entire app */}
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
