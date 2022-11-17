import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbarcomponent } from "./components";
import { Home, Sukses } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbarcomponent />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sukses" element={<Sukses />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
