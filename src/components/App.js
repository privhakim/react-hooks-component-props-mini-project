import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header blogName="Kim blog" />

      {/* About component */}
      <About blogLogo="https://via.placeholder.com/215" aboutText="About your blog..." />

      {/* ArticleList component */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
