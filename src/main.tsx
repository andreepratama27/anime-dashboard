import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.tsx";
import "./index.css";

/* Screens */
import AnimeDetail from "./pages/anime-detail";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorite from "./pages/favorite/index.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/detail/:id", element: <AnimeDetail /> },
  { path: "/favorite", element: <Favorite /> },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
