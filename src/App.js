import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPosts />}></Route>
        <Route path="/:slug" element={<OnePost />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
