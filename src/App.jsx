import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Not from "./components/Not";
import CardList from "./components/CardList";
import Have from "./components/Have";
import Work from "./components/Work";
import AddElement from "./components/AddElement";
import AddList from "./components/AddList";
import Ishonch from "./components/Ishonch";
import Post from "./components/Post";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="not" element={<Not />} />
          <Route path="have" element={<Have />} />
          <Route path="work" element={<Work />} />
          <Route path="dashboard" element={<Post />} />
          <Route path="add" element={<AddElement />} />
          <Route path="ishonch" element={<Ishonch />} />
          <Route path="/list/:id" element={<CardList />} />
          <Route path="/liist/:id" element={<AddList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
