import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Post from "./mdxs/post.mdx";
import "./assets/css/index.css";

import Nav from "./assets/components/Nav";
export default function App() {
  return (
    <div>
      <Nav />
      <Post toc />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
