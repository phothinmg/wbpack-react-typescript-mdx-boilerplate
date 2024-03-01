import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Post from "./post.mdx";
import "./css/index.css";

export default function App() {
  return (
    <div>
      <Post />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
