import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//! Ett annat sätt att använda store!
/* const store = legacy_createStore();

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About.jsx";
import { Github } from "./pages/Github.jsx";
import { Contact } from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
        loader: () => (document.title = "Resume  Landing page"),
      },
      {
        path: "/Github",
        element: <Github />,
        loader: () => (document.title = "Resume  Projects"),
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: () => (document.title = "Resume  Contact"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <React.StrictMode>
      <RouterProvider router={router}>
      <App />
      </RouterProvider>
    </React.StrictMode>
    //{" "}
  </Provider>
); */
