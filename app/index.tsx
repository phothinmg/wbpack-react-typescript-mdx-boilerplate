import React from "react";
import { createRoot } from "react-dom/client";
import Post from "./mdxs/post.mdx";
import "./assets/css/index.css";
import Nav from "./assets/components/Nav";
export default function App() {
  return (
    <div>
      <Nav />
      <Post />
    </div>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
