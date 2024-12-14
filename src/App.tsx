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

import AboutView from "./components/about/view";
import AuthorView from "./components/author/view";

import { AuthProvider } from "./context/auth";
import { useAuthContext } from "./components/hooks/useAuthContext";
import { supabase } from "./supabase/supaClient";
import { ThemeProvider } from "./themeProvider";

import ProtectedRoute from "./guard/ProtectedRoute";
import { PublicRoute } from "./guard/PublicRoute";
import NotFound from "./components/404/notFound";
import ProfileView from "./components/profile/view";

function App() {
  const { handleSetUser } = useAuthContext();

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error(
          "Error getting session:",
          error
        );
      } else {
        handleSetUser(session);
      }
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        handleSetUser(session);
        console.log(session);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [handleSetUser]);

  return (
    <AuthProvider>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <BrowserRouter>
          <Routes>
            {/* Public routes - როდესაც არ ხარ დალოგინებული */}
            <Route element={<PublicRoute />}>
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

            {/* Protected routes - მხოლოდ ავტორიზებული მომხმარებლებისთვის */}
            <Route element={<ProtectedRoute />}>
              <Route
                path="/"
                element={<Layout />}
              >
                <Route
                  index
                  element={
                    <Suspense
                      fallback={
                        <LoadingFallback />
                      }
                    >
                      <MainView />
                    </Suspense>
                  }
                />
                <Route
                  path="author"
                  element={
                    <Suspense
                      fallback={
                        <LoadingFallback />
                      }
                    >
                      <AuthorView />
                    </Suspense>
                  }
                />
                <Route
                  path="about"
                  element={
                    <Suspense
                      fallback={
                        <LoadingFallback />
                      }
                    >
                      <AboutView />
                    </Suspense>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <Suspense
                      fallback={
                        <LoadingFallback />
                      }
                    >
                      <ProfileView />
                    </Suspense>
                  }
                />
              </Route>
            </Route>
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
