import React from "react";
import { createRoot } from "react-dom/client";
import Post from "./mdxs/post.mdx";
import "./css/index.css";
export default function App() {
  return (
    <div>
      <h3>Hello World</h3>
      <Post />
    </div>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
